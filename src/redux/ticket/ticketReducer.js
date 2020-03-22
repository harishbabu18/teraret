import {FETCH_TICKETS_REQUEST,FETCH_TICKETS_SUCCESS,FETCH_TICKETS_FAILURE, LOADMORE_TICKETS_SUCCESS, SEARCH_TICKETS_SUCESS } from './ticketType'; 

const initialState = {
    loading:false,
    loadingmore:false,
    tickets:[],
    offset:0,
    sort:'id',
    order:'asc',
    max:10,
    error:'',
}

const ticketReducer = (state = initialState,action) => {
    switch(action.type){

        case FETCH_TICKETS_REQUEST:
            return {
                ...state,
                loading:true
            }

        case FETCH_TICKETS_SUCCESS:
            return {
                ...state,
                sort:action.payloadsort,
                order:action.payloadorder,
                max:action.payloadmax,
                offset:action.payloadoffset+10,
                tickets:action.payload,
                error:'',
            } 

            case FETCH_TICKETS_FAILURE:
                return{
                    loading: false,
                    tickets:[],
                    error: action.payload
            }
            
            case SEARCH_TICKETS_SUCESS : 
                return{
                    loading: false,
                    tickets: action.payload,
                }
            

            case LOADMORE_TICKETS_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    sort:state.sort,
                    order:action.payloadorder,
                    max:state.max,
                    offset:state.offset+10,
                    tickets:[...state.tickets,...action.payload],
                    error:''
                    }

       default: return state          

    }
}

export default ticketReducer