import {FETCH_MEANS_REQUEST,FETCH_MEANS_SUCCESS,FETCH_MEANS_FAILURE, LOADMORE_MEANS_SUCCESS, SEARCH_MEANS_SUCCESS } from './meanType'; 

const initialState = {
    loading:false,
    loadingmore:false,
    means:[],
    offset:0,
    sort:'id',
    order:'asc',
    max:10,
    error:'',
}

const meanReducer = (state = initialState,action) => {
    switch(action.type){

        case FETCH_MEANS_REQUEST:
            return {
                ...state,
                loading:true
            }

        case FETCH_MEANS_SUCCESS:
            return {
                ...state,
                sort:action.payloadsort,
                order:action.payloadorder,
                max:action.payloadmax,
                offset:action.payloadoffset+10,
                means:action.payload,
                error:'',
            } 

        case FETCH_MEANS_FAILURE:
            return{
                loading: false,
                means:[],
                error: action.payload
            }
            
        case LOADMORE_MEANS_SUCCESS:
            return {
                ...state,
                loading: false,
                sort:state.sort,
                order:action.payloadorder,
                max:state.max,
                offset:state.offset+10,
                means:[...state.means,...action.payload],
                error:''
                }
        case SEARCH_MEANS_SUCCESS:
            return {
                ...state,
                loading: false,
                means:action.payload,
            }

       default: return state          

    }
}

export default meanReducer