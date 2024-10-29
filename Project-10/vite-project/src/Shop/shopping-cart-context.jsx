import { createContext } from 'react'

// For better auto-completion we add the values inside object
export const CartContext = createContext({
    items: [],
    addItemToCart: () => {},
    updateItemsQuantity: () => {},
});

export default function CartContextProvider()
{
    
}