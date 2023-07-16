import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10, // Add margin to create a gap between each set of info
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 16,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  profileName: {
    color: "#111",
    letterSpacing: 0.5,
    textTransform: "capitalize",
    fontFamily: "Poppins",
    fontSize: 20,
    fontStyle: "normal",
    // fontWeight: "600",
    fontWeight: "800",
    // lineHeight: "normal",
    lineHeight: 200
  },
  horizontalContainer: {
    flexDirection: "row",
  },
  profileText: {
    color: "#4F4E4E",
    letterSpacing: 0.25,
    textTransform: "capitalize",
    fontFamily: "Poppins",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    // lineHeight: 18,
    display: "flex",
    alignItems: "flex-start",
    gap: 15,
  },
});