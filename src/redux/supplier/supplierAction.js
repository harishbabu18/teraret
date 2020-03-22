import {FETCH_SUPPLIERS_REQUEST,FETCH_SUPPLIERS_SUCCESS,FETCH_SUPPLIERS_FAILURE, LOADMORE_SUPPLIERS_SUCCESS,SEARCH_SUPPLIERS_SUCCESS} from './supplierType'; 
import axios from 'axios';
import SERVER_URL from '../../config';


 const fetchSuppliersRequest = () => {
    return{
        type:FETCH_SUPPLIERS_REQUEST
    }
}

const fetchSuppliersSuccess = suppliers => {
    return{
        type:FETCH_SUPPLIERS_SUCCESS,
        payload:suppliers
    }
}


const searchSuppliersSuccess = (suppliers) => {
    return{
        type:SEARCH_SUPPLIERS_SUCCESS,
        payload:suppliers,
       
    }
}

const fetchSuppliersFailure = error => {
    return{
        type:FETCH_SUPPLIERS_FAILURE,
        payload:error
        
    }
}

const loadSuppliersSuccess = (suppliers) => {
    return{
        type:LOADMORE_SUPPLIERS_SUCCESS,
        payload:suppliers
    }
}



export const searchSupplier=(searchColoumn,search)=>{
    return (dispatch) => {
        dispatch(fetchSuppliersRequest)
        axios.get(SERVER_URL+'/supplierSearch?search='+search+'&searchColumn='+searchColoumn)
        .then(response => {
            var suppliers = response.data.supplier
            console.log("search value is "+suppliers)
            dispatch(searchSuppliersSuccess(suppliers))
           // dispatch(loadCompanysSuccess(companys, max, order, sort, offset))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchSuppliersFailure(errorMsg))
        }
        )
    }
}




export const fetchSuppliers = (sort,order,max,offset) => {
    return (dispatch) => {
        dispatch(fetchSuppliersRequest)
        axios.get(SERVER_URL+'/supplier?max='+max+'&offset='+offset+'&order='+order+'&sort='+sort)
        .then(response => {
            const suppliers =response.data.supplier
            dispatch(fetchSuppliersSuccess(suppliers))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchSuppliersFailure(errorMsg))
        }
        )
    }
}

export const loadSuppliers = (sort,order,max,offset) => {
    return (dispatch) => {
        dispatch(fetchSuppliersRequest)
        axios.get(SERVER_URL+'/supplier?max='+max+'&offset='+offset+'&order='+order+'&sort='+sort)
        .then(response => {
            var suppliers = response.data.supplier
            dispatch(loadSuppliersSuccess(suppliers))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchSuppliersFailure(errorMsg))
        }
        )
    }
}