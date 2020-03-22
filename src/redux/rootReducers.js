import { combineReducers } from 'redux';

import companyReducer from './company/companyReducer';
import contactReducer from './contact/contactReducer';
import employeeReducer from './employee/employeeReducer';
import productReducer from './product/productReducer';
import meanReducer from './means/meanReducer';
import equipmentReducer from './equipment/equipmentReducer';
import ticketReducer from './ticket/ticketReducer';
import offeringReducer from './offering/offeringReducer';
import supplierReducer from './supplier/supplierReducer';

const rootReducer = combineReducers({
   
    company:companyReducer,
    contact:contactReducer,
    employee:employeeReducer,
    product: productReducer,
    mean: meanReducer,
    equipment: equipmentReducer,
    ticket: ticketReducer,
    offering:offeringReducer,
    supplier:supplierReducer

})

export default rootReducer