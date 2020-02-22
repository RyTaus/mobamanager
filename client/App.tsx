import { StyleSheet, Text, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import React from "react";

export default function App() {
  return (
    <LinearGradient
      colors={["#67B26F", "#4ca2cd"]}
      style={{
        alignItems: "center",
        borderRadius: 5,
        flex: 1,
        justifyContent: "center"
      }}
    >
      <Text style={{ fontWeight: "900", fontSize: 69, color: "white" }}>
        Moba Manager.
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
