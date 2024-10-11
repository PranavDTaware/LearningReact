import { DELETE, DETAILS,INSERT, UPDATE } from "./actions";

const initialState={
    products:[],
    product: null,
};

const ProductReducer=(state = initialState,action) => {
    switch(action.type){
        
        case DETAILS:
            return{...state, products:action.payload};

        case INSERT:
            return{...state, products:[...state.products,action.payload]};

        case UPDATE:
            return{...state, products:state.products.map(product =>product.id === action.payload.id ? action.payload : product )};

        case DELETE:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            };

        default:
            return state;
    }
};

export default ProductReducer;