import { GET_PRODUCTS } from "../constants/action-types";
import { products } from "../../db";

const initialState = {
  products: products
};

const productReducer = (state = initialState, action) => {
  return state;
};

export default productReducer;
