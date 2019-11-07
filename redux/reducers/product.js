import { GET_PRODUCTS } from "../constants/action-types";
import { products } from "../../db";

const initialState = {
  products: []
};

const productReducer = (state = initialState, action) => {
  if (action.type === GET_PRODUCTS) {
    return Object.assign({}, state, {
      products: state.products.concat(action.payload)
    });
  }
  return state;
};

export default productReducer;
