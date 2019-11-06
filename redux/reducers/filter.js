import { FILTER_PRODUCTS } from "../constants/action-types";
import { CLEAR_FILTER } from "../constants/action-types";

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
  switch (action.type) {
    case FILTER_PRODUCTS:
      return Object.assign({}, state, action.payload);
    case CLEAR_FILTER:
      return filterState
    default:
      return state;
  }
};

export default filterReducer;
