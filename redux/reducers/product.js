import { GET_PRODUCTS, GET_ALL_PRODUCTS } from "../constants/action-types";

const initialState = {
  products: [],
  headers: {}
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return Object.assign({}, state, {
        products: action.payload.data,
        headers: action.payload.headers
      });
    }
    case GET_ALL_PRODUCTS: {
      return Object.assign({}, state, {
        products: action.payload
      });
    }
    default:
      return state;
  }
};

export default productReducer;
