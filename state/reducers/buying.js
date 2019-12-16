import { BUYING_PRICE } from "../constants/action-types";

const initialState = {
  buyingDetails: {
    buyingPrice: 0,
    tax: 0,
    size: 0,
    paymentMethod: "",
    buyingDate: "",
    productName: "",
    productId: null
  }
};

const buyingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUYING_PRICE: {
      return Object.assign({}, state, { buyingDetails: action.payload });
    }
    default:
      return state;
  }
};

export default buyingReducer;
