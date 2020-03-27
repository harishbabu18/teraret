import {FETCH_TICKETSS_REQUEST,FETCH_TICKETSS_SUCCESS,FETCH_TICKETSS_FAILURE, LOADMORE_TICKETSS_SUCCESS,SEARCH_TICKETSS_SUCCESS} from './ticketsType'; 
import axios from 'axios';
import SERVER_URL from '../../config';


 const fetchTicketssRequest = () => {
    return{
        type:FETCH_TICKETSS_REQUEST
    }
}

const fetchTicketssSuccess = (ticketss, max, order, sort, offset) => {
    return{
        type:FETCH_TICKETSS_SUCCESS,
        payload:ticketss,
        payloadmax:max,
        payloadorder:order,
        payloadsort:sort,
        payloadoffset:offset
    }
}


const searchTicketssSuccess = (ticketss) => {
    return{
        type:SEARCH_TICKETSS_SUCCESS,
        payload:ticketss,
       
    }
}

const fetchTicketssFailure = error => {
    return{
        type:FETCH_TICKETSS_FAILURE,
        payload:error
        
    }
}

const loadTicketssSuccess = (ticketss, max, order, sort, offset) => {
    return{
        type:LOADMORE_TICKETSS_SUCCESS,
        payload:ticketss,
        payloadmax:max,
        payloadorder:order,
        payloadsort:sort,
        payloadoffset:offset
    }
}



export const searchTickets=(searchColoumn,search)=>{
    return (dispatch) => {
        dispatch(fetchTicketssRequest)
        axios.get(SERVER_URL+'/accountTicketSearch?search='+search+'&searchColumn='+searchColoumn)
        .then(response => {
            var ticketss = response.data.tickets
            console.log("search value is "+ticketss)
            dispatch(searchTicketssSuccess(ticketss))
           // dispatch(loadCompanysSuccess(companys, max, order, sort, offset))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchTicketssFailure(errorMsg))
        }
        )
    }
}




export const fetchTicketss = (sort,order,max,offset) => {
    return (dispatch) => {
        dispatch(fetchTicketssRequest)
        axios.get(SERVER_URL+'/accountTicket?max='+max+'&offset='+offset+'&order='+order+'&sort='+sort)
        .then(response => {
            const ticketss =response.data.ticket
            dispatch(fetchTicketssSuccess(ticketss, max, order, sort, offset))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchTicketssFailure(errorMsg))
        }
        )
    }
}

export const loadTicketss = (sort,order,max,offset) => {
    return (dispatch) => {
        dispatch(fetchTicketssRequest)
        axios.get(SERVER_URL+'/accountTicket?max='+max+'&offset='+offset+'&order='+order+'&sort='+sort)
        .then(response => {
            var ticketss = response.data.ticket
            dispatch(loadTicketssSuccess(ticketss, max, order, sort, offset))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchTicketssFailure(errorMsg))
        }
        )
    }
}