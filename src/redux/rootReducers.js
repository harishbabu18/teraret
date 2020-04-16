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
import opportunityReducer from './opportunity/opportunityReducer';
import dealReducer from './deal/dealReducer';
import ticketsReducer from './accountTickets/ticketsReducer';
import rentReducer from './rent/rentReducer';
import salaryReducer from './salary/salaryReducer'; 

const rootReducer = combineReducers({
   
    company:companyReducer,
    contact:contactReducer,
    employee:employeeReducer,
    product: productReducer,
    mean: meanReducer,
    equipment: equipmentReducer,
    ticket: ticketReducer,
    offering:offeringReducer,
    supplier:supplierReducer,
    opportunities: opportunityReducer,
    deals: dealReducer,
    tickets: ticketsReducer,
    rent: rentReducer,
    salary: salaryReducer,

})

export default rootReducer