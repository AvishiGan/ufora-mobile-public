import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    padding: 10,
    paddingHorizontal: 20,
    // justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#4F4E4",
    flexDirection: "row",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});