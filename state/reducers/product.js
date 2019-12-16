import {
  GET_PRODUCTS,
  GET_ALL_PRODUCTS,
  SET_PRODUCT_INFO,
  GET_A_PRODUCT
} from "../constants/action-types";

const initialState = {
  productsAll: [],
  products: [],
  productInfo: {},
  product: {},
  headers: {}
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_A_PRODUCT: {
      const a = Object.assign({}, state, {
        product: action.payload
      });
      return a;
    }
    case GET_PRODUCTS: {
      return Object.assign({}, state, {
        products: action.payload.data,
        headers: action.payload.headers
      });
    }
    case GET_ALL_PRODUCTS: {
      return Object.assign({}, state, {
        productsAll: action.payload
      });
    }
    case SET_PRODUCT_INFO: {
      return Object.assign({}, state, {
        productInfo: action.payload
      });
    }
    default:
      return state;
  }
};

export default productReducer;
