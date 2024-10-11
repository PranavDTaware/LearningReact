import { useState } from "react";
import CustomersService from "../../../services/customerservice";
import { useNavigate } from "react-router-dom";

const CustomerInsert=()=>{

    const [customer, setCustomer]=useState(
        {
            id:'', 
            firstname:"",
            lastname:"",
            email:"",
            contact:"",
        }
    );

    const navigate = useNavigate();

    const handleChange=(event)=>{
        console.log("text change");
        console.log(event.target);
        const{name, value}=event.target;
        setCustomer((prevCustomer)=>(
            {
                ...prevCustomer, [name]:value
            }))
        
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log("form submit button clicked");
        console.log(customer);
        CustomersService.register(customer);
        console.log(CustomersService.getAllCustomers());
        
    }

    const handleInsert=(event)=>{

        event.preventDefault();

        navigate('/customers'); 

    }


    return(
        <>
        
        <h2>Insert Customer</h2>
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
                            <td><input type="text" id="contact" name="contact" value={customer.conatact} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td><button type="submit" onClick={handleInsert}> Insert</button></td>
                        </tr>
                    </tbody>
                    </table>
                </form>
            </div>
            
        </>
    )
}

export default CustomerInsert;