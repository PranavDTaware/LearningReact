
import { useContext } from 'react';
import CartContext from '../context/CartContext';

function Cart(){

    const {cart, removeItem, getTotalPrice} = useContext(CartContext);

    return(
        <div>
            <h2>Your Cart</h2>
            <hr />
            {
                cart.length === 0 ?(<p>Cart is empty</p>) : (
                <ul>
                    {
                        cart.map((item)=>(
                            // eslint-disable-next-line react/jsx-key
                            <li>
                                    {item.name} - ₹{item.price} x {item.quantity}
                                <button onClick={() => removeItem(item.id)}>Remove</button>
                            </li>
                        ))
                    }
                </ul>
                )
            }
            <hr />
            <p>Total Price: ₹{getTotalPrice().toFixed(2)}</p>
        </div>
    );
}

export default Cart;