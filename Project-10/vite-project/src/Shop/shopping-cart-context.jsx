import { createContext } from 'react'

// For better auto-completion we add the values inside object
const CartContext = createContext({
    items: [],
    addItemToCart: () => {}
});

export default CartContext;