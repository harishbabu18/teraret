import {FETCH_EQUIPMENTS_REQUEST,FETCH_EQUIPMENTS_SUCCESS,FETCH_EQUIPMENTS_FAILURE, LOADMORE_EQUIPMENTS_SUCCESS } from './equipmentType'; 

const initialState = {
    loading:false,
    loadingmore:false,
    equipments:[],
    offset:0,
    sort:'name',
    order:'asc',
    max:10,
    error:'',
}

const equipmentReducer = (state = initialState,action) => {
    switch(action.type){

        case FETCH_EQUIPMENTS_REQUEST:
            return {
                ...state,
                loading:true
            }

        case FETCH_EQUIPMENTS_SUCCESS:
            return {
                ...state,
                sort:action.payloadsort,
                order:action.payloadorder,
                max:action.payloadmax,
                offset:action.payloadoffset+10,
                equipments:action.payload,
                error:'',
            } 

        case FETCH_EQUIPMENTS_FAILURE:
            return{
                loading: false,
                equipments:[],
                error: action.payload
            }
            
        case LOADMORE_EQUIPMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                sort:state.sort,
                order:action.payloadorder,
                max:state.max,
                offset:state.offset+10,
                equipments:[...state.equipments,...action.payload],
                error:''
                }

       default: return state          

    }
}

export default equipmentReducer