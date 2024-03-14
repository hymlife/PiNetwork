import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Sayfaları içe aktar
import HomeScreen from "../screens/HomeScreen";
import MainnetScreen from "../screens/MainnetScreen";
import PiBrowserScreen from "../screens/PiBrowserScreen";
import PiUygulamalariScreen from "../screens/PiUygulamalariScreen";
import MinePiScreen from "../screens/MinePiScreen";
import ReferralTeamScreen from "../screens/ReferralTeamScreen";
import RollerScreen from "../screens/RollerScreen";
import SohbetScreen from "../screens/SohbetScreen";
import NodeScreen from "../screens/NodeScreen";
import SssScreen from "../screens/SssScreen";
import WhitePaperScreen from "../screens/WhitePaperScreen";
import DestekMerkeziScreen from "../screens/DestekMerkeziScreen";
import CekirdekEkipScreen from "../screens/CekirdekEkipScreen";
import ProfilScreen from "../screens/ProfilScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Ana Sayfa" component={HomeScreen} />
      <Stack.Screen name="Mainnet" component={MainnetScreen} />
      <Stack.Screen name="Pi Browser" component={PiBrowserScreen} />
      <Stack.Screen name="Pi Uygulamaları" component={PiUygulamalariScreen} />
      <Stack.Screen name="Mine Pi" component={MinePiScreen} />
      <Stack.Screen name="Referral Team" component={ReferralTeamScreen} />
      <Stack.Screen name="Roller" component={RollerScreen} />
      <Stack.Screen name="Sohbet" component={SohbetScreen} />
      <Stack.Screen name="Node" component={NodeScreen} />
      <Stack.Screen name="SSS" component={SssScreen} />
      <Stack.Screen name="White Paper" component={WhitePaperScreen} />
      <Stack.Screen name="Destek Merkezi" component={DestekMerkeziScreen} />
      <Stack.Screen name="Çekirdek Ekip" component={CekirdekEkipScreen} />
      <Stack.Screen name="Profil" component={ProfilScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
