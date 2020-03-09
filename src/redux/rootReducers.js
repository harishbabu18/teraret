import { combineReducers } from 'redux'

import companyReducer from './company/companyReducer'
import contactReducer from './contact/contactReducer'


const rootReducer = combineReducers({
   
    company:companyReducer,
    contact:contactReducer,
})

export default rootReducer