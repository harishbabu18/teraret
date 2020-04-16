import {FETCH_RENTS_REQUEST,FETCH_RENTS_SUCCESS,FETCH_RENTS_FAILURE, LOADMORE_RENTS_SUCCESS, SEARCH_RENTS_SUCCESS} from './rentType'; 
import axios from 'axios';
import SERVER_URL from '../../config';


 const fetchRentsRequest = () => {
    return{
        type:FETCH_RENTS_REQUEST
    }
}

const fetchRentsSuccess = (rents, max, order, sort, offset) => {
    return{
        type:FETCH_RENTS_SUCCESS,
        payload:rents,
        payloadmax:max,
        payloadorder:order,
        payloadsort:sort,
        payloadoffset:offset
    }
}

const fetchRentsFailure = error => {
    return{
        type:FETCH_RENTS_FAILURE,
        payload:error
        
    }
}

const loadRentsSuccess = (rents, max, order, sort, offset) => {
    return{
        type:LOADMORE_RENTS_SUCCESS,
        payload:rents,
        payloadmax:max,
        payloadorder:order,
        payloadsort:sort,
        payloadoffset:offset
    }
}

const searchRentsSuccess = (rents) => {
    return{
        type: SEARCH_RENTS_SUCCESS,
        payload: rents
    }
}





export const fetchRents = (sort,order,max,offset) => {
    return (dispatch) => {
        dispatch(fetchRentsRequest)
        axios.get(SERVER_URL+'/rent?max='+max+'&offset='+offset+'&order='+order+'&sort='+sort)
        .then(response => {
            const rents = response.data.rent
            dispatch(fetchRentsSuccess(rents, max, order, sort, offset))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchRentsFailure(errorMsg))
        }
        )
    }
}

export const loadRents = (sort,order,max,offset) => {
    return (dispatch) => {
        dispatch(fetchRentsRequest)
        axios.get(SERVER_URL+'/rent?max='+max+'&offset='+offset+'&order='+order+'&sort='+sort)
        .then(response => {
            var rents = response.data.rent
            dispatch(loadRentsSuccess(rents, max, order, sort, offset))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchRentsFailure(errorMsg))
        }
        )
    }
}

export const searchRent = ( searchColumn, search) => {
    return (dispatch) => {
        dispatch(fetchRentsRequest)
        axios.get(SERVER_URL+'rentSearch?search='+search+'&searchColumn='+searchColumn)
        .then(response => {
            var rents = response.data.rent
            dispatch(searchRentsSuccess(rents))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchRentsFailure(errorMsg))
        })
    }

}