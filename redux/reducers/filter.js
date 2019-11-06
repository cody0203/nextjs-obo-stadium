import { FILTER_PRODUCTS } from "../constants/action-types";

const filterState = {
  sizes: [],
  brands: [],
  categories: [],
  releaseDates: [],
  prices: {
    from: 0,
    to: 0
  }
};

const filterReducer = (state = filterState, action) => {
  if (action.type === FILTER_PRODUCTS) {
    return Object.assign({}, state, action.payload);
  }
  return state;
};

export default filterReducer;
