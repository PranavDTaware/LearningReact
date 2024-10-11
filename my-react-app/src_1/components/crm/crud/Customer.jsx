import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomersService from "../../../services/customerservice";

const Customer=()=>{
    const {id} = useParams()
    const [customer, setcustomer] = useState({ id:1, 
                            firstname:"", 
                            lastname:"", 
                            email: "", 
                            contact:""})

    useEffect(() => {
        const existingcustomer =CustomersService.getCustomerById( parseInt(id));
        if (existingcustomer) {
            setcustomer(existingcustomer);
    }
}, [id]);

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