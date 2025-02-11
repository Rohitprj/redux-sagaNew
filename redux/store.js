import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import devtoolsEnhancer from "redux-devtools-expo-dev-plugin";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  devTools: false,
  middleware: () => [sagaMiddleware],
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(
      devtoolsEnhancer({
        trace: true,
      })
    ),
});
sagaMiddleware.run(rootSaga);
export default store;
