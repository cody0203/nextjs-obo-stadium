import { productTypes } from './product.types';

const INITIAL_STATE = {
  products: [],
  headers: null,
  error: null
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productTypes.FETCH_PRODUCTS_WITH_FILTER_SUCCESS:
      const { headers, products } = action.payload;
      return {
        ...state,
        products,
        headers
      };
    case productTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload
      };
    case productTypes.FETCH_PRODUCTS_WITH_FILTER_FAILURE:
    case productTypes.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return {
        ...state
      };
  }
};

export default productReducer;
