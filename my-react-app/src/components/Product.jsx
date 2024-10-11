import { useContext } from "react";
import CartContext from '../context/CartContext';



function Product({id,name,image,price}){

    const {addItem} = useContext(CartContext);
    
const handleClick=()=>{

    addItem({id,name,image,price, quantity:1 });

 };

    return(
    
        <div>
            <img src={image} id={id} width="100"/>
            <p>{name}</p>
            <p>₹{price}</p>
            <button onClick={handleClick}>Add to Cart</button>
        </div>

    );

};

export default Product;