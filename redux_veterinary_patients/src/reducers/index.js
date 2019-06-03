/* Modules */
import { combineReducers } from "redux";

/* Reducers */
import apptsReducer from "./apptReducer";

export default combineReducers({
  appts: apptsReducer
});
