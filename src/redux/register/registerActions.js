import {FETCH_PRODUCTS_REQUEST,FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_FAILURE, LOADMORE_PRODUCTS_SUCCESS,SEARCH_PRODUCTS_SUCCESS} from './registerType'; 
import axios from 'axios';
import SERVER_URL from '../../config';

const fetchProductsRequest = () => {
    return{
        type:FETCH_PRODUCTS_REQUEST
    }

}

const fetchProductsSuccess = (products, max, order, sort, offset) => {
    return{
        type:FETCH_PRODUCTS_SUCCESS,
        payload:products,
        payloadmax:max,
        payloadorder:order,
        payloadsort:sort,
        payloadoffset:offset
    }
}

const fetchProductsFailure = error => {
    return{
        type:FETCH_PRODUCTS_FAILURE,
        payload:error
        
    }
}

export const fetch = (values) => {
    return (dispatch) => {
        dispatch(fetchProductsRequest)
        axios.post(SERVER_URL+'/register?',{values})
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
