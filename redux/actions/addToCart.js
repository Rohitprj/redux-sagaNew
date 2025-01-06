// Action
import { ADD_TO_CART } from "../constants/addToCart";

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});
