import { combineReducers } from 'redux';

import companyReducer from './company/companyReducer';
import contactReducer from './contact/contactReducer';
import employeeReducer from './employee/employeeReducer';
import offeringReducer from './offering/offeringReducer';
import supplierReducer from './supplier/supplierReducer';



const rootReducer = combineReducers({
   
    company:companyReducer,
    contact:contactReducer,
    employee:employeeReducer,
    offering:offeringReducer,
    supplier:supplierReducer

})

export default rootReducer