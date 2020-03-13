import {FETCH_TICKETS_REQUEST,FETCH_TICKETS_SUCCESS,FETCH_TICKETS_FAILURE, LOADMORE_TICKETS_SUCCESS, SEARCH_TICKETS_SUCESS} from './ticketType'; 
import axios from 'axios';
import SERVER_URL from '../../config';


 const fetchTicketsRequest = () => {
    return{
        type:FETCH_TICKETS_REQUEST
    }
}

const fetchTicketsSuccess = (tickets, max, order, sort, offset) => {
    return{
        type:FETCH_TICKETS_SUCCESS,
        payload:tickets,
        payloadmax:max,
        payloadorder:order,
        payloadsort:sort,
        payloadoffset:offset
    }
}

const fetchTicketsFailure = error => {
    return{
        type:FETCH_TICKETS_FAILURE,
        payload:error
        
    }
}

const searchTicketSuccess = (tickets) => {
    return {
        type: SEARCH_TICKETS_SUCESS,
        payload : tickets,
    }
}

const loadTicketsSuccess = (tickets, max, order, sort, offset) => {
    return{
        type: LOADMORE_TICKETS_SUCCESS,
        payload:tickets,
        payloadmax:max,
        payloadorder:order,
        payloadsort:sort,
        payloadoffset:offset
    }
}

export const searchTickets = (search, searchColumn) => {
    return (dispatch) => {
        dispatch (fetchTicketsRequest)
        axios.get(SERVER_URL+'/ticket?search='+search+'&searchColumn='+searchColumn)
        .then(response => {
            var tickets = response.data.ticket
            dispatch(searchTicketSuccess(tickets))
        } ).catch(error => {
            const errorMsg = error.message
            dispatch(fetchTicketsFailure(errorMsg))
        })
    }
}

export const fetchTickets = (sort, order, max, offset) => {
    return (dispatch) => {
        dispatch(fetchTicketsRequest)
        axios.get(SERVER_URL+'/ticket?max='+max+'&offset='+offset+'&order='+order+'&sort='+sort)
        .then(response => {
            const tickets =response.data.ticket
            dispatch(fetchTicketsSuccess(tickets, max, order, sort, offset))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchTicketsFailure(errorMsg))
        }
        )
    }
}

export const loadTickets = (sort, order, max, offset) => {
    return (dispatch) => {
        dispatch(fetchTicketsRequest)
        axios.get(SERVER_URL+'/ticket?max='+max+'&offset='+offset+'&order='+order+'&sort='+sort)
        .then(response => {
            const tickets =response.data.ticket
            dispatch(loadTicketsSuccess(tickets, max, order, sort, offset))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchTicketsFailure(errorMsg))
        }
        )
    }
}