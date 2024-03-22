import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import HeaderBack from "../components/HeaderBack";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const PiUygulamalariScreen = () => {
  return (
    <View>
      <HeaderBack Veri="Uygulamalar" />

      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="chatbox-outline" size={40} color="black" />
          <Text>chat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <AntDesign name="wallet" size={40} color="black" />
          <Text>Wallet</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <FontAwesome name="chain-broken" size={40} color="black" />
          <Text>Blockchain</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonArea2}>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="developer-mode" size={40} color="black" />
          <Text>chat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <AntDesign name="idcard" size={40} color="black" />
          <Text>Wallet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PiUygulamalariScreen;

const styles = StyleSheet.create({
  buttonArea: {
    flexDirection: "row",
    margin: "15%",
    justifyContent: "space-between",
  },
  buttonArea2: {
    flexDirection: "row",
    marginHorizontal: "20%",
    justifyContent: "space-between",
  },

  button: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    alignItems: "center",
  },
});
