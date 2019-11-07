import {
  GET_PRODUCTS,
  SET_PRODUCTS,
  GET_ALL_PRODUCTS
} from "../constants/action-types";
import axios from "axios";

export function getProducts() {
  return dispatch =>
    axios
      .get(
        "https://cody-json-server.herokuapp.com/products?_page=1&_limit=16&_sort=release_date&_order=desc"
      )
      .then(response => {
        return {
          data: response.data,
          headers: response.headers
        };
      })
      .then(json => {
        dispatch({
          type: GET_PRODUCTS,
          payload: {
            data: json.data,
            headers: json.headers
          }
        });
      });
}

export function setProducts(payload) {
  return {
    type: SET_PRODUCTS,
    payload
  };
}

export function getAllProducts() {
  return dispatch =>
    axios
      .get("https://cody-json-server.herokuapp.com/products")
      .then(({ data }) => data)
      .then(json => {
        dispatch({ type: GET_ALL_PRODUCTS, payload: json });
      });
}
