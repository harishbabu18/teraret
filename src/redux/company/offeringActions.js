import {FETCH_OFFERINGS_REQUEST,FETCH_OFFERINGS_SUCCESS,FETCH_OFFERINGS_FAILURE} from './offeringType' 
import axios from 'axios'
import { SERVER_URL } from '../../config'
 const fetchOfferingsRequest = () => {
    return{
        type:FETCH_OFFERINGS_REQUEST
    }
}

const fetchOfferingsSuccess = offeings => {
    return{
        type:FETCH_OFFERINGS_SUCCESS,
        payload:offeings
    }
}

const fetchOfferingsFailure = error => {
    return{
        type:FETCH_OFFERINGS_FAILURE,
        payload:error
        
    }
}
export const fetchOfferings = () => {
    return (dispatch) => {
        dispatch(fetchOfferingsRequest)
        axios.get(SERVER_URL+'/offering')
        .then(response => {
            const offeings = response.data
            dispatch(fetchOfferingsSuccess(offeings))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchOfferingsFailure(errorMsg))
        }
        )

    }

}