import {FETCH_DEALS_REQUEST,FETCH_DEALS_SUCCESS,FETCH_DEALS_FAILURE, LOADMORE_DEALS_SUCCESS, SEARCH_DEALS_SUCCESS} from './dealType'; 

const initialState = {
    loading:false,
    loadingmore:false,
    deals:[],
    offset:0,
    sort:'id',
    order:'asc',
    max:10,
    error:'',
}

const dealReducer = (state = initialState,action) => {
    console.log(action.payload)
    switch(action.type){
        case FETCH_DEALS_REQUEST:
            return {
                ...state,
                loading:true
            }

        case FETCH_DEALS_SUCCESS:
            return {
                loading: false,
                sort:action.payloadsort,
                order:action.payloadorder,
                max:action.payloadmax,
                offset:action.payloadoffset+10,
                deals:action.payload,
                error:''
            } 
            
        case FETCH_DEALS_FAILURE:
            return{
                loading: false,
                deals:[],
                error: action.payload
            }

        case LOADMORE_DEALS_SUCCESS:
            return {
                ...state,
                loading: false,
                sort:state.sort,
                order:action.payloadorder,
                max:state.max,
                offset:state.offset+10,
                deals:[...state.deals,...action.payload],
                error:''
                }

        case SEARCH_DEALS_SUCCESS:
            return {
                ...state,
                loading : false,
                deals:action.payload
            }

       default: return state          

    }
}

export default dealReducer