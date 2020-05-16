import {FETCH_COMPANYS_REQUEST,FETCH_COMPANYS_SUCCESS,FETCH_COMPANYS_FAILURE, LOADMORE_COMPANYS_SUCCESS,SEARCH_COMPANYS_SUCCESS } from './companyType'; 
import axios from 'axios';
import SERVER_URL from '../../config';
import headers from '../../security/headers';
 const fetchCompanysRequest = () => {
    return{
        type:FETCH_COMPANYS_REQUEST
    }
}

const fetchCompanysSuccess = (companys, max, order, sort, offset) => {
    return{
        type:FETCH_COMPANYS_SUCCESS,
        payload:companys,
        payloadmax:max,
        payloadorder:order,
        payloadsort:sort,
        payloadoffset:offset
    }
}

const loadCompanysSuccess = (companys, max, order, sort, offset) => {
    return{
        type:LOADMORE_COMPANYS_SUCCESS,
        payload:companys,
        payloadmax:max,
        payloadorder:order,
        payloadsort:sort,
        payloadoffset:offset
    }
}
const searchCompanysSuccess = (companys) => {
    return{
        type:SEARCH_COMPANYS_SUCCESS,
        payload:companys,
       
    }
}

const fetchCompanysFailure = error => {
    return{
        type:FETCH_COMPANYS_FAILURE,
        payload:error
        
    }

}


export const searchCompany=(searchColoumn,search)=>{
    return (dispatch) => {
        dispatch(fetchCompanysRequest)
        axios.get(SERVER_URL+'/companySearch?search='+search+'&searchColumn='+searchColoumn)
        .then(response => {
            var companys = response.data.company
            console.log("search value is "+companys)
            dispatch(searchCompanysSuccess(companys))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchCompanysFailure(errorMsg))
        }
        )
    }
}
export const loadCompanys = (authorization,sort,order,max,offset) => {
    return (dispatch) => {
        dispatch(fetchCompanysRequest)
        axios.get(SERVER_URL+'/company?max='+max+'&offset='+offset+'&order='+order+'&sort='+sort,{'headers':{
             'Authorization': 'Bearer '+authorization                   
            }})
        .then(response => {
            const account =response.data.account
            dispatch(fetchCompanysSuccess(account,max,order,sort,offset))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchCompanysFailure(errorMsg))
        }
        )
    }
}

export const fetchCompanys = (authorization,sort,order,max,offset) => {
    return (dispatch) => {
        dispatch(fetchCompanysRequest)
        axios.get(SERVER_URL+'/company?max='+max+'&offset='+offset+'&order='+order+'&sort='+sort,{'headers':{
            'Authorization': 'Bearer '+authorization                   
            }})
        .then(response => {
            const account =response.data.account
            dispatch(fetchCompanysSuccess(account,max,order,sort,offset))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchCompanysFailure(errorMsg))
        }
        )
    }
}