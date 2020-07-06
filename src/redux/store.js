import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./rootReducers";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
