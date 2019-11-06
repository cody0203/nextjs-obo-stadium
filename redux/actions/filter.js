import { FILTER_PRODUCTS } from "../constants/action-types";

export default function filterProducts(payload) {
  return {
    type: FILTER_PRODUCTS,
    payload
  };
};
