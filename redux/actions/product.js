import { GET_PRODUCTS } from "../constants/action-types";

export default function getProducts(payload) {
  return {
    type: GET_PRODUCTS,
    payload
  };
}
