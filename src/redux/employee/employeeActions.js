import {FETCH_EMPLOYEES_REQUEST,FETCH_EMPLOYEES_SUCCESS,FETCH_EMPLOYEES_FAILURE, LOADMORE_EMPLOYEES_SUCCESS,SEARCH_EMPLOYEES_SUCCESS} from './employeeType'; 
import axios from 'axios';
import SERVER_URL from '../../config';


 const fetchEmployeesRequest = () => {
    return{
        type:FETCH_EMPLOYEES_REQUEST
    }
}

const fetchEmployeesSuccess = (employees, max, order, sort, offset) => {
    return{
        type:FETCH_EMPLOYEES_SUCCESS,
        payload:employees,
        payloadmax:max,
        payloadorder:order,
        payloadsort:sort,
        payloadoffset:offset
    }
}


const searchEmployeesSuccess = (employees) => {
    return{
        type:SEARCH_EMPLOYEES_SUCCESS,
        payload:employees,
       
    }
}

const fetchEmployeesFailure = error => {
    return{
        type:FETCH_EMPLOYEES_FAILURE,
        payload:error
        
    }
}

const loadEmployeesSuccess = (employees, max, order, sort, offset) => {
    return{
        type: LOADMORE_EMPLOYEES_SUCCESS,
        payload:employees,
        payloadmax:max,
        payloadorder:order,
        payloadsort:sort,
        payloadoffset:offset
    }
}



export const searchEmployee=(searchColoumn,search)=>{
    return (dispatch) => {
        dispatch(fetchEmployeesRequest)
        axios.get(SERVER_URL+'/employeeSearch?search='+search+'&searchColumn='+searchColoumn)
        .then(response => {
            var employees = response.data.employee
            console.log("search value is "+employees)
            dispatch(searchEmployeesSuccess(employees))
           // dispatch(loadCompanysSuccess(companys, max, order, sort, offset))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchEmployeesFailure(errorMsg))
        }
        )
    }
}


export const fetchEmployees = (sort, order, max, offset) => {
    return (dispatch) => {
        dispatch(fetchEmployeesRequest)
        axios.get(SERVER_URL+'/employee?max='+max+'&offset='+offset+'&order='+order+'&sort='+sort)
        .then(response => {
            const employees =response.data.employee
            dispatch(fetchEmployeesSuccess(employees, max, order, sort, offset))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchEmployeesFailure(errorMsg))
        }
        )
    }
}

export const loadEmployees = (sort, order, max, offset) => {
    return (dispatch) => {
        dispatch(fetchEmployeesRequest)
        axios.get(SERVER_URL+'/employee?max='+max+'&offset='+offset+'&order='+order+'&sort='+sort)
        .then(response => {
            const employees =response.data.employee
            dispatch(loadEmployeesSuccess(employees, max, order, sort, offset))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchEmployeesFailure(errorMsg))
        }
        )
    }
}