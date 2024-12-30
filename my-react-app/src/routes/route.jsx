import { Routes, Route } from "react-router-dom";
import Home from '../components/standard/Home';
import Aboutus from '../components/standard/Aboutus';
import Contact from '../components/standard/Contact';
import Details from '../components/catalog/Details';
import Login from '../components/membership/Login';
import Services from '../components/standard/Services';
import Register from '../components/membership/Register';
import Dashboard from '../components/crm/Dashboard';
import Profile from  '../components/crm/Profile';
import Settings from '../components/crm/Settings';
import Linechart from '../components/charts/Linechart';
import Barchart from '../components/charts/Barchart';
import Piechart from '../components/charts/Piechart';
import Bi from '../components/charts/Bi';
import Customers from '../components/crm/crud/Customers';
import Customer from '../components/crm/crud/Customer';
import CustomerDelete from '../components/crm/crud/CustomerDelete';
import CustomerInsert from '../components/crm/crud/CustomerInsert';
import CustomerUpdate from '../components/crm/crud/CustomerUpdate';


const AppRoutes =()=>(
    <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/aboutus" element={<Aboutus/>}/>
        <Route path ="/contact" element={<Contact/>}/>
        <Route path ="/details" element={<Details/>}/>
        <Route path ="/login" element={<Login/>}/>
        <Route path ="/services" element={<Services/>}/>
        <Route path ="/register" element={<Register/>}/>
        
        <Route path ="/dashboard" element= {<Dashboard/>}>
            <Route path ="profile" element={<Profile/>}/>
            <Route path ="settings" element={<Settings/>}/>
        </Route>

        <Route path ="/Bi" element= {<Bi/>}>
            <Route path ="piechart" element={<Piechart/>}/>
            <Route path ="barchart" element={<Barchart/>}/>
            <Route path ="linechart" element={<Linechart/>}/>
        </Route>

        <Route path="/customers" element={<Customers/>}/>
        <Route path="/customers/details/:id" element={<Customer/>}/>
        <Route path="/customers/update/:id" element={<CustomerUpdate/>}/>
        <Route path="/customers/delete/:id" element={<CustomerDelete/>}/>
        <Route path="/customers/insert" element={<CustomerInsert/>}/>


</Routes>
);

export default AppRoutes;