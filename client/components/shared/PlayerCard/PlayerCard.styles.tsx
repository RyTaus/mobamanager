import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  playerCard: {
    borderRadius: 5,
    padding: 15,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5
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
    left: 10
  },
  fullName: {
    fontSize: 30,
    fontWeight: "600"
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
