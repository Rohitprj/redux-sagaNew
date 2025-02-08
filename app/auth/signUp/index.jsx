import axios from "axios";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Pressable,
} from "react-native";

export default function SignupScreen() {
  const BASE_URL = "http://192.168.0.187:3007/";
  const SIGNUP = BASE_URL + "auth/signUp";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async (email, password) => {
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

  const handleSignup = () => {
    if (!email || !password) {
      Alert.alert("Error", "Both fields are required!");
      return;
    }
    signUp(email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", gap: 6, marginTop: 10 }}>
        <Text style={{}}>Already have an account</Text>
        <Link href={"../../auth/logIn"}>
          <Text
            style={{
              color: "blue",
              textAlign: "center",
              textDecorationLine: "underline",
            }}
          >
            Log In
          </Text>
        </Link>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginTop: 15,
    fontSize: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#007BFF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#007BFF",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
