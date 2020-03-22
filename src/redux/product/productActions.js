import {FETCH_PRODUCTS_REQUEST,FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_FAILURE, LOADMORE_PRODUCTS_SUCCESS,SEARCH_PRODUCTS_SUCCESS} from './productType'; 
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


const searchProductsSuccess = (products) => {
    return{
        type:SEARCH_PRODUCTS_SUCCESS,
        payload:products,
       
    }
}

const loadProductsSuccess = (products, max, order, sort, offset) => {
    return{
        type: LOADMORE_PRODUCTS_SUCCESS,
        payload:products,
        payloadmax:max,
        payloadorder:order,
        payloadsort:sort,
        payloadoffset:offset
    }
}



export const searchProduct=(searchColoumn,search)=>{
    return (dispatch) => {
        dispatch(fetchProductsRequest)
        axios.get(SERVER_URL+'/productSearch?search='+search+'&searchColumn='+searchColoumn)
        .then(response => {
            var products = response.data.product
            console.log("search value is "+products)
            dispatch(searchProductsSuccess(products))
           // dispatch(loadCompanysSuccess(companys, max, order, sort, offset))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchProductsFailure(errorMsg))
        }
        )
    }
}


export const fetchProducts = (sort, order, max, offset) => {
    return (dispatch) => {
        dispatch(fetchProductsRequest)
        axios.get(SERVER_URL+'/product?max='+max+'&offset='+offset+'&order='+order+'&sort='+sort)
        .then(response => {
            const products =response.data.product
            dispatch(fetchProductsSuccess(products, max, order, sort, offset))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchProductsFailure(errorMsg))
        }
        )
    }
}

export const loadProducts = (sort, order, max, offset) => {
    return (dispatch) => {
        dispatch(fetchProductsRequest)
        axios.get(SERVER_URL+'/product?max='+max+'&offset='+offset+'&order='+order+'&sort='+sort)
        .then(response => {
            const products =response.data.product
            dispatch(loadProductsSuccess(products, max, order, sort, offset))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchProductsFailure(errorMsg))
        }
        )
    }
}