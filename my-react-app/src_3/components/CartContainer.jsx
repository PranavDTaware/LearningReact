import { CartProvider } from "../context/CartContext";
import ProductService from "../services/ProductService";
import Cart from "./Cart";
import Product from "./Product";

const flowers=ProductService.getAll();

function CartContainer(){
    return(

        <CartProvider>
            
            <div>
                <h2>Todays Fresh Flowers</h2>
                <table>

                        <tbody>
                            <tr>
                            {
                                flowers.map((product)=>(
                                <td key={product.id}>
                                <Product 
                                    id={product.id} 
                                    name={product.title} 
                                    image={product.imageurl} 
                                    price={product.unitprice}
                                />
                                </td>
                                ))
                            }
                            </tr>
                        </tbody>

                        <td><Cart/></td>
                        
                </table>
            </div>

        </CartProvider>
            
    );
};

export default CartContainer;