import {FETCH_MEANS_REQUEST,FETCH_MEANS_SUCCESS,FETCH_MEANS_FAILURE, LOADMORE_MEANS_SUCCESS, SEARCH_MEANS_SUCCESS} from './meanType'; 
import axios from 'axios';
import SERVER_URL from '../../config';


 const fetchMeansRequest = () => {
    return{
        type:FETCH_MEANS_REQUEST
    }
}

const fetchMeansSuccess = (means, max, order, sort, offset) => {
    return{
        type:FETCH_MEANS_SUCCESS,
        payload:means,
        payloadmax:max,
        payloadorder:order,
        payloadsort:sort,
        payloadoffset:offset
    }
}

const fetchMeansFailure = error => {
    return{
        type:FETCH_MEANS_FAILURE,
        payload:error
        
    }
}

const loadMeansSuccess = (means, max, order, sort, offset) => {
    return{
        type: LOADMORE_MEANS_SUCCESS,
        payload:means,
        payloadmax:max,
        payloadorder:order,
        payloadsort:sort,
        payloadoffset:offset
    }
}

const searchMeansSuccess = (means) => {
    return{
        type: SEARCH_MEANS_SUCCESS,
        payload: means,
    }
}


export const fetchMeans = (sort, order, max, offset) => {
    return (dispatch) => {
        dispatch(fetchMeansRequest)
        axios.get(SERVER_URL+'/mean?max='+max+'&offset='+offset+'&order='+order+'&sort='+sort)
        .then(response => {
            const means =response.data.mean
            dispatch(fetchMeansSuccess(means, max, order, sort, offset))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchMeansFailure(errorMsg))
        }
        )
    }
}

export const searchMeans = (search,searchColumn) => {
    return (dispatch) => {
        dispatch(fetchMeansRequest)
        axios.get(SERVER_URL+'/mean?search='+search+'&searchColumn='+searchColumn)
        .then(response => {
            const means =response.data.mean
            dispatch(searchMeansSuccess(means))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchMeansFailure(errorMsg))
        }
        )
    }
}

export const loadMeans = (sort, order, max, offset) => {
    return (dispatch) => {
        dispatch(fetchMeansRequest)
        axios.get(SERVER_URL+'/mean?max='+max+'&offset='+offset+'&order='+order+'&sort='+sort)
        .then(response => {
            const means =response.data.mean
            dispatch(loadMeansSuccess(means, max, order, sort, offset))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchMeansFailure(errorMsg))
        }
        )
    }
}