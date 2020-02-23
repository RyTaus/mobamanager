import React, { useState } from "react";
import { SafeAreaView, Text, View, FlatList, ScrollView } from "react-native";

import { styles } from "./PlayerScreen.styles";
import { SearchBar } from "react-native-elements";
import PlayerCard from "../shared/PlayerCard/PlayerCard";

const DATA = [
  {
    fullName: "Maddie Louis",
    gamerTag: "maddiemaddiemaddie",
    playerImgSrc: "https://lmuhacks.github.io/images/maddie.png",
    microScore: 20,
    macroScore: 50,
    mentalScore: 100
  },
  {
    fullName: "Ian Lizarda",
    gamerTag: "ianianian",
    playerImgSrc: "https://lmuhacks.github.io/images/ian.jpeg",
    microScore: 10,
    macroScore: 25,
    mentalScore: 50
  },
  {
    fullName: "Ryan Taus",
    gamerTag: "ryanryanryan",
    playerImgSrc: "https://lmuhacks.github.io/images/ian.jpeg",
    microScore: 10,
    macroScore: 25,
    mentalScore: 50
  },
  {
    fullName: "Kevin Metelus",
    gamerTag: "kevinkevinkevin",
    playerImgSrc: "https://lmuhacks.github.io/images/ian.jpeg",
    microScore: 10,
    macroScore: 25,
    mentalScore: 50
  },
  {
    fullName: "Masao Kitamura",
    gamerTag: "masaomasaomasao",
    playerImgSrc: "https://lmuhacks.github.io/images/ian.jpeg",
    microScore: 10,
    macroScore: 25,
    mentalScore: 50
  }
];

export default function PlayerScreen() {
  const [input, setInput] = useState("");
  return (
    <SafeAreaView>
      <SearchBar
        placeholder="Type here..."
        onChangeText={input => setInput(input)}
        value={input}
        lightTheme
      />
      <View style={styles.playerList}>
        <FlatList
          data={DATA}
          ItemSeparatorComponent={FlatListItemSeparator}
          renderItem={({ item }) => (
            <PlayerCard
              fullName={item.fullName}
              gamerTag={item.gamerTag}
              playerImgSrc={item.playerImgSrc}
              microScore={item.microScore}
              macroScore={item.macroScore}
              mentalScore={item.mentalScore}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

function FlatListItemSeparator() {
  return (
    <View
      style={{
        height: 10,
        width: "100%"
      }}
    />
  );
}
