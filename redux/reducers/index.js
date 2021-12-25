import { combineReducers } from "redux";
import { movieListReducer } from "./movieReducers";

const rootReducer = combineReducers({ movieList: movieListReducer });

export default rootReducer;
