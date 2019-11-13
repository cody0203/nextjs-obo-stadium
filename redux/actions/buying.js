import { BIDDING_PRICE } from "../constants/action-types";

export function buying(value) {
  return {
    type: BIDDING_PRICE,
    payload: value
  };
}
