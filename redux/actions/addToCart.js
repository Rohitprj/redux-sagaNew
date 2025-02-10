// Action
import { ADD_TO_CART_SUCCESS } from "../constants/addToCart";

export const addToCart = (item) => ({
  type: ADD_TO_CART_SUCCESS,
  payload: item,
});
