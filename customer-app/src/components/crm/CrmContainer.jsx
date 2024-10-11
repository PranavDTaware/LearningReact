import { BrowserRouter, Link } from "react-router-dom";
import { CustomerProvider } from "../../context/CustomerContext";
import Customer from "./customer";
import AppRoutes from "../../Routes/Route";
import CustomersService from "../../services/customerservice";


const customers=CustomersService.getAllCustomers();

function CrmContainer(){

    return(
        <div>
            <h2>Customer Data</h2>
            <hr />
                    <BrowserRouter>
                        <AppRoutes/>               
                    </BrowserRouter> 

                <CustomerProvider>
                    <div>
                        <h2>Customers</h2>
                        <table>
                                <tbody>
                                    <tr>
                                    {
                                        customers.map((customer)=>(

                                            <li key={customer.id}>{customer.firstname} 
                    
                                                    <Link to={`/customers/details/${customer.id}`}>Details|</Link>
                                                    <Link to={`/customers/update/${customer.id}`}>Update|</Link> 
                                                    <Link to={`/customers/delete/${customer.id}`}>Delete|</Link>
                                                    
                                            </li>))
                                    }
                                    </tr>
                                </tbody>
                                <p><Customer/></p>
                        </table>
                    </div>
                </CustomerProvider>  
        </div>
    );
};

export default CrmContainer;