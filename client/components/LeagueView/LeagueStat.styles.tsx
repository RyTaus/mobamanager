import { DEFAULT_SYSTEM_COLOR } from "../shared/Styles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    borderStyle: "solid",
    marginHorizontal: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    height: 60,
    backgroundColor: "white"
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginRight: 15
  },
  textContainer: {
    alignContent: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    textAlign: "left",
    fontSize: 21,
    fontWeight: "500"
  },
  emoji: {
    textAlign: "right",
    fontSize: 18,
    flex: 1,
    justifyContent: "flex-end"
  },
  subtitle: {
    fontWeight: "500",
    fontSize: 12
  },
  wins: {
    textAlign: "right",
    fontSize: 18,
    flex: 1,
    justifyContent: "flex-end"
  },
  separator: {
    marginHorizontal: 5
  },
  losses: {
    fontSize: 18
  }
});
