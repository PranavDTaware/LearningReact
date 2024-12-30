import {createContext, useState}  from "react";

const CartContext = createContext();

export function CartProvider({children}) {
    const [cart, setCart] = useState([]);

    // Add item to the cart

    const addItem = (item) =>{
        setCart((prevCart)=> [...prevCart, item]);
    };

    // Remove item from cart

    const removeItem = (itemId) =>{
        setCart((prevCart)=> prevCart.filter((item)=> item.id !== itemId));
    };

    const getTotalPrice=()=>{
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, getTotalPrice}}> {children}
        </CartContext.Provider>
    );


}
export default CartContext;
