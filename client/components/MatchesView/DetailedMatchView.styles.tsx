import { StyleSheet } from "react-native";
import { UPCOMING_MATCH_BORDER, CURRENT_MATCH_BORDER } from "../shared/Styles";

export const styles = StyleSheet.create({
  matchesScreen: {
    paddingLeft: 10,
    paddingTop: 10
  },
  EditableView: {},
  NonEditableView: {},
  Players: {
    justifyContent: "space-evenly"
  },
  Player: {
    height: 110
  }
});
