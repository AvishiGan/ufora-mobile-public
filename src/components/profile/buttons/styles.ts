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
  buttonText: {
    color: "#4F4E4E",
    leadingTrim: 'both',
    textEdge: 'cap',
    fontFamily: 'Poppins',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    // lineHeight: 'normal',
    lineHeight: 20, // The height of a line box
  },
  buttonIcon: {
    width: 16,
    height: 16,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
});