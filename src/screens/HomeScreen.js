import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../components/Header";

import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/img/bg.jpg")} // Kullanmak istediğiniz görüntünün yolu
        style={styles.background}
        blurRadius={5}
      >
        <Header Veri="Anasayfa" />

        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../../assets/img/coin.png")}
            style={{
              width: "100%",
              height: 300,
              marginTop: "10%",
              marginBottom: 20,
              alignItems: "center",
              justifyContent: "center",
              resizeMode: "contain",
            }}
          />
          {/* <View style={{ width: "10%" }}>
            <TouchableOpacity onPress={() => {}} style={styles.iconContainer}>
              <Entypo name="chat" size={24} color="white" />
              <Text style={styles.iconText}>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.iconContainer}>
              <FontAwesome5 name="users" size={24} color="white" />
              <Text style={styles.iconText}>Users</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="lightning-bolt-circle"
                size={24}
                color="white"
              />
              <Text style={styles.iconText}>Lightning</Text>
            </TouchableOpacity>
          </View> */}
        </View>

        <View style={styles.bottomView}>
          <TouchableOpacity style={styles.buttonArea}>
            <Text style={styles.buttonText}>Videoyu Aç</Text>
          </TouchableOpacity>
          <View style={{ backgroundColor: "blue" }}>
            <Text style={{ color: "white", margin: 5, fontSize: 20 }}>
              @BAŞLIK
            </Text>
            <Text style={{ color: "white", margin: 5 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              aliquet odio fringilla rutrum commodo. Nam non ornare eros, a
              mollis ipsum. Sed semper turpis sed massa pellentesque, ut aliquet
              mi porta. In ornare accumsan ipsum in dictum. Nulla a risus sed
              nulla commodo mattis ut ac eros. Mauris turpis sem.
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
  },

  iconContainer: {
    alignItems: "center",
    marginBottom: 5,
    paddingVertical: 5,
  },
  iconText: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
  },
  bottomView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  buttonArea: {
    marginVertical: 15,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    borderRadius: 25,
    marginHorizontal: "35%",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
  },
});
