
const initialState={
    customers:[],
};

const CustomerReducer=(state=initialState,action)=>{
    switch(action.type){

        case 'CUSTOMERS':
            return {...state, customers:action.payload||[]};

        case 'CUSTOMERINSERT':
            return {...state, customers:[...state.customers,action.payload]};

        case 'CUSTOMERUPDATE':
            return {...state, 
                customers:state.customers.map(customer=>customer.id===action.payload.id ? action.payload:customer)
            };

        case 'CUSTOMERDELETE':
            return {...state,
                customers:state.customers.filter(customer=>customer.id !== action.payload.id)
            };
           
        default: return state;
    }
};

export default CustomerReducer;