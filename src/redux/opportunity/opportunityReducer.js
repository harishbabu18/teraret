import {FETCH_OPPORTUNITIES_REQUEST,FETCH_OPPORTUNITIES_SUCCESS,FETCH_OPPORTUNITIES_FAILURE, LOADMORE_OPPORTUNITIES_SUCCESS, SEARCH_OPPORTUNITIES_SUCCESS} from './opportunityType'; 

const initialState = {
    loading:false,
    loadingmore:false,
    opportunities:[],
    offset:0,
    sort:'id',
    order:'asc',
    max:10,
    error:'',
}

const offeringReducer = (state = initialState,action) => {
    console.log(action.payload)
    switch(action.type){
        case FETCH_OPPORTUNITIES_REQUEST:
            return {
                ...state,
                loading:true
            }

        case FETCH_OPPORTUNITIES_SUCCESS:
            return {
                loading: false,
                sort:action.payloadsort,
                order:action.payloadorder,
                max:action.payloadmax,
                offset:action.payloadoffset+10,
                opportunities:action.payload,
                error:''
            } 
            
        case FETCH_OPPORTUNITIES_FAILURE:
            return{
                loading: false,
                opportunities:[],
                error: action.payload
            }

        case LOADMORE_OPPORTUNITIES_SUCCESS:
            return {
                ...state,
                loading: false,
                sort:state.sort,
                order:action.payloadorder,
                max:state.max,
                offset:state.offset+10,
                opportunities:[...state.opportunities,...action.payload],
                error:''
                }

        case SEARCH_OPPORTUNITIES_SUCCESS:
            return {
                ...state,
                loading : false,
                opportunities:action.payload
            }

       default: return state          

    }
}

export default offeringReducer