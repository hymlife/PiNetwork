import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderBack from "../components/HeaderBack";
import TeamMember from "../components/TeamMember";

const CekirdekEkipScreen = () => {
  return (
    <View>
      <HeaderBack Veri="CoreTeam" />
      <ScrollView>
        <TeamMember
          name="Dr. Nicolas Kokkalis"
          title="Head of Technology"
          imageSource={require("../../assets/img/indir.jpeg")}
        />

        <TeamMember
          name="Dr. Nicolas Kokkalis"
          title="Head of Technology"
          imageSource={require("../../assets/img/indir.jpeg")}
        />
      </ScrollView>
    </View>
  );
};

export default CekirdekEkipScreen;

const styles = StyleSheet.create({});
