import { createStore } from "redux";
import tweetsReducer from "../reducers/tweetsReducer"

export default createStore(tweetsReducer);