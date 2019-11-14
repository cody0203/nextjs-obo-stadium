import { GET_ALL_USERS } from "../constants/action-types";
import { ADDING_ADDRESS } from "../constants/action-types";
import axios from "axios";

export function getUsers() {
  return dispatch =>
    axios
      .get("https://cody-json-server.herokuapp.com/users/1")
      .then(({ data }) => data)
      .then(json => {
        dispatch({ type: GET_ALL_USERS, payload: json });
      });
}

export function addAddress(data, id) {
  const url = `https://cody-json-server.herokuapp.com/users/${id}`;
  console.log(id);
  return dispatch =>
    axios
      .put(url, data)
      .then(({ data }) => data)
      .then(json => {
        dispatch({ type: ADDING_ADDRESS, payload: json });
      });
}
