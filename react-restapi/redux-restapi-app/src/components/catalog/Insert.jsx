import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Insert } from "../../redux/actions";

const ProductInsert=()=>{

    const dispatch =useDispatch();
    const navigate = useNavigate();
    const [product, setProduct]= useState(
        {title: '', 
        description: '', 
        unitprice:'', 
        quantity:'', 
        likes: ''}
    );
    
    const handleChange = (event) => {
    const { name, value } = event.target;
        setProduct({
            ...product, [name]: name === 'unitPrice' || name === 'quantity' || name === 'likes' ? parseFloat(value) : value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(Insert(product));
        setProduct({title:'', description:'', unitprice:'', quantity:'', likes:'',})
        navigate("/");
    };

    return(
        <>
        <h2>Insert Product</h2>
        <div>
        <form onSubmit={handleSubmit}>
        <table>
                    <tbody>
                        <tr>
                            <td>Title:</td>
                            <td><input type="text" id="title" name="title" value={product.id} onChange={handleChange}  /></td>
                        </tr>
                        <tr>
                            <td>Description:</td>
                            <td><input type="text" id="description" name="description" value={product.description} onChange={handleChange}  /></td>
                        </tr>
                        <tr>
                            <td>Unit Price:</td>
                            <td><input type="number" id="unitprice
                            " name="unitprice" value={product.unitprice} onChange={handleChange}  /></td>
                        </tr>
                        <tr>
                            <td>Quantity:</td>
                            <td><input type="number" id="quantity" name="quantity" value={product.quantity} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Likes:</td>
                            <td><input type="number" id="likes" name="likes" value={product.likes} onChange={handleChange} /></td>
                        </tr>
                        
                        <tr>
                            <td><button type="submit"> Insert Product</button></td>
                        </tr>
                    </tbody>
                    </table>
                </form>
            </div>
        
        </>
    );
};

export default ProductInsert;