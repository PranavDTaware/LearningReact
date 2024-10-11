
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomerContext from "../../context/CustomerContext";

const CustomerDelete=()=>{
    const { id } = useParams();
    const { customers, deleteCustomer } = useContext(CustomerContext);
    const customer = customers.find(c => c.id === parseInt(id));
    const navigate = useNavigate();
  
    const handleYes=(event)=>{
        event.preventDefault();
        deleteCustomer(id);
      navigate("/customers");
    }
    const handleNotsure=()=>{

      navigate("/customers");

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