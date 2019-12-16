import { FILTER_PRODUCTS, CLEAR_FILTER, FILTER_QUERY } from "../constants/action-types";
export function filterProducts(payload) {
  return {
    type: FILTER_PRODUCTS,
    payload
  };
}

export function clearFilter() {
  return {
    type: CLEAR_FILTER
  };
}

export function setFilterQuery(payload) {
  return {
    type: FILTER_QUERY,
    payload
  }
}