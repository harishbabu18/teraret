import {FETCH_SALARIES_REQUEST,FETCH_SALARIES_SUCCESS,FETCH_SALARIES_FAILURE, LOADMORE_SALARIES_SUCCESS, SEARCH_SALARIES_SUCCESS} from './salaryType'; 
import axios from 'axios';
import SERVER_URL from '../../config';


 const fetchSalariesRequest = () => {
    return{
        type:FETCH_SALARIES_REQUEST
    }
}

const fetchSalariesSuccess = (salaries, max, order, sort, offset) => {
    return{
        type:FETCH_SALARIES_SUCCESS,
        payload:salaries,
        payloadmax:max,
        payloadorder:order,
        payloadsort:sort,
        payloadoffset:offset
    }
}

const fetchSalariesFailure = error => {
    return{
        type:FETCH_SALARIES_FAILURE,
        payload:error
        
    }
}

const loadSalariesSuccess = (salaries, max, order, sort, offset) => {
    return{
        type:LOADMORE_SALARIES_SUCCESS,
        payload:salaries,
        payloadmax:max,
        payloadorder:order,
        payloadsort:sort,
        payloadoffset:offset
    }
}

const searchSalariesSuccess = (salaries) => {
    return{
        type: SEARCH_SALARIES_SUCCESS,
        payload: salaries
    }
}


export const fetchSalaries = (sort,order,max,offset) => {
    return (dispatch) => {
        dispatch(fetchSalariesRequest)
        axios.get(SERVER_URL+'/salary?max='+max+'&offset='+offset+'&order='+order+'&sort='+sort)
        .then(response => {
            const salaries = response.data.salary
            dispatch(fetchSalariesSuccess(salaries, max, order, sort, offset))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchSalariesFailure(errorMsg))
        }
        )
    }
}

export const loadSalaries = (sort,order,max,offset) => {
    return (dispatch) => {
        dispatch(fetchSalariesRequest)
        axios.get(SERVER_URL+'/salary?max='+max+'&offset='+offset+'&order='+order+'&sort='+sort)
        .then(response => {
            var salaries = response.data.salary
            dispatch(loadSalariesSuccess(salaries, max, order, sort, offset))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchSalariesFailure(errorMsg))
        }
        )
    }
}

export const searchSalaries = ( searchColumn, search) => {
    return (dispatch) => {
        dispatch(fetchSalariesRequest)
        axios.get(SERVER_URL+'salarySearch?search='+search+'&searchColumn='+searchColumn)
        .then(response => {
            var salaries = response.data.salary
            dispatch(searchSalariesSuccess(salaries))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchSalariesFailure(errorMsg))
        })
    }

}