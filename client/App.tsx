import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PlayerCard from "./PlayerCard";

export default function App() {
  return (
    <View style={styles.container}>
      <PlayerCard
        name="Maddie Louis"
        gamerTag="maddiemaddiemaddie"
        playerImgSrc="https://lmuhacks.github.io/images/maddie.png"
        mentalScore={90}
        microScore={100}
        macroScore={32}
      />
      <PlayerCard
        name="Ian Lizarda"
        gamerTag="ianlizzoooo"
        playerImgSrc="https://lmuhacks.github.io/images/ian.jpeg"
        mentalScore={-16}
        microScore={15}
        macroScore={0}
      />
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
