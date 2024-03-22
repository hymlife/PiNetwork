import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

//fontlar
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Header = ({ Veri }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigation = useNavigation();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  //menü itemleri sayfalara yönlendirmek için
  const handleMenuItemPress = (screenName) => {
    navigation.navigate(screenName);
    setMenuOpen(false); // Menüyü kapat
  };

  const onPressButton = (websiteURL) => {
    // Linki aç
    Linking.openURL(websiteURL).catch((err) =>
      console.error("Link açılamadı:", err)
    );
  };

  return (
    <View style={[styles.container, menuOpen && styles.menuOpen]}>
      {/* Menü simgesi */}
      <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
        <FontAwesome name="bars" size={24} color="white" />
      </TouchableOpacity>

      {/* Menü öğeleri */}
      {menuOpen && (
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => handleMenuItemPress("Ana Sayfa")}>
            <Text style={styles.menuItem}>Anasayfa</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleMenuItemPress("Mainnet")}>
            <Text style={styles.menuItem}>Bakiye</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleMenuItemPress("Pi Browser")}>
            <Text style={styles.menuItem}>Browser</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleMenuItemPress("Pi Uygulamaları")}
          >
            <Text style={styles.menuItem}>Uygulamaları</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleMenuItemPress("Roller")}>
            <Text style={styles.menuItem}>Roller</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleMenuItemPress("Sohbet")}>
            <Text style={styles.menuItem}>Sohbet</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleMenuItemPress("Node")}>
            <Text style={styles.menuItem}>Node</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onPressButton("https://mifutoken.com/s-s-s")}
          >
            <Text style={styles.menuItem}>SSS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              onPressButton("https://mifutoken.com/uploads/white-paper.pdf")
            }
          >
            <Text style={styles.menuItem}>White Paper</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onPressButton("https://mifutoken.com/iletisim")}
          >
            <Text style={styles.menuItem}>Destek Merkezi</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleMenuItemPress("Çekirdek Ekip")}
          >
            <Text style={styles.menuItem}>Çekirdek Ekip</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleMenuItemPress("Profil")}>
            <Text style={styles.menuItem}>Profil</Text>
          </TouchableOpacity>

          <Text style={{ textAlign: "center" }}>Bizi takip edin</Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={() => onPressButton("https://mifutoken.com/iletisim")}
              style={styles.socialButton}
            >
              <AntDesign name="twitter" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onPressButton("https://mifutoken.com/iletisim")}
              style={styles.socialButton}
            >
              <AntDesign name="instagram" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onPressButton("https://mifutoken.com/iletisim")}
              style={styles.socialButton}
            >
              <AntDesign name="youtube" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onPressButton("https://mifutoken.com/iletisim")}
              style={styles.socialButton}
            >
              <AntDesign name="facebook-square" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onPressButton("https://mifutoken.com/iletisim")}
              style={styles.socialButton}
            >
              <FontAwesome name="telegram" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() =>
              onPressButton("https://mifutoken.com/kullanim-sartlari")
            }
          >
            <Text style={styles.menuItem}>Kullanım Şartları</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              onPressButton("https://mifutoken.com/gizlilik-politikasi")
            }
          >
            <Text style={styles.menuItem}>Gizlilik Politikası</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Başlık */}
      <Text style={styles.title}>{Veri}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
  },
  menuButton: {
    padding: 8,
  },
  title: {
    flex: 1, // Başlığın mevcut alandan geriye kalan alanı kaplaması için
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center", // Başlığın ortalanmasını sağlamak için
    color: "white",
  },
  menu: {
    position: "absolute",
    left: 16, // Menüyü sol tarafta konumlandırmak için
    top: 60, // Menünün başlangıç pozisyonunu ayarlayabilirsiniz
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    elevation: 4,
  },
  menuItem: {
    marginBottom: 12,
  },
  menuOpen: {
    zIndex: 1, // Menü açıkken Header'ın üstte olmasını sağlar
  },
  socialButton: { margin: 5 },
});

export default Header;
