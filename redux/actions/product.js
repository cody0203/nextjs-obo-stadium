import {
  GET_PRODUCTS,
  SET_PRODUCT_INFO,
  GET_ALL_PRODUCTS
} from "../constants/action-types";
import axios from "axios";

export function getProducts(page, limit, sort, order, query) {
  let filters = "";
  for (let i in query) {
    if (i !== "sort" && i !== "order") {
      filters += `&${i}=${query[i]}`;
    }
  }
  const url = `https://cody-json-server.herokuapp.com/products?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}${filters}`;
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

export function setProductInfo(payload) {
  return {
    type: SET_PRODUCT_INFO,
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
