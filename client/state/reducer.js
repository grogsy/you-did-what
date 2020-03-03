import { combineReducers } from "redux";
import { taskReducer } from "./task";
import resourceReducer from "./resource/resourceReducer";
import userReducer from "./user/userReducer";

// const reducer = combineReducers({
//   // place all reducers here
//   tasks: taskReducer
// });

// export default reducer;

export default combineReducers({
  tasks: taskReducer,
  resources: resourceReducer,
  user: userReducer
});
