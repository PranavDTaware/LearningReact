import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import CustomerReducer from "./reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    customer:CustomerReducer,
})

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;
