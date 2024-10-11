import { useContext, useState, } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomerContext from "../../context/CustomerContext";

const CustomerUpdate=()=>{

    const { id } = useParams();
    const { customers, updateCustomer } = useContext(CustomerContext)
    const editCustomer= customers.find(c => c.id === parseInt(id));

    const [customer, setCustomer]=useState(editCustomer);

    const navigate = useNavigate();

    

    const handleChange=(event)=>{
        console.log("text change");
        setCustomer({ ...customer, [event.target.name]: event.target.value });
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log("form submit button clicked");
        updateCustomer(customer);
        navigate('/customers');        
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