import { View, Text } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import Index from "./index";
import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}>
        <Index />
      </Stack>
    </Provider>
  );
}
