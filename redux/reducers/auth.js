import {
  LOGIN_WITH_EMAIL_FAILURE,
  LOGIN_WITH_EMAIL_REQUEST,
  LOGIN_WITH_EMAIL_SUCCESS,
  LOGOUT,
  SIGNUP_WITH_EMAIL_FAILURE,
  SIGNUP_WITH_EMAIL_REQUEST,
  SIGNUP_WITH_EMAIL_SUCCESS,
} from "../constants/auth";

const initialState = {
  token: null,
  loading: false,
  error: null,
  signupMessage: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_WITH_EMAIL_REQUEST:
    case SIGNUP_WITH_EMAIL_REQUEST:
      return { ...state, loading: true, error: null };

    case LOGIN_WITH_EMAIL_SUCCESS:
      return { ...state, loading: false, token: action.payload, error: null };

    case SIGNUP_WITH_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        signupMessage: action.payload,
        error: null,
      };

    case LOGIN_WITH_EMAIL_FAILURE:
    case SIGNUP_WITH_EMAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        token: null,
        signupMessage: null,
      };
    default:
      return state;
  }
};
