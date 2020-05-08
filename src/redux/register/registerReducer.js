import {FETCH_PRODUCTS_REQUEST,FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_FAILURE, LOADMORE_PRODUCTS_SUCCESS } from './registerType'; 

const initialState = {
    loading:false,
    state: {},
    error:'',
}

const registerReducer = (state = initialState,action) => {
    switch(action.type){

        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading:true
            }

        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                state:action.payload,
            } 

        case FETCH_PRODUCTS_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
            
        
       default: return state          

    }
}

export default registerReducer