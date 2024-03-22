import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    axios
      .post("http://localhost:3000/register", { username, password })
      .then((response) => console.log(response.data))
      .catch((error) => console.error("Error registering user:", error));
  };
  const navigation = useNavigation();
  const handleLogin = () => {
    axios
      .post("http://localhost:3000/login", { username, password })
      .then((response) => {
        console.log(response.data);
        navigation.navigate("Ana Sayfa");
      })
      .catch((error) => console.error("Error logging in:", error));
  };

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Register" onPress={() => navigation.navigate("Kaydol")} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
