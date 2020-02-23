import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  playerCard: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "black",
    height: 150,
    width: 350
  },
  header: {
    flexDirection: "row"
  },
  playerImage: {
    borderRadius: 4,
    height: 70,
    width: 70
  },
  names: {
    left: 10,
    top: 10
  },
  fullName: {
    fontSize: 20
  },
  gamerTag: {
    fontSize: 16
  },
  statsOverview: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  micro: {
    borderRadius: 1,
    borderRightWidth: 0.5,
    borderLeftWidth: 0.5,
    borderColor: "black"
  },
  stat: {
    width: 110,
    alignItems: "center"
  },
  statIcon: {
    height: 40,
    width: 40
  },
  statData: {
    fontSize: 20,
    textAlign: "center"
  }
});
