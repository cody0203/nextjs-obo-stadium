import { combineReducers } from "redux";
import productReducer from "./product";
import filterReducer from "./filter";
import buyingReducer from "./buying";
import userReducer from "./user";

export default combineReducers({
  productReducer,
  filterReducer,
  buyingReducer,
  userReducer
});
