import {  useEffect, useState, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { UpdateCustomer } from "../../redux/actions";

const CustomerUpdate=()=>{

    const { id } = useParams();
    const dispatch =useDispatch();
    const navigate = useNavigate();

    const customers = useSelector((state)=> state.customer.customers);
    const editCustomer= customers.find((c) => c.id === parseInt(id));

    const [customer, setCustomer]=useState(editCustomer);
    
    useEffect(() => {
       
        const foundCustomer = customers.find((c) => c.id === parseInt(id));
        if (foundCustomer) {
            setCustomer(foundCustomer); 
        } else {
            navigate('/customers'); 
        }
    }, [customers, id, navigate]);
    

    const handleChange=(event)=>{
        console.log("text change");
        setCustomer({ ...customer, [event.target.name]: event.target.value });
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        if (customer) {
            dispatch(UpdateCustomer(customer));
        console.log("form submit button clicked");
        navigate('/customers');   
        }     
    };
    

    return(
        <>
        
        <h2>Update Customer</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <table>
                    <tbody>
                        <tr>
                            <td>Id:</td>
                            <td><input type="text" id="id" name="id" value={customer.id} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>FirstName</td>
                            <td><input type="text" id="firstname" name="firstname" value={customer.firstname} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Lastname</td>
                            <td><input type="text" id="lastname" name="lastname" value={customer.lastname} onChange={handleChange}/></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td><input type="text" id="email" name="email" value={customer.email} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Contact </td>
                            <td><input type="text" id="contact" name="contact" value={customer.contact} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td><button type="submit">Update</button></td>
                        </tr>
                    </tbody>
                    </table>
                </form>
            </div>
            
        </>
    )
}

export default CustomerUpdate;