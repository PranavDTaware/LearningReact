import {createContext, useEffect, useState}  from "react";
import CustomersService from "../services/customerservice";

const CustomerContext = createContext();

export function CustomerProvider({ children }) {
    const [customer, setCustomer] = useState([]);

    useEffect(() =>{
        setCustomer(CustomersService.getAllCustomers());
    },[])

    // Add customer to the customers

    const addCustomer = (customer) =>{
        CustomersService.addCustomer(customer);
        setCustomer(CustomersService.getAllCustomers());
    };
    //Update the customer
    const updateCustomer = (customer) =>{
        CustomersService.updateCustomer(customer);
        setCustomer(CustomersService.getAllCustomers());
    }

    // Remove customer from customers

    const deleteCustomer = (id) =>{
        CustomersService.deleteCustomer(id);
        setCustomer(CustomersService.getAllCustomers());
    };

    
    return(
        <CustomerContext.Provider value={{ customer, addCustomer, updateCustomer, deleteCustomer}}> {children}
        </CustomerContext.Provider>
    );


}
export default CustomerContext;