// src/redux/store.js
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk'; 
import ProductReducer from './ProductReducer';

const rootReducer = combineReducers({
    product: ProductReducer 
});

const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;
