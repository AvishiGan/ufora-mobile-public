import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    padding: 5,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    flex: 1,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#4F4E4E",
  },
  buttonText: {
    color: "#4F4E4E",
    letterSpacing: 1,
    textTransform: "uppercase",
    fontFamily: "Poppins",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 20,
  },
});
