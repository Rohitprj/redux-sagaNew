import { combineReducers } from "redux";
import { addToCartReducer } from "./reducers/addToCart";

export const rootReducer = combineReducers({
  addToCartReducer,
});
