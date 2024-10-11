import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { InsertCustomer } from "../../redux/actions";

const CustomerInsert=()=>{

    const [customer, setCustomer]= useState(
        {id:"", firstname:"" , lastname:"",email: "", contact:"",}
    );
    const dispatch =useDispatch();
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCustomer((prevCustomer) => ({
            ...prevCustomer,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(InsertCustomer(customer));
        navigate("/customers");
    };

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
                            <td><input type="email" id="email" name="email" value={customer.email} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Contact </td>
                            <td><input type="text" id="contact" name="contact" value={customer.contact} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td><button type="submit"> Insert</button></td>
                        </tr>
                    </tbody>
                    </table>
                </form>
            </div>
            
        </>
    );
};

export default CustomerInsert;