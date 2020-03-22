import {FETCH_EQUIPMENTS_REQUEST,FETCH_EQUIPMENTS_SUCCESS,FETCH_EQUIPMENTS_FAILURE, LOADMORE_EQUIPMENTS_SUCCESS,SEARCH_EQUIPMENTS_SUCCESS} from './equipmentType'; 
import axios from 'axios';
import SERVER_URL from '../../config';


 const fetchEquipmentsRequest = () => {
    return{
        type:FETCH_EQUIPMENTS_REQUEST
    }
}

const fetchEquipmentsSuccess = (equipments, max, order, sort, offset) => {
    return{
        type:FETCH_EQUIPMENTS_SUCCESS,
        payload:equipments,
        payloadmax:max,
        payloadorder:order,
        payloadsort:sort,
        payloadoffset:offset
    }
}


const searchEquipmentsSuccess = (equipments) => {
    return{
        type:SEARCH_EQUIPMENTS_SUCCESS,
        payload:equipments,
       
    }
}

const fetchEquipmentsFailure = error => {
    return{
        type:FETCH_EQUIPMENTS_FAILURE,
        payload:error
        
    }
}

const loadEquipmentsSuccess = (equipments, max, order, sort, offset) => {
    return{
        type: LOADMORE_EQUIPMENTS_SUCCESS,
        payload:equipments,
        payloadmax:max,
        payloadorder:order,
        payloadsort:sort,
        payloadoffset:offset
    }
}


export const searchEquipment=(searchColoumn,search)=>{
    return (dispatch) => {
        dispatch(fetchEquipmentsRequest)
        axios.get(SERVER_URL+'/equipmentSearch?search='+search+'&searchColumn='+searchColoumn)
        .then(response => {
            var equipments = response.data.equipment
            console.log("search value is "+equipments)
            dispatch(searchEquipmentsSuccess(equipments))
           // dispatch(loadCompanysSuccess(companys, max, order, sort, offset))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchEquipmentsFailure(errorMsg))
        }
        )
    }
}


export const fetchEquipments = (sort, order, max, offset) => {
    return (dispatch) => {
        dispatch(fetchEquipmentsRequest)
        axios.get(SERVER_URL+'/equipment?max='+max+'&offset='+offset+'&order='+order+'&sort='+sort)
        .then(response => {
            const equipments =response.data.equipment
            dispatch(fetchEquipmentsSuccess(equipments, max, order, sort, offset))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchEquipmentsFailure(errorMsg))
        }
        )
    }
}

export const loadEquipments = (sort, order, max, offset) => {
    return (dispatch) => {
        dispatch(fetchEquipmentsRequest)
        axios.get(SERVER_URL+'/equipment?max='+max+'&offset='+offset+'&order='+order+'&sort='+sort)
        .then(response => {
            const equipments =response.data.equipment
            dispatch(loadEquipmentsSuccess(equipments, max, order, sort, offset))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchEquipmentsFailure(errorMsg))
        }
        )
    }
}