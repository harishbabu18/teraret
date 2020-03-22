import {FETCH_PRODUCTS_REQUEST,FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_FAILURE, LOADMORE_PRODUCTS_SUCCESS } from './productType'; 

const initialState = {
    loading:false,
    loadingmore:false,
    products:[],
    offset:0,
    sort:'id',
    order:'asc',
    max:10,
    error:'',
}

const productReducer = (state = initialState,action) => {
    switch(action.type){

        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading:true
            }

        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                sort:action.payloadsort,
                order:action.payloadorder,
                max:action.payloadmax,
                offset:action.payloadoffset+10,
                products:action.payload,
                error:'',
            } 

        case FETCH_PRODUCTS_FAILURE:
            return{
                loading: false,
                products:[],
                error: action.payload
            }
            
        case LOADMORE_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                sort:state.sort,
                order:action.payloadorder,
                max:state.max,
                offset:state.offset+10,
                products:[...state.products,...action.payload],
                error:''
                }

       default: return state          

    }
}

export default productReducer