import { ADD_TO_CART } from "../constants/addToCart";

const initialState = {};

const addToCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
             return{
                ...state,
                action.payload
             }
    }
};

