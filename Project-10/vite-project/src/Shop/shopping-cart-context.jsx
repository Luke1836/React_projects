import { createContext, useState } from 'react'
import { DUMMY_PRODUCTS } from '../dummy-products.js';


// For better auto-completion we add the values inside object
export const CartContext = createContext({
    items: [],
    addItemToCart: () => {},
    updateItemsQuantity: () => {},
});


export default function CartContextProvider({ children })
{
    const [shoppingCart, setShoppingCart] = useState({
                                                      items: [],
                                                    });
    
      function handleAddItemToCart(id) 
      {
        setShoppingCart(( prevShoppingCart ) => {
          const updatedItems = [...prevShoppingCart.items];
    
          // Get the cart item selected
          const existingCartItemIndex = updatedItems.findIndex(
            (cartItem) => cartItem.id === id
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
            const product = DUMMY_PRODUCTS.find((product) => product.id === id);
            updatedItems.push({
              id: id,
              name: product.title,
              price: product.price,
              quantity: 1,
            });
          }
    
          return {
            items: updatedItems,
          };
        });
      }
    
      
    
      function handleUpdateCartItemQuantity(productId, amount) 
      {
        setShoppingCart((prevShoppingCart) => {
          const updatedItems = [...prevShoppingCart.items];
          const updatedItemIndex = updatedItems.findIndex(
                (item) => item.id === productId
          );
    
          const updatedItem = {
            ...updatedItems[updatedItemIndex],
          };
    
          updatedItem.quantity += amount;
    
          if (updatedItem.quantity <= 0) 
            updatedItems.splice(updatedItemIndex, 1);
          else
            updatedItems[updatedItemIndex] = updatedItem;
    
          return {
            items: updatedItems,
          };
        });
      }
    
      // Context State Link
      const ctxValue = {
        items: shoppingCart.items,
        addItemToCart: handleAddItemToCart,
        updateItemsQuantity: handleUpdateCartItemQuantity,
      }
      
      return (
            <CartContext.Provider value={ ctxValue }>
                { children }
            </CartContext.Provider>
      );
}