import { createStore, combineReducers } from "redux";
import tweetsReducer from "../reducers/tweetsReducer"
import usersReducer from "../reducers/usersReducer"

export default createStore(combineReducers({
  usersReducer,
  tweetsReducer
}));