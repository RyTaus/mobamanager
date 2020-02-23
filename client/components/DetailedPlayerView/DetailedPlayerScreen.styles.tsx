import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    textAlign: "center",
    alignItems: "center"
  },
  profileContainer: {
    flex: 5,
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    width: Dimensions.get("screen").width - 25
  },
  image: {
    width: 128,
    height: 128,
    borderRadius: 128 / 2,
    borderColor: "#33C3F7",
    borderWidth: 2,
    resizeMode: "contain",
    justifyContent: "center",
    alignContent: "center",
    padding: 10
  },
  header: {
    top: 15,
    padding: 15,
    fontSize: 35,
    fontWeight: "600"
  }
});
