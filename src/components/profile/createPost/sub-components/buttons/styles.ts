import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    padding: 5,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#4F4E4E",
    flexDirection: "row",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});