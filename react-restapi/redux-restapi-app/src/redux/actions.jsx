import ProductServiceFetch from "../services/ProductServiceFetch";

export const DETAILS = 'DETAILS';
export const ERROR  = 'ERROR';
export const INSERT = 'INSERT';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';

export const Details =()=> async (dispatch) =>{
    
    try{
        const products = await ProductServiceFetch.getAllProducts();
        dispatch({
            type: DETAILS,
            payload: products
        });
    }
    catch(error){
        dispatch({
            type: ERROR,
            payload: error.message || 'Failed to fetch products'
        });
    }
};

export const Insert =(product)=> async (dispatch) =>{
    
    try{
        const newProduct = await ProductServiceFetch.createProduct(product);
        dispatch({
            type: INSERT,
            payload: newProduct
        });
    }
    catch(error){
        dispatch({
            type: ERROR,
            payload: error.message || 'Failed to fetch products'
        });
    }
};

export const Update = (id, product) => async (dispatch) => {
    try {
        const updatedProduct = await ProductServiceFetch.updateProduct(id, product);
        dispatch({
            type: UPDATE,
            payload: updatedProduct
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.message || 'Failed to update product'
        });
    }
};

export const Delete = (id) => async (dispatch) => {
    try {
        const deleteProduct = await ProductServiceFetch.deleteProduct(id);
        dispatch({
            type: DELETE,
            payload: deleteProduct
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.message || 'Failed to delete product'
        });
    }
};
