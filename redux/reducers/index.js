import { combineReducers } from "redux";
import {
  actionReducer,
  comedyReducer,
  documentaryReducer,
  horrorReducer,
  movieDetailsReducer,
  romanceReducer,
  topReducer,
  trendingReducer,
} from "./movieReducers";

const rootReducer = combineReducers({
  trending: trendingReducer,
  top: topReducer,
  action: actionReducer,
  comedy: comedyReducer,
  horror: horrorReducer,
  documentary: documentaryReducer,
  romance: romanceReducer,
  movieDetails: movieDetailsReducer,
});

export default rootReducer;
