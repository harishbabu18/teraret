import {FETCH_RENTS_REQUEST,FETCH_RENTS_SUCCESS,FETCH_RENTS_FAILURE, LOADMORE_RENTS_SUCCESS, SEARCH_RENTS_SUCCESS} from './rentType'; 

const initialState = {
    loading:false,
    loadingmore:false,
    rents:[],
    offset:0,
    sort:'id',
    order:'asc',
    max:10,
    error:'',
}

const rentReducer = (state = initialState,action) => {
    console.log(action.payload)
    switch(action.type){
        case FETCH_RENTS_REQUEST:
            return {
                ...state,
                loading:true
            }

        case FETCH_RENTS_SUCCESS:
            return {
                loading: false,
                sort:action.payloadsort,
                order:action.payloadorder,
                max:action.payloadmax,
                offset:action.payloadoffset+10,
                rents:action.payload,
                error:''
            } 
            
        case FETCH_RENTS_FAILURE:
            return{
                loading: false,
                rents:[],
                error: action.payload
            }

        case LOADMORE_RENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                sort:state.sort,
                order:action.payloadorder,
                max:state.max,
                offset:state.offset+10,
                rents:[...state.rents,...action.payload],
                error:''
                }

        case SEARCH_RENTS_SUCCESS:
            return {
                ...state,
                loading : false,
                rents:action.payload
            }

       default: return state          

    }
}

export default rentReducer