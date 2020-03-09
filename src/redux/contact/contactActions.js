import {FETCH_CONTACTS_REQUEST,FETCH_CONTACTS_SUCCESS,FETCH_CONTACTS_FAILURE, LOADMORE_CONTACTS_SUCCESS} from './contactType'; 
import axios from 'axios';
import SERVER_URL from '../../config';


 const fetchContactsRequest = () => {
    return{
        type:FETCH_CONTACTS_REQUEST
    }
}

const fetchContactsSuccess = contacts => {
    return{
        type:FETCH_CONTACTS_SUCCESS,
        payload:contacts
    }
}

const fetchContactsFailure = error => {
    return{
        type:FETCH_CONTACTS_FAILURE,
        payload:error
        
    }
}

const loadContactsSuccess = (contacts) => {
    return{
        type:LOADMORE_CONTACTS_SUCCESS,
        payload:contacts
    }
}





export const fetchContacts = (sort,order,max,offset) => {
    return (dispatch) => {
        dispatch(fetchContactsRequest)
        axios.get(SERVER_URL+'/contact?max='+max+'&offset='+offset+'&order='+order+'&sort='+sort)
        .then(response => {
            const contacts =response.data.contact
            dispatch(fetchContactsSuccess(contacts))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchContactsFailure(errorMsg))
        }
        )
    }
}

export const loadContacts = (sort,order,max,offset) => {
    return (dispatch) => {
        dispatch(fetchContactsRequest)
        axios.get(SERVER_URL+'/contact?max='+max+'&offset='+offset+'&order='+order+'&sort='+sort)
        .then(response => {
            var contacts = response.data.contact
            dispatch(loadContactsSuccess(contacts))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchContactsFailure(errorMsg))
        }
        )
    }
}