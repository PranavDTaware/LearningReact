import { Route, Routes } from "react-router-dom";
import Customers from "../components/crm/customers";
import Customer from "../components/crm/customer";
import CustomerUpdate from "../components/crm/CustomerUpdate";
import CustomerDelete from "../components/crm/CustomerDelete";
import CustomerInsert from "../components/crm/CustomerInsert";

const AppRoutes=()=>(
    <Routes>

        <Route path="/customers" element={<Customers/>}/>
        <Route path="/customers/details/:id" element={<Customer/>}/>
        <Route path="/customers/update/:id" element={<CustomerUpdate/>}/>
        <Route path="/customers/delete/:id" element={<CustomerDelete/>}/>
        <Route path="/customers/insert/" element={<CustomerInsert/>}/>

    </Routes>

   
);

export default AppRoutes;