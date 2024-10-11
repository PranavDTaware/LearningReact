import { Link, Outlet } from "react-router-dom";

const Bi=()=> {

    return(
        <div>
            <p><b>Charts</b></p>
            <hr />
            <nav>
                <Link to="barchart"> Bar Chart</Link> | <Link to="linechart"> Line Chart</Link> | <Link to="piechart"> Pie Chart</Link> |
            </nav>
            <hr />
            <Outlet/>
        </div>
    )
}

export default Bi;