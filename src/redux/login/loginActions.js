import {
  FETCH_LOGIN_REQUEST,
  RETRIVE_TOKKEN,
  LOGIN,
  LOGOUT,
} from "./loginType";
import axios from "axios";
import SERVER_URL from "./../../config";
import {
  checkResponseStatus,
  loginResponseHandler,
} from "./../../handlers/responseHandlers";
import history from "./../../history";
import Auth from "./../../security/auth";

const fetchLoginRequest = () => {
  return {
    type: FETCH_LOGIN_REQUEST,
  };
};

const loadRetriveTokkenSuccess = () => {
  return {
    type: RETRIVE_TOKKEN,
  };
};

export const loadLoginSuccess = () => {
  return {
    type: LOGIN,
  };
};

export const loadLogoutSuccess = () => {
  return {
    type: LOGOUT,
  };
};

const customLoginHandler = () => {
  history.push("/");
  window.location.href = window.location.href;
};

// export const RetriveTokkenSuccess = () => {
//   return (dispatch) => {
//     async () => {
//       if (await Auth.loggedIn()) {
//         dispatch(loadLoginSuccess);
//       } else {
//         dispatch(loadLogoutSuccess);
//       }
//     };
//   };
// };

export const LoginSubmit = (e) => {
  return (dispatch) => {
    dispatch(fetchLoginRequest);
    console.log(SERVER_URL + "/api/login");
    axios
      .post(SERVER_URL + "/api/login", {
        username: e.email,
        password: e.password,
      })
      .then(checkResponseStatus)
      .then((response) => loginResponseHandler(response, customLoginHandler))
      .then(dispatch(loadLoginSuccess))
      .catch((error) => console.log(""));
    //.catch(error => defaultErrorHandler(error, customErrorHandler))
  };
};

export const logoutHandler = () => {
  return (dispatch) => {
    Auth.logOut();
  };
};
