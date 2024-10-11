import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Customer=()=>{
    const {id} = useParams();
    const customers = useSelector((state)=> state.customer.customers);

    const customer = customers ? customers.find((customer) => customer.id === parseInt(id)) : null;

    if (!customer) {
        return <div>Customer not found</div>;
    }
    
    return(
        <>
         <h2>Customer Details</h2>
            <p>First Name: {customer.firstname}</p>
            <p>Last Name: {customer.lastname}</p>
            <p>Email: {customer.email}</p>
            <p>Contact Number: {customer.contactnumber}</p>
        </>
    )
}

export default Customer;