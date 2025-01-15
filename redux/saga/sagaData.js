import { takeEvery } from "redux-saga/effects";
import { USERS_DATA_LIST } from "../constants/addToCart";

function* apiCall() {
  const url = "https://dummyjson.com/products";
  let data = yield fetch(url);
  data = yield data.json();
  console.warn("Dummy data", data);
}

function* sagaData() {
  yield takeEvery(USERS_DATA_LIST, apiCall);
}
export default sagaData;
