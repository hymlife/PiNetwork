import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import HeaderBack from "../components/HeaderBack";

const NodeScreen = () => {
  const [node, setNode] = useState("");

  const handleLogin = () => {
    // Giriş işlemleri burada yapılabilir
    console.log("Kullanıcı adı:", node);
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <HeaderBack Veri="node" />
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <View style={{ marginHorizontal: 25 }}>
          <Text style={{ fontSize: 25 }}>PLorem ipsum dolor sit amet</Text>
          <Text style={{ marginTop: 15 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 25 }}>Giriş Kodu</Text>

          <TextInput
            value={node}
            style={{
              borderWidth: 1,
              paddingHorizontal: "25%",
              paddingVertical: "2%",
              borderRadius: 15,
              marginVertical: 5,
            }}
            onChangeText={setNode}
            placeholder="ABCD1234 "
          />

          <TouchableOpacity
            onPress={handleLogin}
            style={{
              borderWidth: 1,
              paddingHorizontal: "25%",
              paddingVertical: "2%",
              borderRadius: 15,
            }}
          >
            <Text>DEVAM</Text>
          </TouchableOpacity>
          <Text style={{ marginTop: 15 }}>lorem5 ipsum dolor sit amet</Text>
          <TouchableOpacity>
            <Text style={{ marginTop: 15 }}>Lorem ipsum dolor</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            margin: 20,
            backgroundColor: "yellow",
            borderRadius: 5,
            padding: 10,
            borderWidth: 2,
            borderColor: "red",
          }}
        >
          <Text style={{ fontSize: 15 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NodeScreen;

const styles = StyleSheet.create({});
