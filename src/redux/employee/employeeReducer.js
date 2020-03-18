import {FETCH_EMPLOYEES_REQUEST,FETCH_EMPLOYEES_SUCCESS,FETCH_EMPLOYEES_FAILURE, LOADMORE_EMPLOYEES_SUCCESS } from './employeeType'; 

const initialState = {
    loading:false,
    loadingmore:false,
    employees:[],
    offset:0,
    sort:'firstName',
    order:'asc',
    max:10,
    error:'',
}

const employeeReducer = (state = initialState,action) => {
    switch(action.type){

        case FETCH_EMPLOYEES_REQUEST:
            return {
                ...state,
                loading:true
            }

        case FETCH_EMPLOYEES_SUCCESS:
            return {
                ...state,
                sort:action.payloadsort,
                order:action.payloadorder,
                max:action.payloadmax,
                offset:action.payloadoffset+10,
                employees:action.payload,
                error:'',
            } 

        case FETCH_EMPLOYEES_FAILURE:
            return{
                loading: false,
                employees:[],
                error: action.payload
            }
            
        case LOADMORE_EMPLOYEES_SUCCESS:
            return {
                ...state,
                loading: false,
                sort:state.sort,
                order:action.payloadorder,
                max:state.max,
                offset:state.offset+10,
                employees:[...state.employees,...action.payload],
                error:''
                }

       default: return state          

    }
}

export default employeeReducer