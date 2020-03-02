import { FlatList, Text, View } from "react-native";

import LeagueStat from "./LeagueStat";
import PlayerCard from "../shared/PlayerCard/PlayerCard";
import { RANKINGS_MOCK_DATA } from "./mockRankingsData";
import React from "react";

export default function LeagueScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          borderColor: "red",
          height: 150,
          borderWidth: 1,
          padding: 10,
          margin: 10,
          marginHorizontal: 20
        }}
      >
        <Text>hello</Text>
      </View>
      <FlatList
        data={RANKINGS_MOCK_DATA}
        style={{ flex: 10 }}
        renderItem={({ item }) => <LeagueStat stats={item} />}
        contentContainerStyle={{ marginHorizontal: 10, paddingVertical: 10 }}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </View>
  );
}
