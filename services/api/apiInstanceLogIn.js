import axios from "axios";

const BASE_URL = "http://192.168.0.253:3009/";
const LOGIN = BASE_URL + "auth/logIn";

export const logIn = async (email, password) => {
  try {
    const response = await axios.post(LOGIN, {
      email: email,
      password: password,
    });
    console.log("Response:", response.data);
    Alert.alert("Success", "Login successful!");
  } catch (error) {
    console.log("Error:", error.response?.data || error.message);
    Alert.alert(
      "Signup Failed",
      error.response?.data?.message || "An error occurred."
    );
  }
};
