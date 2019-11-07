import { GET_PRODUCTS } from "../constants/action-types";
import fetch from "cross-fetch";

export default function getProducts() {
  return dispatch =>
    fetch("https://cody-json-server.herokuapp.com/products")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: GET_PRODUCTS, payload: json });
      });
}
