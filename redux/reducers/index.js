import { combineReducers } from "redux";
import { movieDetailsReducer, movieListReducer } from "./movieReducers";

const rootReducer = combineReducers({
  movieList: movieListReducer,
  movieDetails: movieDetailsReducer,
});

export default rootReducer;
