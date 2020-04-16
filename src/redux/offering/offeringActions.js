import {FETCH_OFFERINGS_REQUEST,FETCH_OFFERINGS_SUCCESS,FETCH_OFFERINGS_FAILURE, LOADMORE_OFFERINGS_SUCCESS, SEARCH_OFFERINGS_SUCCESS} from './offeringType'; 
import axios from 'axios';
import SERVER_URL from '../../config';


 const fetchOfferingsRequest = () => {
    return{
        type:FETCH_OFFERINGS_REQUEST
    }
}

const fetchOfferingsSuccess = (offers, max, order, sort, offset) => {
    return{
        type:FETCH_OFFERINGS_SUCCESS,
        payload:offers,
        payloadmax:max,
        payloadorder:order,
        payloadsort:sort,
        payloadoffset:offset
    }
}

const fetchOfferingsFailure = error => {
    return{
        type:FETCH_OFFERINGS_FAILURE,
        payload:error
        
    }
}

const loadOfferingsSuccess = (offers, max, order, sort, offset) => {
    return{
        type:LOADMORE_OFFERINGS_SUCCESS,
        payload:offers,
        payloadmax:max,
        payloadorder:order,
        payloadsort:sort,
        payloadoffset:offset
    }
}

const searchOfferingsSuccess = (offers) => {
    return{
        type: SEARCH_OFFERINGS_SUCCESS,
        payload: offers
    }
}





export const fetchOfferings = (sort,order,max,offset) => {
    return (dispatch) => {
        dispatch(fetchOfferingsRequest)
        axios.get(SERVER_URL+'/offer?max='+max+'&offset='+offset+'&order='+order+'&sort='+sort)
        .then(response => {
            const offerings = response.data.offer
            dispatch(fetchOfferingsSuccess(offerings, max, order, sort, offset))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchOfferingsFailure(errorMsg))
        }
        )
    }
}

export const loadOfferings = (sort,order,max,offset) => {
    return (dispatch) => {
        dispatch(fetchOfferingsRequest)
        axios.get(SERVER_URL+'/offer?max='+max+'&offset='+offset+'&order='+order+'&sort='+sort)
        .then(response => {
            var offerings = response.data.offer
            dispatch(loadOfferingsSuccess(offerings, max, order, sort, offset))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchOfferingsFailure(errorMsg))
        }
        )
    }
}

export const searchOfferings = ( searchColumn, search) => {
    return (dispatch) => {
        dispatch(fetchOfferingsRequest)
        axios.get(SERVER_URL+'offerSearch?search='+search+'&searchColumn='+searchColumn)
        .then(response => {
            var offerings = response.data.offer
            dispatch(searchOfferingsSuccess(offerings))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchOfferingsFailure(errorMsg))
        })
    }

}