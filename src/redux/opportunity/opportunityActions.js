import {FETCH_OPPORTUNITIES_REQUEST,FETCH_OPPORTUNITIES_SUCCESS,FETCH_OPPORTUNITIES_FAILURE, LOADMORE_OPPORTUNITIES_SUCCESS, SEARCH_OPPORTUNITIES_SUCCESS} from './opportunityType'; 
import axios from 'axios';
import SERVER_URL from '../../config';


 const fetchOpportunitiesRequest = () => {
    return{
        type:FETCH_OPPORTUNITIES_REQUEST
    }
}

const fetchOpportunitiesSuccess = (offers, max, order, sort, offset) => {
    return{
        type:FETCH_OPPORTUNITIES_SUCCESS,
        payload:offers,
        payloadmax:max,
        payloadorder:order,
        payloadsort:sort,
        payloadoffset:offset
    }
}

const fetchOpportunitiesFailure = error => {
    return{
        type:FETCH_OPPORTUNITIES_FAILURE,
        payload:error
        
    }
}

const loadOpportunitiesSuccess = (offers, max, order, sort, offset) => {
    return{
        type:LOADMORE_OPPORTUNITIES_SUCCESS,
        payload:offers,
        payloadmax:max,
        payloadorder:order,
        payloadsort:sort,
        payloadoffset:offset
    }
}

const searchOpportunitiesSuccess = (offers) => {
    return{
        type: SEARCH_OPPORTUNITIES_SUCCESS,
        payload: offers
    }
}





export const fetchOpportunities = (sort,order,max,offset) => {
    return (dispatch) => {
        dispatch(fetchOpportunitiesRequest)
        axios.get(SERVER_URL+'/offer?max='+max+'&offset='+offset+'&order='+order+'&sort='+sort)
        .then(response => {
            const opportunities = response.data.offer
            dispatch(fetchOpportunitiesSuccess(opportunities, max, order, sort, offset))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchOpportunitiesFailure(errorMsg))
        }
        )
    }
}

export const loadOpportunities = (sort,order,max,offset) => {
    return (dispatch) => {
        dispatch(fetchOpportunitiesRequest)
        axios.get(SERVER_URL+'/offer?max='+max+'&offset='+offset+'&order='+order+'&sort='+sort)
        .then(response => {
            var opportunities = response.data.offer
            dispatch(loadOpportunitiesSuccess(opportunities, max, order, sort, offset))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchOpportunitiesFailure(errorMsg))
        }
        )
    }
}

export const searchOpportunities = ( searchColumn, search) => {
    return (dispatch) => {
        dispatch(fetchOpportunitiesRequest)
        axios.get(SERVER_URL+'offerSearch?search='+search+'&searchColumn='+searchColumn)
        .then(response => {
            var opportunities = response.data.offer
            dispatch(searchOpportunitiesSuccess(opportunities))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchOpportunitiesFailure(errorMsg))
        })
    }

}