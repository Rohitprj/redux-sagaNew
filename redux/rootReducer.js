import { combineReducers } from "redux";
import { addToCartReducer } from "./reducers/addToCart";
import authReducer from "./reducers/auth";

export const rootReducer = combineReducers({
  addToCartReducer,
  auth: authReducer,
});
