import { combineReducers } from "@reduxjs/toolkit";
import questionReducer from "./questionReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  question: questionReducer,
  user: userReducer,
});

export default rootReducer;
