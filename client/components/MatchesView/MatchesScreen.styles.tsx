import { StyleSheet } from "react-native";
import { UPCOMING_MATCH_BORDER, CURRENT_MATCH_BORDER } from "../shared/Styles";

export const styles = StyleSheet.create({
  matchesList: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
    paddingTop: 10
  },
  matchTitle: {
    fontSize: 30,
    paddingTop: 10,
    textAlign: "center"
  },
  pastMatchTitle: {
    fontSize: 30,
    paddingLeft: 10,
    paddingTop: 5
  },
  versusPast: {
    fontSize: 20,
    fontStyle: "italic",
    paddingLeft: 5,
    paddingTop: 15
  },
  versusContainer: {
    fontSize: 30,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 0
  },
  versusText: {
    fontSize: 30,
    paddingTop: 15
  },
  teamLogo: {
    height: 70,
    marginBottom: 10,
    width: 70
  },
  teamView: {
    alignItems: "center",
    justifyContent: "center"
  },
  gameInfoContainer: {
    flexDirection: "row"
  },
  pastMatchTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  matchCard: {
    borderRadius: 4,
    width: 350
  },
  upcomingMatch: {
    borderColor: UPCOMING_MATCH_BORDER,
    borderWidth: 3,
    height: 210
  },
  pastMatch: {
    borderColor: "black",
    borderWidth: 1,
    height: 50
  },
  currentMatch: {
    borderColor: CURRENT_MATCH_BORDER,
    borderWidth: 3,
    height: 210
  },
  date: {
    textAlign: "center"
  },
  time: {
    textAlign: "center"
  },
  pastDate: {
    marginRight: 5,
    marginTop: 5,
    textAlign: "right"
  }
});
