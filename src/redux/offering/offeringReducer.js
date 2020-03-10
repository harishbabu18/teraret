import {FETCH_OFFERINGS_REQUEST,FETCH_OFFERINGS_SUCCESS,FETCH_OFFERINGS_FAILURE, LOADMORE_OFFERINGS_SUCCESS} from './offeringType'; 

const initialState = {
    loading:false,
    loadingmore:false,
    offerings:[],
    offset:0,
    sort:'id',
    order:'asc',
    max:10,
    error:'',
}

const offeringReducer = (state = initialState,action) => {
    switch(action.type){
        case FETCH_OFFERINGS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_OFFERINGS_SUCCESS:
            return {
                loading: false,
                offset: state.offset+10,
                sort:state.sort,
                max:state.max,
                offset:state.offset+10,
                offerings:action.payload,
                error:''
            } 
        case FETCH_OFFERINGS_FAILURE:
            return{
                loading: false,
                offerings:[],
                error: action.payload
            }

        case LOADMORE_OFFERINGS_SUCCESS:
            return {
                    ...state,
                    loading: false,
                    sort:state.sort,
                    max:state.max,
                    offset:state.offset+10,
                    offerings:[...state.offerings,...action.payload],
                    error:''
                }

       default: return state          

    }
}

export default offeringReducer