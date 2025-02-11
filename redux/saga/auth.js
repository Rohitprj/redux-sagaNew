import { call, put, takeLatest } from "redux-saga/effects";
import { logIn } from "../../services/api/apiInstanceLogIn";
import {
  LOGIN_WITH_EMAIL_FAILURE,
  LOGIN_WITH_EMAIL_REQUEST,
  LOGIN_WITH_EMAIL_SUCCESS,
  SIGNUP_WITH_EMAIL_FAILURE,
  SIGNUP_WITH_EMAIL_REQUEST,
  SIGNUP_WITH_EMAIL_SUCCESS,
} from "../constants/auth";
import { signUp } from "../../services/api/apiInstanceSignUp";

function* loginSaga(action) {
  try {
    const token = yield call(
      logIn,
      action.payload.email,
      action.payload.password
    );
    yield put({ type: LOGIN_WITH_EMAIL_SUCCESS, payload: token });
  } catch (error) {
    yield put({
      type: LOGIN_WITH_EMAIL_FAILURE,
      payload: error.response?.data?.message || "LOGIN FAILED",
    });
    console.log(error);
  }
}

function* signupSaga(action) {
  try {
    const message = yield call(
      signUp,
      action.payload.email,
      action.payload.password
    );
    yield put({ type: SIGNUP_WITH_EMAIL_SUCCESS, payload: message });
  } catch (error) {
    yield put({
      type: SIGNUP_WITH_EMAIL_FAILURE,
      payload: error.response?.data?.message || "Signup failed",
    });
  }
}

export default function* authSagas() {
  yield takeLatest(LOGIN_WITH_EMAIL_REQUEST, loginSaga);
  yield takeLatest(SIGNUP_WITH_EMAIL_REQUEST, signupSaga);
}
