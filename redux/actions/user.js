import { ADDING_ADDRESS } from "../constants/action-types";

export function addingAddress(payload) {
  return {
    type: ADDING_ADDRESS,
    payload
  };
}
