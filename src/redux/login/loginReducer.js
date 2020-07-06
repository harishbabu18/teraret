import { FETCH_LOGIN_REQUEST,RETRIVE_TOKKEN, LOGIN, LOGOUT } from "./loginType";

const initialState = {
  loading: true,
  loggedIn: false,
};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case RETRIVE_TOKKEN:
      return {
        ...state,
        loading: false,
      };
    case LOGIN:
      return {
        ...state,
        loading: false,
        loggedIn: true,
      };
    case LOGOUT:
      return {
        loading: false,
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default companyReducer;
