import {FETCH_DEALS_REQUEST,FETCH_DEALS_SUCCESS,FETCH_DEALS_FAILURE, LOADMORE_DEALS_SUCCESS, SEARCH_DEALS_SUCCESS} from './dealType'; 
import axios from 'axios';
import SERVER_URL from '../../config';


 const fetchDealsRequest = () => {
    return{
        type:FETCH_DEALS_REQUEST
    }
}

const fetchDealsSuccess = (deals, max, order, sort, offset) => {
    return{
        type:FETCH_DEALS_SUCCESS,
        payload:deals,
        payloadmax:max,
        payloadorder:order,
        payloadsort:sort,
        payloadoffset:offset
    }
}

const fetchDealsFailure = error => {
    return{
        type:FETCH_DEALS_FAILURE,
        payload:error
        
    }
}

const loadDealsSuccess = (deals, max, order, sort, offset) => {
    return{
        type:LOADMORE_DEALS_SUCCESS,
        payload:deals,
        payloadmax:max,
        payloadorder:order,
        payloadsort:sort,
        payloadoffset:offset
    }
}

const searchDealsSuccess = (deals) => {
    return{
        type: SEARCH_DEALS_SUCCESS,
        payload: deals
    }
}





export const fetchDeals = (sort,order,max,offset) => {
    return (dispatch) => {
        dispatch(fetchDealsRequest)
        axios.get(SERVER_URL+'/offer?max='+max+'&offset='+offset+'&order='+order+'&sort='+sort)
        .then(response => {
            const deals = response.data.offer
            dispatch(fetchDealsSuccess(deals, max, order, sort, offset))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchDealsFailure(errorMsg))
        }
        )
    }
}

export const loadDeals = (sort,order,max,offset) => {
    return (dispatch) => {
        dispatch(fetchDealsRequest)
        axios.get(SERVER_URL+'/offer?max='+max+'&offset='+offset+'&order='+order+'&sort='+sort)
        .then(response => {
            var deals = response.data.offer
            dispatch(loadDealsSuccess(deals, max, order, sort, offset))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchDealsFailure(errorMsg))
        }
        )
    }
}

export const searchDeals = ( searchColumn, search) => {
    return (dispatch) => {
        dispatch(fetchDealsRequest)
        axios.get(SERVER_URL+'offerSearch?search='+search+'&searchColumn='+searchColumn)
        .then(response => {
            var deals = response.data.offer
            dispatch(searchDealsSuccess(deals))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchDealsFailure(errorMsg))
        })
    }

}