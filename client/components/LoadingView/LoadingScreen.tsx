import { ActivityIndicator, Text } from "react-native";
import React, { useEffect } from "react";

import { LinearGradient } from "expo-linear-gradient";
import styles from "./LoadingScreen.styles";
import { useNavigation } from "@react-navigation/native";

export default function LoadingScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => navigation.navigate("Main"), 3000);
  }, []);
  return (
    <LinearGradient colors={["#67B26F", "#4ca2cd"]} style={styles.gradient}>
      <Text style={styles.header}>Moba Manager.</Text>
      <ActivityIndicator color="white" style={{ padding: 20 }} />
    </LinearGradient>
  );
}
