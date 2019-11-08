import { FILTER_PRODUCTS, CLEAR_FILTER, FILTER_QUERY } from "../constants/action-types";

const filterState = {
  sizes: [],
  brands: [],
  categories: [],
  releaseDates: [],
  prices: {
    from: "",
    to: ""
  }
};

const filterQuery = {
  sorting: "",
  filter: {
    brand: [],
    available_size_like: [],
    gender: [],
    release_date: []
  }
}

const filterReducer = (state = filterState, action) => {
  switch (action.type) {
    case FILTER_PRODUCTS:
      return Object.assign({}, state, action.payload);
    case CLEAR_FILTER:
      return filterState
    case FILTER_QUERY:
      return Object.assign({}, filterQuery, action.payload)
    default:
      return state;
  }
};

export default filterReducer;
