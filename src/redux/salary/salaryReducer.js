import {FETCH_SALARIES_REQUEST,FETCH_SALARIES_SUCCESS,FETCH_SALARIES_FAILURE, LOADMORE_SALARIES_SUCCESS, SEARCH_SALARIES_SUCCESS} from './salaryType'; 

const initialState = {
    loading:false,
    loadingmore:false,
    salaries:[],
    offset:0,
    sort:'id',
    order:'asc',
    max:10,
    error:'',
}

const salaryReducer = (state = initialState,action) => {
    console.log(action.payload)
    switch(action.type){
        case FETCH_SALARIES_REQUEST:
            return {
                ...state,
                loading:true
            }

        case FETCH_SALARIES_SUCCESS:
            return {
                loading: false,
                sort:action.payloadsort,
                order:action.payloadorder,
                max:action.payloadmax,
                offset:action.payloadoffset+10,
                salaries:action.payload,
                error:''
            } 
            
        case FETCH_SALARIES_FAILURE:
            return{
                loading: false,
                salaries:[],
                error: action.payload
            }

        case LOADMORE_SALARIES_SUCCESS:
            return {
                ...state,
                loading: false,
                sort:state.sort,
                order:action.payloadorder,
                max:state.max,
                offset:state.offset+10,
                salaries:[...state.salaries,...action.payload],
                error:''
                }

        case SEARCH_SALARIES_SUCCESS:
            return {
                ...state,
                loading : false,
                salaries:action.payload
            }

       default: return state          

    }
}

export default salaryReducer