import { all } from "redux-saga/effects";
import authSagas from "./saga/auth";
import sagaData from "./saga/sagaData";

export default function* rootSaga() {
  yield all([authSagas()]);
}
