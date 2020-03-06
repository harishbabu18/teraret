import {FETCH_OFFERINGS_REQUEST,FETCH_OFFERINGS_SUCCESS,FETCH_OFFERINGS_FAILURE} from './offeringType' 

const initialState = {
    loading:false,
    offerings:[],
    error:'',
}

const offeringReducer = (state = initialState,action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                offerings: action.payload,
                error:''
            }
        case FETCH_USERS_FAILURE:
            return{
                loading: false,
                offerings:[],
                error: action.payload
            }
       default: return state          

    }
}

export default offeringReducer