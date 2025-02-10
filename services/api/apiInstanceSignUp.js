const BASE_URL = "http://192.168.0.187:3009/";
const SIGNUP = BASE_URL + "auth/signUp";

export const signUp = async (email, password) => {
  try {
    const response = await axios.post(SIGNUP, {
      email: email,
      password: password,
    });
    console.log("Response:", response.data);
    Alert.alert("Success", "Signup successful!");
  } catch (error) {
    console.log("Error:", error.response?.data || error.message);
    Alert.alert(
      "Signup Failed",
      error.response?.data?.message || "An error occurred."
    );
  }
};
