import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Auth from "./security/auth";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import App from "./App";
import SERVER_URL from "./config";
import * as serviceWorker from "./serviceWorker";
import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";
import { defaultErrorHandler } from "./handlers/errorHandlers";
import {
  checkResponseStatus,
  loginResponseHandler,
} from "./handlers/responseHandlers";
import Login from "./page/Login";
import axios from "axios";
import history from "./history";
import Admin from "./layout/Admin";
import CompanyList from "./page/addressbook/company/CompanyList";
import CompanyCreate from "./page/addressbook/company/CompanyCreate";
import ShowCompanyDetail from "./page/addressbook/company/ShowCompanyDetail";
import ShowCompanyPage from "./page/addressbook/company/ShowCompanyPage";
import ShowContactPage from "./page/addressbook/contact/ShowContactPage";
import SupplierList from "./page/addressbook/supplier/SupplierList";
import SupplierCreate from "./page/addressbook/supplier/SupplierCreate";
import ShowEmployeePage from "./page/addressbook/employee/ShowEmployeePage";
import ContactList from "./page/addressbook/contact/ContactList";
import ContactCreate from "./page/addressbook/contact/ContactCreate";
import EmployeeList from "./page/addressbook/employee/EmployeeList";
import EmployeeCreate from "./page/addressbook/employee/EmployeeCreate";
import ProductList from "./page/warehouse/product/ProductList";
import MeanList from "./page/warehouse/means/MeansList";
import EquipmentList from "./page/warehouse/equipment/EquipmentList";
import TicketList from "./page/sales/ticket/TicketList";
import EquipmentCreate from "./page/warehouse/equipment/EquipmentCreate";
import MeansCreate from "./page/warehouse/means/MeansCreate";
import ProductCreate from "./page/warehouse/product/ProductCreate";
import TicketCreate from "./page/sales/ticket/TicketCreate";
import OfferList from "./page/sales/offer/OfferList";
import store from "./redux/store";
import { Provider } from "react-redux";
import {
  logoutHandler,
  loadLoginSuccess,
  loadLogoutSuccess,
} from "./redux/index";
import { useSelector, useDispatch } from "react-redux";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f7ad00",
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00",
    },
  },
});

function Index(props) {
  const logindata = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [from, setFrom] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log("app mounting...");
    (async () => {
      if (await Auth.loggedIn()) {
        dispatch(loadLoginSuccess);
      } else {
        dispatch(loadLogoutSuccess);
      }
    })();
  });

  const reset = () => {
    setFrom("");
    setErrors({});
  };

  const customLoginHandler = () => {
    console.log("From " + from);
    history.push(from);
    window.location.href = window.location.href;
  };

  const customErrorHandler = (error) => {
    reset();
    setErrors(error.message);
  };

  return (
    <BrowserRouter forceRefresh={true}>
      <Switch>
        <LoggedInRedirect exact path="/login">
          <Login />
        </LoggedInRedirect>

        <Admin logoutHandler={dispatch(logoutHandler)}>
          <PrivateRoute exact path="/">
            <App logout={dispatch(logoutHandler)} />
          </PrivateRoute>

          <PrivateRoute exact path="/addressbook/company/list">
            <CompanyList />
          </PrivateRoute>
          <PrivateRoute exact path="/addressbook/company/showcompanydetail/:id">
            <ShowCompanyDetail />
          </PrivateRoute>

          <PrivateRoute exact path="/addressbook/contact/list">
            <ContactList />
          </PrivateRoute>

          <PrivateRoute exact path="/addressbook/employee/list">
            <EmployeeList />
          </PrivateRoute>

          <PrivateRoute exact path="/addressbook/supplier/list">
            <SupplierList />
          </PrivateRoute>

          <PrivateRoute exact path="/warehouse/product/list">
            <ProductList />
          </PrivateRoute>

          <PrivateRoute exact path="/warehouse/means/list">
            <MeanList />
          </PrivateRoute>

          <PrivateRoute exact path="/warehouse/equipment/list">
            <EquipmentList />
          </PrivateRoute>

          <PrivateRoute exact path="/sales/ticket/list">
            <TicketList />
          </PrivateRoute>

          <PrivateRoute exact path="/sales/offer/list">
            <OfferList />
          </PrivateRoute>

          <PrivateRoute exact path="/sales/ticket/create">
            <TicketCreate />
          </PrivateRoute>
          <PrivateRoute exact path="/addressbook/company/create">
            <CompanyCreate />
          </PrivateRoute>

          <PrivateRoute exact path="/addressbook/employee/create">
            <EmployeeCreate />
          </PrivateRoute>

          <PrivateRoute exact path="/addressbook/supplier/create">
            <SupplierCreate />
          </PrivateRoute>

          <PrivateRoute exact path="/warehouse/equipment/create">
            <EquipmentCreate />
          </PrivateRoute>

          <PrivateRoute exact path="/warehouse/product/create">
            <ProductCreate />
          </PrivateRoute>

          <PrivateRoute exact path="/warehouse/means/create">
            <MeansCreate />
          </PrivateRoute>

          <PrivateRoute exact path="/addressbook/company/show">
            <ShowCompanyPage />
          </PrivateRoute>

          <PrivateRoute exact path="/addressbook/contact/show">
            <ShowContactPage />
          </PrivateRoute>

          <PrivateRoute exact path="/addressbook/contact/create">
            <ContactCreate />
          </PrivateRoute>

          <PrivateRoute exact path="/addressbook/employee/show">
            <ShowEmployeePage />
          </PrivateRoute>
        </Admin>
      </Switch>
    </BrowserRouter>
  );
}

function PrivateRoute({ logoutHandler, children, ...rest }) {
  console.log("The location is " + window.location);
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
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function LoggedInRedirect({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        Auth.loggedIn() ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
}

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Index />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
