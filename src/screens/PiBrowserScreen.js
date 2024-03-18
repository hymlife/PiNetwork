import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import HeaderBack from "../components/HeaderBack";

const PiBrowserScreen = () => {
  return (
    <View>
      <HeaderBack Veri="Pi Browser" />
      <View style={styles.headerArea}>
        <Text style={styles.headerText}>
          Pi Tarayıcı yükleyin ve giriş yapın
        </Text>
      </View>

      <View style={{ marginHorizontal: "3%", marginTop: 15 }}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit
          justo, maximus feugiat facilisis ullamcorper, hendrerit tempus urna.
          Vestibulum magna diam, suscipit ut cursus sit amet, pellentesque non
          tortor. Donec porttitor porttitor erat, non euismod urna scelerisque
          ac. Nullam dignissim nisl accumsan, lobortis sem quis, elementum
          libero. Curabitur et eros velit. Pellentesque id congue tortor. Cras
          volutpat dui nec suscipit ultricies. Cras non imperdiet eros.
          Phasellus vel enim fringilla mi dictum ultricies id sed ante. Aliquam
          aliquam porttitor pretium. Mauris egestas nisi at facilisis hendrerit.
          Nullam hendrerit orci in risus vulputate elementum.
        </Text>

        <Text>
          Ut nec nisi eu orci laoreet semper non sed sem. Ut ac mi massa. Mauris
          feugiat elit quam, commodo ornare enim maximus quis. Cras eleifend
          nisi aliquet nulla maximus viverra. Duis et metus et est posuere
          maximus quis sit amet tellus. Phasellus ullamcorper nunc ligula, ut
          scelerisque risus laoreet quis. Aliquam molestie posuere ligula in
          luctus. Vestibulum luctus ullamcorper felis ac elementum. Pellentesque
          in orci eu sem congue feugiat sed cursus dui.
        </Text>
      </View>

      <TouchableOpacity
        style={{
          marginTop: 15,
          backgroundColor: "pink",
          borderRadius: 5,
          marginHorizontal: "15%",
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <Text>Pi Tarayıcıya Giriş Yap</Text>
      </TouchableOpacity>

      <View style={{ marginHorizontal: "3%", marginTop: 15 }}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit
          justo, maximus feugiat facilisis ullamcorper, hendrerit tempus urna.
          Vestibulum magna diam, suscipit ut cursus sit amet, pellentesque non
          tortor. Donec porttitor porttitor erat, non euismod urna scelerisque
          ac. Nullam dignissim nisl accumsan,
        </Text>
      </View>

      <TouchableOpacity
        style={{
          marginTop: 15,
          backgroundColor: "pink",
          borderRadius: 5,
          marginHorizontal: "15%",
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <Text>Alternative Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PiBrowserScreen;

const styles = StyleSheet.create({
  headerArea: {
    alignItems: "center",
    marginTop: "5%",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
  },
});
