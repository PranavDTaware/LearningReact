
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomersService from "../../../services/customerservice";

const CustomerDelete=()=>{
    const { id } = useParams();

    const navigate = useNavigate();

    const [customer, setcustomer] = useState({
         id: "",  
        firstname:"", 
        lastname:"",
        email: "",
        contactnumber:"",
    
    });
  
    useEffect(() => {
        const existingcustomer =CustomersService.getCustomerById( parseInt(id));
        if (existingcustomer) {
            setcustomer(existingcustomer);
        }
    }, [id]);

    const handleYes=()=>{
      let theExistingCustomerId= parseInt(id);
      CustomersService.remove(theExistingCustomerId);
      navigate("/customers");
    }
    const handleNotsure=()=>{

      navigate("/");

    }
    return(
        <>
        <h2>Delete Customer</h2>
        <p> Name: {customer.firstname} {customer.lastname}</p>
         <p>Email: {customer.email}</p>
         <p>Contact Nubmer:{customer.contactnumber}</p>
         <p>Location: {customer.location}</p>

         <h3>Do you want to delete the Customer ?</h3>
         <button onClick={handleYes}> Yes</button> |
         <button onClick={handleNotsure}> Not sure</button>

        </>
    )
}

export default CustomerDelete;