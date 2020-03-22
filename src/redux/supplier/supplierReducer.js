import {FETCH_SUPPLIERS_REQUEST,FETCH_SUPPLIERS_SUCCESS,FETCH_SUPPLIERS_FAILURE, LOADMORE_SUPPLIERS_SUCCESS} from './supplierType'; 

const initialState = {
    loading:false,
    loadingmore:false,
    suppliers:[],
    offset:0,
    sort:'id',
    order:'asc',
    max:10,
    error:'',
}

const supplierReducer = (state = initialState,action) => {
    switch(action.type){
        case FETCH_SUPPLIERS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_SUPPLIERS_SUCCESS:
            return {
                loading: false,
                offset: state.offset+10,
                sort:state.sort,
                max:state.max,
                suppliers:action.payload,
                error:''
            } 
        case FETCH_SUPPLIERS_FAILURE:
            return{
                loading: false,
                suppliers:[],
                error: action.payload
            }

        case LOADMORE_SUPPLIERS_SUCCESS:
            return {
                    ...state,
                    loading: false,
                    sort:state.sort,
                    max:state.max,
                    offset:state.offset+10,
                    suppliers:[...state.suppliers,...action.payload],
                    error:''
                }

       default: return state          

    }
}

export default supplierReducer