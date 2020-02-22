import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PlayerCard from "./PlayerCard";

export default function App() {
  return (
    <View style={styles.container}>
      <PlayerCard />
    </View>
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
