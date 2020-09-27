import {
  FETCH_COMPANYS_REQUEST,
  FETCH_COMPANYS_SUCCESS,
  FETCH_COMPANYS_FAILURE,
  SEARCH_COMPANYS_SUCCESS,
} from "./companyType";

const initialState = {
  loading: false,
  companys: [],
  offset: 0,
  sort: "id",
  order: "asc",
  max: 10,
  error: "",
};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMPANYS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COMPANYS_SUCCESS:
      return {
        loading: false,
        sort: action.payloadsort,
        order: action.payloadorder,
        max: action.payloadmax,
        offset: action.payloadoffset + 10,
        companys: action.payload,
        error: "",
      };

    case SEARCH_COMPANYS_SUCCESS:
      return {
        ...state,
        loading: false,

        companys: action.payload,
      };

    case FETCH_COMPANYS_FAILURE:
      return {
        loading: false,
        companys: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default companyReducer;
