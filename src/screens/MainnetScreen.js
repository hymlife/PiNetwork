import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import HeaderBack from "../components/HeaderBack";

const MainnetScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBack Veri="mainnet" />

      <ScrollView style={{ flex: 1 }}>
        {/* Header  */}
        <View style={{ alignItems: "center", flex: 1 }}>
          <View style={styles.headerArea}>
            <Text style={styles.header}>Mainnet bakiyenizin ön izlemesi</Text>
          </View>

          <View style={styles.textArea}>
            <Text style={styles.text}>
              This is a breakdown of your total mined also whown at hte top of
              this mining app
            </Text>
          </View>
        </View>
        {/* Box1  */}
        <View style={styles.box1}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ marginHorizontal: "8%" }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>0.189</Text>
              <Text>unverfied</Text>
            </View>
            <View style={{ marginHorizontal: "10%" }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>0.000</Text>
              <Text>transferable</Text>
            </View>
            <View style={{ marginHorizontal: "10%" }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }} s>
                0.000
              </Text>
              <Text>migrated</Text>
            </View>
          </View>
          <View
            style={{
              height: 25,
              marginTop: "3%",
              marginHorizontal: 10,
              borderRadius: 10,
              backgroundColor: "orange",
            }}
          ></View>
          <View style={styles.barArea}>
            <Text style={styles.barAreaText}>Doğrulanmamış Bakiye</Text>

            <TouchableOpacity style={{ borderWidth: 1, padding: 5 }}>
              <Text
                style={{ color: "black", fontWeight: "bold", fontSize: 10 }}
              >
                Convert
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.barArea}>
            <Text style={styles.barAreaText}>Doğrulanmamış Bakiye</Text>

            <TouchableOpacity style={{ borderWidth: 1, padding: 5 }}>
              <Text
                style={{ color: "black", fontWeight: "bold", fontSize: 10 }}
              >
                Convert
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.barArea}>
            <Text style={styles.barAreaText}>Doğrulanmamış Bakiye</Text>

            <TouchableOpacity style={{ borderWidth: 1, padding: 5 }}>
              <Text
                style={{ color: "black", fontWeight: "bold", fontSize: 10 }}
              >
                Convert
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/*Area List */}

        <View style={styles.box1}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <FontAwesome
              name="calendar-check-o"
              size={24}
              color="black"
              style={{ marginLeft: 15 }}
            />
            <Text style={{ marginLeft: 15 }}>Mainnet Kontrol Listesi</Text>
            <AntDesign
              name="caretright"
              size={24}
              color="black"
              style={{ marginRight: 15 }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.box1}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <FontAwesome
              name="calendar-check-o"
              size={24}
              color="black"
              style={{ marginLeft: 15 }}
            />
            <Text style={{ marginLeft: 15 }}>Mainnet Kontrol Listesi</Text>
            <AntDesign
              name="caretright"
              size={24}
              color="black"
              style={{ marginRight: 15 }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.box1}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <FontAwesome
              name="calendar-check-o"
              size={24}
              color="black"
              style={{ marginLeft: 15 }}
            />
            <Text style={{ marginLeft: 15 }}>Mainnet Kontrol Listesi</Text>
            <AntDesign
              name="caretright"
              size={24}
              color="black"
              style={{ marginRight: 15 }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.box1}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <FontAwesome
              name="calendar-check-o"
              size={24}
              color="black"
              style={{ marginLeft: 15 }}
            />
            <Text style={{ marginLeft: 15 }}>Increase Trasferable Balance</Text>
            <AntDesign
              name="caretright"
              size={24}
              color="black"
              style={{ marginRight: 15 }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainnetScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  headerArea: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 55,
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
  },

  textArea: {
    marginTop: 15,
    marginHorizontal: 30,
  },

  barArea: {
    marginTop: 10,
    marginHorizontal: 10,
    paddingHorizontal: 15,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2, // Gölgelendirme efekti için elevation ekleyin
    backgroundColor: "#black", // Gölgelendirme efektini görmek için arka plan rengini ayarlayın
  },

  barAreaText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  box1: {
    backgroundColor: "white",
    paddingVertical: "3%",
    marginTop: "5%",
    marginHorizontal: "2%",
    borderRadius: 5,
  },
});
