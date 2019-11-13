import { BIDDING_PRICE } from "../constants/action-types";

const initialState = {
  biddingPrice: 0
};

const buyingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BIDDING_PRICE: {
      return Object.assign({}, state, { biddingPrice: action.payload });
    }
    default:
      return state;
  }
};

export default buyingReducer;
