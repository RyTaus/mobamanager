import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import {
  TouchableHighlight,
  TouchableOpacity
} from "react-native-gesture-handler";

import PlayerCard from "../shared/PlayerCard/PlayerCard";
import { SearchBar } from "react-native-elements";
import { styles } from "./PlayerScreen.styles";
import { useNavigation } from "@react-navigation/native";

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
  const navigation = useNavigation();

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
          contentContainerStyle={{ margin: 0, padding: 0 }}
          style={{ margin: 0, padding: 0 }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ marginHorizontal: 10, marginVertical: 5 }}
              onPress={() => navigation.navigate("PlayerView")}
            >
              <PlayerCard
                fullName={item.fullName}
                gamerTag={item.gamerTag}
                playerImgSrc={item.playerImgSrc}
                microScore={item.microScore}
                macroScore={item.macroScore}
                mentalScore={item.mentalScore}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
