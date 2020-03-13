import {FETCH_CONTACTS_REQUEST,FETCH_CONTACTS_SUCCESS,FETCH_CONTACTS_FAILURE, LOADMORE_CONTACTS_SUCCESS, SEARCH_CONTACTS_SUCCESS} from './contactType'; 

const initialState = {
    loading:false,
    loadingmore:false,
    contacts:[],
    offset:0,
    sort:'id',
    order:'asc',
    max:10,
    error:'',
}

const contactReducer = (state = initialState,action) => {
    switch(action.type){
        case FETCH_CONTACTS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_CONTACTS_SUCCESS:
            return {
                loading: false,
                sort:action.payloadsort,
                order:action.payloadorder,
                max:action.payloadmax,
                offset:action.payloadoffset+10,
                contacts:action.payload,
                error:''
            }

        case LOADMORE_CONTACTS_SUCCESS:
            return {
                ...state,
                loading: false,
                sort:state.sort,
                order:action.payloadorder,
                max:state.max,
                offset:state.offset+10,
                contacts:[...state.contacts,...action.payload],
                error:''
                }
            
        case SEARCH_CONTACTS_SUCCESS :
            return{
                loading: false,
                sort:'',
                order:'',
                max:'',
                offset:'',
                contacts:action.payload,
                error:''

            }

        case FETCH_CONTACTS_FAILURE:
            return{
                loading: false,
                contacts:[],
                error: action.payload
            }
       default: return state          

    }
}

export default contactReducer