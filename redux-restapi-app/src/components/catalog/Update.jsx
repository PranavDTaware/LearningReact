import {  useEffect, useState, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Details, Update } from "../../redux/actions";

const ProductUpdate=()=>{

    const { id } = useParams();
    const dispatch =useDispatch();
    const navigate = useNavigate();

    const product = useSelector(state=> state.product.products.find(p => p.id === parseInt(id)));

    const [formData, setFromData]=useState({
        title:'',
        description:'',
        unitprice:'',
        quantity:'',
        likes:'',
    });
    
    useEffect(() => {
       
        if (!product) {
            dispatch(Details(parseInt(id))); 
        } else {
            setFromData({
                title: product.title ||'',
                description: product.description||'',
                unitPrice: product.unitPrice||'',
                quantity: product.quantity||'',
                likes: product.likes||'',
            })
        }
    }, [dispatch, id, product]);
    

    const handleChange=(event)=>{
        console.log("text change");
        const {name, value} = event.target;
        setFromData({
            ...formData,
            [name]: name === 'unitprice' || name === 'quantity' || name === 'likes' ? parseFloat(value) : value
        });
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        dispatch(Update(parseInt(id), formData));
        console.log("form submit button clicked");
        navigate('/');   
        };     
    
    

    return (
        <>
        
        <h2>Update Customer</h2>
            <div>
                <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>Title:</td>
                            <td><input type="text" id="title" name="title" value={formData.title} onChange={handleChange}  /></td>
                        </tr>
                        <tr>
                            <td>Description:</td>
                            <td><input type="text" id="description" name="description" value={formData.description} onChange={handleChange}  /></td>
                        </tr>
                        <tr>
                            <td>Unit Price:</td>
                            <td><input type="number" id="unitprice
                            " name="unitprice" value={formData.unitprice} onChange={handleChange}  /></td>
                        </tr>
                        <tr>
                            <td>Quantity:</td>
                            <td><input type="number" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Likes:</td>
                            <td><input type="number" id="likes" name="likes" value={formData.likes} onChange={handleChange} /></td>
                        </tr>
                        
                        <tr>
                            <td><button type="submit"> Update Product</button></td>
                        </tr>
                    </tbody>
                 </table>
                </form>
            </div>
            
        </>
    );
};

export default ProductUpdate;