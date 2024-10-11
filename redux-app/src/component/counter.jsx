import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/actions";


const Counter=()=>{
    
    const count=useSelector((state)=>state.count);
    const dispatch=useDispatch();

    return(
        <div>
            <h2>Counter:{count}</h2>

            <button onClick={()=>dispatch(increment())}>Increase</button>
            <button onClick={()=>dispatch(decrement())}>Decrease</button>   
            <button onClick={()=>dispatch(reset())}>Reset</button>   

        </div>
    );
};

export default Counter