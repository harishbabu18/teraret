import {FETCH_PRODUCTS_REQUEST,FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_FAILURE, LOADMORE_PRODUCTS_SUCCESS,SEARCH_PRODUCTS_SUCCESS} from './registerType'; 
import axios from 'axios';
import SERVER_URL from '../../config';

const fetchProductsRequest = () => {
    return{
        type:FETCH_PRODUCTS_REQUEST
    }

}

const fetchProductsSuccess = (products) => {
    return{
        type:FETCH_PRODUCTS_SUCCESS,
        payload:products,
    }
}

const fetchProductsFailure = error => {
    return{
        type:FETCH_PRODUCTS_FAILURE,
        payload:error
        
    }
}

export const post = (values, {address}) => {
    // var addres = JSON.stringify({address})
    console.log (address)
    return (dispatch) => {
        dispatch(fetchProductsRequest)
        axios.post(SERVER_URL+'/'+address, {values})
        .then(response => {
            const products =response.data.product
            dispatch(fetchProductsSuccess(products))
            }
        )
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchProductsFailure(errorMsg))
            }
        )
    }
}
