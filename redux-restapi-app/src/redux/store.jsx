import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import ProductReducer from "./reducers";

const rootReducer = combineReducers({
    product:ProductReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;