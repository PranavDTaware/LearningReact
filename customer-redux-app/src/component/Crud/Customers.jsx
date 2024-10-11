import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Customers } from "../../redux/actions";

const CustomersComponent=()=>{

    const dispatch =useDispatch();
    const customers= useSelector((state)=> state.customer.customers||[]);

    useEffect(()=> {
        if (customers.length ===0){
            dispatch(Customers());
        }
    },[dispatch, customers.length]);

    

    return(
        <>
        <h2>Top Customers</h2>
            <Link to={`/customers/insert`}>Add new Customer</Link>

            <ul>
                {customers.length > 0 ?(
                customers.map((customer)=>(

                        <li key={customer.id}>{customer.firstname} 

                                <Link to={`/customers/details/${customer.id}`}>Details|</Link>
                                <Link to={`/customers/update/${customer.id}`}>Update|</Link> 
                                <Link to={`/customers/delete/${customer.id}`}>Delete|</Link>


                                </li>
                    ))
                ) : (
                    <li>No customers available</li>
                )}
            </ul>
        
        </>
    );
};

export default CustomersComponent;