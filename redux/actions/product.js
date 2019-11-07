import { GET_PRODUCTS } from "../constants/action-types";
import axios from "axios";

export default function getProducts() {
  return dispatch =>
  axios.get("https://cody-json-server.herokuapp.com/products")
      .then(({ data }) => data)
      .then(json => {
        dispatch({ type: GET_PRODUCTS, payload: json });
      });
}
