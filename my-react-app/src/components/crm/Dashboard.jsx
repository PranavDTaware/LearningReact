import { Link, Outlet } from "react-router-dom";

const Dashboard =()=> {

    return(
        <div>
            <h2>Dashboard</h2>
            <hr />
            <nav>
                <Link to ="profile">Profile</Link> |<Link to ="settings">Settings</Link>
            </nav>
            <hr />
            <Outlet/>
        </div>
    )
}

export default Dashboard;