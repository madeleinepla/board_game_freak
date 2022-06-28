import { combineReducers } from "redux";
import listErrorsReducer from "./list_errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  list: listErrorsReducer
});

export default errorsReducer;