import { useState } from "react";

const CustomerCounter =({customers})=>{

    const [count, setCount] = useState(customers);

    const increment=()=>{
        setCount(count+1);
    };

    const decrement=()=>{
        setCount(count-1);
    };

    return(

            <div>
                <h4>Customer Count:{count}</h4>
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
            </div>
            
    );
};

export default CustomerCounter;