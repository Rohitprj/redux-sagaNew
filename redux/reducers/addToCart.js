// Reducer
import { ADD_TO_CART } from "../constants/addToCart";

const initialState = [];

export const addToCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // console.log("Working", action.payload);
      return [...state, action.payload];
    default:
      return state;
  }
};
