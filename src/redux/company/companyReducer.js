import {FETCH_COMPANYS_REQUEST,FETCH_COMPANYS_SUCCESS,FETCH_COMPANYS_FAILURE,LOADMORE_COMPANYS_SUCCESS,SEARCH_COMPANYS_SUCCESS } from './companyType'; 

const initialState = {
    loading:false,
    loadingmore:false,
    companys:[],
    offset:0,
    sort:'id',
    order:'asc',
    max:10,
    error:'',
}

const companyReducer = (state = initialState,action) => {
    switch(action.type){
        case FETCH_COMPANYS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_COMPANYS_SUCCESS:
            return {
                loading: false,
                sort:action.payloadsort,
                order:action.payloadorder,
                max:action.payloadmax,
                offset:action.payloadoffset+10,
                companys:action.payload,
                error:''
            }

        case LOADMORE_COMPANYS_SUCCESS:
            return {
                ...state,
                loading: false,
                sort:state.sort,
                order:action.payloadorder,
                max:state.max,
                offset:state.offset+10,
                companys:[...state.companys,...action.payload],
                error:''
                }
        case SEARCH_COMPANYS_SUCCESS :
            return{
                ...state,
                loading: false,
                
                companys:action.payload,

            }

        case FETCH_COMPANYS_FAILURE:
            return{
                loading: false,
                companys:[],
                error: action.payload
            }
       default: return state          

    }
}

export default companyReducer