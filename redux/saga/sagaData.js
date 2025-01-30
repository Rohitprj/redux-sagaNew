import { put, takeEvery } from "redux-saga/effects";
import { SET_USER_DATA, USERS_DATA_LIST } from "../constants/addToCart";

function* apiCall() {
  const url = "https://dummyjson.com/products";
  let data = yield fetch(url);
  data = yield data.json();
  put({ type: SET_USER_DATA, data });
  // console.warn("Dummy data", data);
}

function* sagaData() {
  yield takeEvery(USERS_DATA_LIST, apiCall);
}

export default sagaData;
