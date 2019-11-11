import {
  GET_PRODUCTS,
  SET_PRODUCTS,
  GET_ALL_PRODUCTS
} from "../constants/action-types";
import axios from "axios";

export function getProducts(page, limit, sort, order) {
  let url = `https://cody-json-server.herokuapp.com/products?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`;
  return dispatch =>
    axios
      .get(url)
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
