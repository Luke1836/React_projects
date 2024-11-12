import { createContext, useState, useReducer } from 'react'
import { DUMMY_PRODUCTS } from '../dummy-products.js';


// For better auto-completion we add the values inside object
export const CartContext = createContext({
    items: [],
    addItemToCart: () => {},
    updateItemsQuantity: () => {},
});


function ShoppingCartReducer(state, action)
{
  if(action.type === 'ADD_ITEM')
  {
    const updatedItems = [...state.items];
    
    // Get the cart item selected
    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    );
    const existingCartItem = updatedItems[existingCartItemIndex];
    
    if (existingCartItem) 
    {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } 
    else 
    {
      const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
      updatedItems.push({
          id: action.payload,
          name: product.title,
          price: product.price,
          quantity: 1,
      });
    }
    return {
      ...state, //Saving the previous state 
      items: updatedItems,
    };
  }
  else if(action.type === 'UPDATE_ITEM')
  {
    const updatedItems = [...state.items];
          const updatedItemIndex = updatedItems.findIndex(
                (item) => item.id === action.payload.productId
          );
    
          const updatedItem = {
            ...updatedItems[updatedItemIndex],
          };
    
          updatedItem.quantity += action.payload.amount;
    
          if (updatedItem.quantity <= 0) 
            updatedItems.splice(updatedItemIndex, 1);
          else
            updatedItems[updatedItemIndex] = updatedItem;
    
          return {
            ...state,
            items: updatedItems,
          };
  }

  return state;
}

// Context handler function
export default function CartContextProvider({ children })
{
    //Reducer State and Dispatching function
    const [ shoppingCartState, shoppingCartDispatch ] = useReducer(
      ShoppingCartReducer, 
      {
        items: [],
      }
    );  // Giving the initial state as the second parameter
    
      function handleAddItemToCart(id) 
      {
        shoppingCartDispatch({
          type: 'ADD_ITEM',
          payload: id
        });
      }
    
      function handleUpdateCartItemQuantity(productId, amount) 
      {
        shoppingCartDispatch({
          type: 'UPDATE_ITEM',
          payload: {
            productId,
            amount
          }
        });
      }
    
      // Context State Link
      const ctxValue = {
        items: shoppingCartState.items,
        addItemToCart: handleAddItemToCart,
        updateItemsQuantity: handleUpdateCartItemQuantity,
      }
      
      return (
            <CartContext.Provider value={ ctxValue }>
                { children }
            </CartContext.Provider>
      );
}