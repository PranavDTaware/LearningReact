import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import AppRoutes from "../routes/route";

function Container(){
    return(
        <div>
            <h1>Transflower SPA</h1>
            <BrowserRouter>
                <Navbar/>
                <AppRoutes/>
            </BrowserRouter>
        </div>
    )
}

export default Container;