import { Component } from "react";

class CustomerClass extends Component{

    constructor(props){
        super(props);
        this.state={
            count:0
        };
    }

    componentDidMount(){
        console.log("component did Mount is called");
    }

    increment=()=>{
        this.setState((prevState)=>({count: prevState.count+1}));
    };

    decrement=()=>{
        this.setState((prevState)=>({count: prevState.count-1}));
    };

    shouldComponentUpdate(){
        console.log("Should component is called");
        return true;
    }


    render(){

        return(
                <div>
                    <h4>Customer Count:{this.state.count}</h4>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.increment}>+</button>
                </div>
        )
    }

    componentWillUnmount(){
        console.log("component will Unmount is called");
    }
}

export default CustomerClass;