import { FILTER_PRODUCTS, CLEAR_FILTER, FILTER_QUERY } from "../constants/action-types";

const filterState = {
  sizes: [],
  brands: ["Adidas", "Asics", "Converse", "Nike", "Vans"],
  categories: [],
  releaseDates: [],
  prices: {
    from: "",
    to: ""
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
