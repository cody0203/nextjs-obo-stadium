import { BIDDING_PRICE } from "../constants/action-types";

export function bidding(value) {
  return {
    type: BIDDING_PRICE,
    payload: value
  };
}
