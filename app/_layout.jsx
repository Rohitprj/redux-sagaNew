import { View, Text } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import Index from "./index";

export default function _layout() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}
