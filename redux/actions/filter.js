import { FILTER_PRODUCTS } from "../constants/action-types";
import { CLEAR_FILTER } from "../constants/action-types";

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
