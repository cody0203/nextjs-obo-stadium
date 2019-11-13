import { combineReducers } from "redux";
import productReducer from "./product";
import filterReducer from "./filter";
import buyingReducer from "./buying";
export default combineReducers({
  productReducer,
  filterReducer,
  buyingReducer
});
