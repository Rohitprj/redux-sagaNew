import {
  LOGIN_WITH_EMAIL_FAILURE,
  LOGIN_WITH_EMAIL_REQUEST,
  LOGIN_WITH_EMAIL_SUCCESS,
  LOGOUT,
  SIGNUP_WITH_EMAIL_FAILURE,
  SIGNUP_WITH_EMAIL_REQUEST,
  SIGNUP_WITH_EMAIL_SUCCESS,
} from "../constants/auth";

export const loginRequest = (email, password) => ({
  type: LOGIN_WITH_EMAIL_REQUEST,
  payload: { email, password },
});
export const loginSuccess = (token) => ({
  type: LOGIN_WITH_EMAIL_SUCCESS,
  payload: token,
});
export const loginFailure = (error) => ({
  type: LOGIN_WITH_EMAIL_FAILURE,
  payload: error,
});

export const signupRequest = (email, password) => ({
  type: SIGNUP_WITH_EMAIL_REQUEST,
  payload: { email, password },
});
export const signupSuccess = (message) => ({
  type: SIGNUP_WITH_EMAIL_SUCCESS,
  payload: message,
});
export const signupFailure = (error) => ({
  type: SIGNUP_WITH_EMAIL_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});
