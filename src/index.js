import React, {useState,useEffect} from 'react'
import ReactDOM from 'react-dom'
import Auth from './security/auth';

import App from './App'
import {SERVER_URL} from './config'
import * as serviceWorker from './serviceWorker'
import { Route,Redirect,BrowserRouter,Switch} from 'react-router-dom'
import {defaultErrorHandler} from './handlers/errorHandlers';
import {checkResponseStatus, loginResponseHandler} from './handlers/responseHandlers';
import Login from './page/Login'
import axios from 'axios'
import history from './history'

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
             <PrivateRoute  exact path="/">
               <App logout={logoutHandler}/>  
             </PrivateRoute>
           
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

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();