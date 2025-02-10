// Reducer
import { ADD_TO_CART_SUCCESS, SET_USER_DATA } from "../constants/addToCart";

const initialState = [
  {
    id: null,
    name: "",
    price: "",
    img: "",
  },
];

export const addToCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS:
      // console.log("Working", action.payload);
      return [...state, action.payload];
    case SET_USER_DATA:
      return [...state, action.payload];
    default:
      return state;
  }
};
