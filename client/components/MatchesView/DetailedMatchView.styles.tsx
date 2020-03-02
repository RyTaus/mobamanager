import { StyleSheet } from "react-native";
import { UPCOMING_MATCH_BORDER, CURRENT_MATCH_BORDER } from "../shared/Styles";

export const styles = StyleSheet.create({
  matchesScreen: {
    paddingLeft: 10,
    paddingTop: 10
  },
  editableView: {},
  nonEditableView: {},
  players: {
    justifyContent: "center"
  },
  player: {
    height: 110,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  position: {
    fontSize: 20
  },
  dropdownContainer: {
    width: 200
  },
  dropdownPicker: {
    width: 200
  }
});
