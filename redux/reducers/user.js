import { GET_ALL_USERS, ADDING_ADDRESS } from "../constants/action-types";

const initialState = {
  user: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS: {
      return { ...state, user: action.payload };
    }
    case ADDING_ADDRESS: {
      return { ...state, user: action.payload };
    }
    default:
      return state;
  }
};

export default userReducer;
