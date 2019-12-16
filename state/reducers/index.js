import { combineReducers } from 'redux';
import productReducer from '../products/product.reducer';
import filterReducer from './filter';
import buyingReducer from './buying';
import userReducer from './user';

export default combineReducers({
  productReducer,
  filterReducer,
  buyingReducer,
  userReducer
});
