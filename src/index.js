import React, {useState,useEffect} from 'react'
import ReactDOM from 'react-dom'
import Auth from './security/auth';
import { MuiThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import App from './App'
import SERVER_URL from './config'
import * as serviceWorker from './serviceWorker'
import { Route,Redirect,BrowserRouter,Switch} from 'react-router-dom'
import {defaultErrorHandler} from './handlers/errorHandlers';
import {checkResponseStatus, loginResponseHandler} from './handlers/responseHandlers';
import Login from './page/Login'
import axios from 'axios'
import history from './history'
import Admin from './layout/Admin'
import CompanyList from './page/addressbook/Account/AccountList';
import CompanyCreate from './page/addressbook/Account/AccountCreate';
import ShowCompanyDetail from './page/addressbook/Account/AccountDetail';
import ShowCompanyPage from './page/addressbook/Account/ShowAccountPage';
import ShowContactPage from './page/addressbook/contact/ShowContactPage';
import SupplierList from './page/addressbook/supplier/SupplierList';
import SupplierCreate from './page/addressbook/supplier/SupplierCreate';
import ShowEmployeePage from './page/addressbook/employee/ShowEmployeePage';
import ContactList from './page/addressbook/contact/ContactList';
import ContactCreate from './page/addressbook/contact/ContactCreate';
import EmployeeList from './page/addressbook/employee/EmployeeList';
import EmployeeCreate from './page/addressbook/employee/EmployeeCreate';
import ProductList from './page/warehouse/product/ProductList';
import MeanList from './page/warehouse/means/MeansList';
import EquipmentList from './page/warehouse/equipment/EquipmentList';
import TicketList from './page/sales/ticket/TicketList';
import EquipmentCreate from './page/warehouse/equipment/EquipmentCreate';
import MeansCreate from './page/warehouse/means/MeansCreate';
import ProductCreate from './page/warehouse/product/ProductCreate';
import TicketCreate from './page/sales/ticket/TicketCreate';
import OfferList from './page/sales/offer/OfferList';
import OpportunityList from './page/sales/opportunity/OpportunityList';
import DealList from './page/sales/deal/DealList';
import RentList from './page/account/rent/RentList';
import SalaryList from './page/account/salary/SalaryList';
import Ticketslist from './page/account/ticket/TicketList';
import store from './redux/store';
import {Provider} from 'react-redux'
import Register from './page/Register';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:'#1e88e5',
    },
    secondary: {
      light: '#0066ff',
      main: '#003A6F',
      // dark: will be calculated from palette.secondary.main,
      contrastText: 'white',
    },
  },
});

