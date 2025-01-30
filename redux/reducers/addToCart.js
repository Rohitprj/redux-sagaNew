// Reducer
import { ADD_TO_CART, SET_USER_DATA } from "../constants/addToCart";

const initialState = [];

export const addToCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // console.log("Working", action.payload);
      return [...state, action.payload];
    case SET_USER_DATA:
      return [...state, action.payload];
    default:
      return state;
  }
};
