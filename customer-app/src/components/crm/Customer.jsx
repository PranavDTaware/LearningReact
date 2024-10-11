import { useContext } from "react";
import { useParams } from "react-router-dom";
import CustomerContext from "../../context/CustomerContext";

const Customer=()=>{
    const {id} = useParams();

    const {customers}= useContext(CustomerContext);

    const customer = customers.find(c => c.id === parseInt(id));

    return(
        <>
        <h3>Customer details</h3>
            <p>Name: {customer.firstname} {customer.lastname}</p>
            <p>Email: {customer.email}</p>
            <p>Contact: {customer.contact}</p>
            <p>Location: {customer.location}</p>
        </>
    )
}

export default Customer;