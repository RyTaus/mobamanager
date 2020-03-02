import { View, FlatList, Text, Picker } from "react-native";
import { styles } from "./DetailedMatchView.styles";

import { Dropdown } from "react-native-material-dropdown";

import React from "react";

export default function MatchesScreen({ date, editable }) {
  return (
    <View style={styles.matchesScreen}>
      {editable ? <EditableView /> : <NonEditableView />}
    </View>
  );
}

function EditableView() {
  return (
    <View style={styles.editableView}>
      <Players />
    </View>
  );
}

function NonEditableView() {
  return (
    <View style={styles.nonEditableView}>
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
    <View style={styles.players}>
      <FlatList
        data={PLAYER_TYPES}
        renderItem={({ item }) => {
          return Player(item);
        }}
      />
    </View>
  );
}

function Player({ position, playOptions }) {
  const dropdownOptions = playOptions.map(option => {
    return { value: option };
  });
  return (
    <View style={styles.player}>
      <Text style={styles.position}>{position}</Text>
      <Dropdown
        containerStyle={styles.dropdownContainer}
        pickerStyle={styles.dropdownPicker}
        label="Play Options"
        data={dropdownOptions}
      />
    </View>
  );
}
