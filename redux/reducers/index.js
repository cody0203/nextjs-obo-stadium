import { combineReducers } from "redux";
import productReducer from "./product";
import filterReducer from "./filter"

export default combineReducers({
  productReducer,
  filterReducer
});