function Index(props) {

  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername ] = useState("");
  const [password, setPassword ] = useState("");
  const [from, setFrom ] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log('app mounting...');
  (async () => {
    if (await Auth.loggedIn()) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  })();
  })

  const LoginSubmit = (e) => {
    
    e.preventDefault()
    console.log(SERVER_URL+'/api/login')  
    axios.post(SERVER_URL+'/api/login',{'username':username,'password':password})
    .then(checkResponseStatus)
    .then(response => loginResponseHandler(response, customLoginHandler))
    .catch(error => console.log("")) 
    //.catch(error => defaultErrorHandler(error, customErrorHandler))
    };


   
    const _usernameValue = (e) =>{
      setUsername(e.target.value)
    }
   
    const _passwordValue = (e) =>{
      setPassword(e.target.value)
    }
   
    const reset = () => {
      setUsername('')
      setPassword('')
      setFrom('')
      setErrors({})
    
    };

    const customLoginHandler = () => { 
      console.log("From "+from);
      history.push(from);
      window.location.href = window.location.href;
     };
   
     const customErrorHandler = (error) => { 
       reset();
       setErrors(error.message)
     };
   
     const logoutHandler = () => {
       Auth.logOut();
       reset();
     };

    return (
     <BrowserRouter forceRefresh={true}>
         <Switch>
             <LoggedInRedirect  exact path="/login" >
                <Login LoginSubmit={LoginSubmit} _usernameValue={_usernameValue} _passwordValue={_passwordValue} />
             </LoggedInRedirect>
             <Route exact path="/register">
               <Register />
             </Route>
             <Admin logoutHandler={logoutHandler}>
             <Provider store={store}>
             <PrivateRoute  path="/dashboard">
                <App />                
             </PrivateRoute>
              <PrivateRoute  exact path="/addressbook/company/list">
                <CompanyList/>
              </PrivateRoute>

              <PrivateRoute  exact path="/addressbook/company/showcompanydetail/:id" >
                <ShowCompanyDetail />
              </PrivateRoute>

              <PrivateRoute  exact path="/addressbook/contact/list">
                <ContactList/>
              </PrivateRoute>

              <PrivateRoute  exact path="/addressbook/employee/list">
                <EmployeeList/>
              </PrivateRoute>


              <PrivateRoute  exact path="/addressbook/supplier/list">
                <SupplierList/>
              </PrivateRoute>

              <PrivateRoute  exact path="/warehouse/product/list">
                <ProductList/>
              </PrivateRoute>

              <PrivateRoute  exact path="/warehouse/means/list">
                <MeanList/>
              </PrivateRoute>

              <PrivateRoute  exact path="/warehouse/equipment/list">
                <EquipmentList/>
              </PrivateRoute>

              <PrivateRoute  exact path="/sales/ticket/list">
                <TicketList/>
              </PrivateRoute>

              <PrivateRoute  exact path="/sales/offer/list">
                <OfferList/>
              </PrivateRoute>

              <PrivateRoute  exact path="/sales/opportunity/list">
                <OpportunityList/>
              </PrivateRoute>

              <PrivateRoute  exact path="/sales/deal/list">
                <DealList/>
              </PrivateRoute>

              <PrivateRoute  exact path="/account/rent/list">
                <RentList/>
              </PrivateRoute>

              <PrivateRoute  exact path="/account/ticket/list">
                <Ticketslist />
              </PrivateRoute>

              <PrivateRoute  exact path="/account/salary/list">
                <SalaryList/>
              </PrivateRoute>

             </Provider>

             <PrivateRoute  exact path="/sales/ticket/create">
                <TicketCreate/>
              </PrivateRoute>
             <PrivateRoute  exact path="/addressbook/company/create">
               <CompanyCreate/>
             </PrivateRoute>

             <PrivateRoute  exact path="/addressbook/employee/create">
               <EmployeeCreate/>
             </PrivateRoute>
             

             <PrivateRoute  exact path="/addressbook/supplier/create">
               <SupplierCreate/>
             </PrivateRoute>

             <PrivateRoute  exact path="/warehouse/equipment/create">
               <EquipmentCreate/>
             </PrivateRoute>

             <PrivateRoute  exact path="/warehouse/product/create">
               <ProductCreate/>
             </PrivateRoute>

             <PrivateRoute  exact path="/warehouse/means/create">
               <MeansCreate/>
             </PrivateRoute>             

             <PrivateRoute  exact path="/addressbook/company/show">
               <ShowCompanyPage/>
             </PrivateRoute>


             <PrivateRoute  exact path="/addressbook/contact/show">
               <ShowContactPage/>
             </PrivateRoute>

             <PrivateRoute  exact path="/addressbook/contact/create">
               <ContactCreate/>
             </PrivateRoute>

             <PrivateRoute  exact path="/addressbook/employee/show">
               <ShowEmployeePage/>
             </PrivateRoute>

  

             </Admin>
           
         </Switch>
     </BrowserRouter>
        )
}

function PrivateRoute({logoutHandler, children, ...rest }) {
  console.log("The location is "+window.location);
  return (
    <Route
    logoutHandler={logoutHandler}
     {...rest}
      render={({ location }) =>
      Auth.loggedIn() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state :{ from: location }
            }}
          />
        )
        
      }
    />
  );
}

function LoggedInRedirect({ children, ...rest }){
  return (
    <Route
      {...rest}
      render={({ location }) =>
      Auth.loggedIn() ? (
        <Redirect
        to={{
          pathname: "/",
          state :{ from: location }
        }}
      />
        ) : (
          children
        )
        
      }
    />
  );

}

ReactDOM.render(<MuiThemeProvider theme={theme}><Index /></MuiThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();