import {FETCH_CONTACTS_REQUEST,FETCH_CONTACTS_SUCCESS,FETCH_CONTACTS_FAILURE} from './contactType'; 

const initialState = {
    loading:false,
    loadingmore:false,
    contacts:[],
    offset:0,
    sort:'firstName',
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
                ...state,
                loading: false,
                offset: state.offset+10,
                contacts:[...state.contacts,...action.payload],
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