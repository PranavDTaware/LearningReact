import {Link} from "react-router-dom";

const Navbar =()=>(
    <nav>
        <Link to="/">Home</Link> |
        <Link to="/aboutus">About us</Link> |
        <Link to="/contact">Contact</Link> |
        <Link to="/details">Details</Link> |
        <Link to="/login">Login</Link> |
        <Link to="/services">Services</Link> |
        <Link to="/register">Register</Link> |
        <Link to="/dashboard">Dashboard</Link> |
        <Link to="/Bi">Bi</Link> |
        <Link to="/customers">Customers</Link>
    </nav>
);

export default Navbar;