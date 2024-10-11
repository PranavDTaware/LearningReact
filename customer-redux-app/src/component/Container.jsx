import { useDispatch, useSelector } from "react-redux";
import Customers from "./Crud/Customers";


const Container =()=> {
    
    const customers =useSelector((state)=>state.customer.customers);
    const dispatch=useDispatch();

    const handleChange =()=>{
        dispatch(Customers(customers))
    }
    return(
        <div>
            <h2>customer:{customers.length}</h2>
            <button onClick={handleChange}>Details</button>   
        </div>
    );
};

export default Container;