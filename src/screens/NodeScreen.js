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
          <Text style={{ fontSize: 25 }}>Pİ Node'a girişi onaylayın</Text>
          <Text style={{ marginTop: 15 }}>
            Bilgisayarınızda Pi Node uygulamasındaki giriş kodunu yazarak node'a
            giriş yapın
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
          <Text style={{ marginTop: 15 }}>
            pi Node uygulamasını şuradan indirin
          </Text>
          <TouchableOpacity>
            <Text style={{ marginTop: 15 }}>node.minepi.com</Text>
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
            node.inepi.com dışında hiçbir kaynaktanda indirilmiş node yazılımını
            yüklemeyin
          </Text>
          <Text>
            bu sayfada resmi pi node uygulaması dışında üretilmiş hiçbir kod
            girmeyin bunu yapmak hesabınızın çalınmasına sebep olabilir
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NodeScreen;

const styles = StyleSheet.create({});
