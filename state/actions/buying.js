import { BUYING_PRICE } from "../constants/action-types";

export function buying(value) {
  return {
    type: BUYING_PRICE,
    payload: value
  };
}
