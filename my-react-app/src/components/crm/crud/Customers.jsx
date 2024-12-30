import { Link } from "react-router-dom";
import CustomersService from "../../../services/customerservice";

const Customers=()=>{

    const customers=CustomersService.getAllCustomers()
    return(
        <>
        <h2>Top Customers</h2>
            <Link to={`/customers/insert`}>Add new Customer</Link>
        
            <ul>
                {
                customers.map(customer=>(

                        <li key={customer.id}>{customer.firstname} 

                                <Link to={`/customers/details/${customer.id}`}>Details|</Link>
                                <Link to={`/customers/update/${customer.id}`}>Update|</Link> 
                                <Link to={`/customers/delete/${customer.id}`}>Delete|</Link>
                                
                        </li>))
                }
            </ul>
        
        </>
    )
}

export default Customers;