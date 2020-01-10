import { combineReducers } from "redux";
import { taskReducer } from "./task";

// const reducer = combineReducers({
//   // place all reducers here
//   tasks: taskReducer
// });

// export default reducer;

export default combineReducers({
  tasks: taskReducer
});
