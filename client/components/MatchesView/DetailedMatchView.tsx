import { View, FlatList, Text } from "react-native";

import { styles } from "./DetailedMatchView.styles";

import React from "react";

export default function MatchesScreen({ date, editable }) {
  if (editable) {
    return <EditableView />;
  } else {
    return <NonEditableView />;
  }
}

function EditableView() {
  return (
    <View style={styles.EditableView}>
      <Players />
    </View>
  );
}

function NonEditableView() {
  return (
    <View style={styles.NonEditableView}>
      <Players />
    </View>
  );
}

const PLAYER_TYPES = [
  {
    position: "Top",
    playOptions: ["Work hard!!!", "Chill"]
  },
  {
    position: "Bottom",
    playOptions: ["Work hard!!!", "Chill"]
  },
  {
    position: "Middle",
    playOptions: ["Work hard!!!", "Chill"]
  },
  {
    position: "AD/Carry",
    playOptions: ["Work hard!!!", "Chill"]
  },
  {
    position: "Support",
    playOptions: ["Work hard!!!", "Chill"]
  }
];

function Players() {
  return (
    <FlatList
      data={PLAYER_TYPES}
      renderItem={({ item }) => {
        return Player(item);
      }}
    />
  );
}

function Player({ position, playOptions }) {
  return (
    <View style={styles.Player}>
      <Text>{position}</Text>
    </View>
  );
}
