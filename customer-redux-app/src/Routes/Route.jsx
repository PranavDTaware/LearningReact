import { Navigate, Route, Routes } from "react-router-dom";
import Customers from "../component/Crud/Customers";
import Customer from "../component/Crud/Customer";
import CustomerUpdate from "../component/Crud/CustomerUpdate";
import CustomerDelete from "../component/Crud/CustomerDelete";
import CustomerInsert from "../component/Crud/CustomerInsert";

const AppRoutes=()=>(
    <Routes>

        <Route path="/" element={<Navigate to="/customers" />} />
        <Route path="/customers/" element={<Customers/>}/>
        <Route path="/customers/details/:id" element={<Customer/>}/>
        <Route path="/customers/update/:id" element={<CustomerUpdate/>}/>
        <Route path="/customers/delete/:id" element={<CustomerDelete/>}/>
        <Route path="/customers/insert/" element={<CustomerInsert/>}/>

    </Routes>

);

export default AppRoutes;