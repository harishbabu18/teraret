import {FETCH_TICKETSS_REQUEST,FETCH_TICKETSS_SUCCESS,FETCH_TICKETSS_FAILURE, LOADMORE_TICKETSS_SUCCESS} from './ticketsType'; 

const initialState = {
    loading:false,
    loadingmore:false,
    ticketss:[],
    offset:0,
    sort:'id',
    order:'asc',
    max:10,
    error:'',
}

const ticketsReducer = (state = initialState,action) => {
    switch(action.type){
        case FETCH_TICKETSS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_TICKETSS_SUCCESS:
            return {
                loading: false,
                offset: state.offset+10,
                sort:state.sort,
                max:state.max,
                ticketss:action.payload,
                error:''
            } 
        case FETCH_TICKETSS_FAILURE:
            return{
                loading: false,
                ticketss:[],
                error: action.payload
            }

        case LOADMORE_TICKETSS_SUCCESS:
            return {
                    ...state,
                    loading: false,
                    sort:state.sort,
                    max:state.max,
                    offset:state.offset+10,
                    ticketss:[...state.ticketss,...action.payload],
                    error:''
                }

       default: return state          

    }
}

export default ticketsReducer