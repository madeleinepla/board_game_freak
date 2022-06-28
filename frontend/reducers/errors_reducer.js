import { combineReducers } from "redux";
import listErrorsReducer from "./list_errors_reducer";
import listItemErrorsReducer from "./list_item_errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  list: listErrorsReducer,
  listItem: listItemErrorsReducer
});

export default errorsReducer;