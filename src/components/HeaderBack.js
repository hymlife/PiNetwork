import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // varsayılan olarak FontAwesome kullanıyorum, ancak react-native-vector-icons kütüphanesini de kullanabilirsiniz
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const HeaderBack = ({ Veri }) => {
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

  return (
    <View style={[styles.container, menuOpen && styles.menuOpen]}>
      {/* Menü simgesi */}
      <TouchableOpacity
        onPress={() => handleMenuItemPress("Ana Sayfa")}
        style={styles.menuButton}
      >
        <Ionicons name="arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>

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
    elevation: 2, // Gölgelendirme efekti için elevation ekleyin
    backgroundColor: "#fff", // Gölgelendirme efektini görmek için arka plan rengini ayarlayın
  },
  menuButton: {
    padding: 8,
  },
  title: {
    flex: 1, // Başlığın mevcut alandan geriye kalan alanı kaplaması için
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center", // Başlığın ortalanmasını sağlamak için
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
});

export default HeaderBack;
