import axios from "axios";
import { Alert } from "react-native";

const BASE_URL = process.env.URL;
const SIGNUP = BASE_URL + "auth/signUp";

export const signUp = async (email, password) => {
  try {
    const response = await axios.post(SIGNUP, {
      email: email,
      password: password,
    });
    console.log("Response:", response.data);
    Alert.alert("Success", "Signup successful!");
    return response;
  } catch (error) {
    console.log("Error:", error.response?.data || error.message);
    Alert.alert(
      "Signup Failed",
      error.response?.data?.message || "An error occurred."
    );
    return error.response?.data || error.message;
  }
};
