import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  userDetailsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    flexShrink: 0,
    borderRadius: 15,
    backgroundColor: "#FEFEFE",
    paddingBottom: 25,
  },
  profilePicNameUniContainer: {
    display: "flex",
    alignItems: "center",
    gap: 15,
    flexDirection: "row",
  },
  profileNameUniContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  profileNameTwoIconsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
  profilePicContainer: {
    width: 50,
    height: 50,
  },
  profilePic: {
    width: 50,
    height: 50,
    flexShrink: 0,
    borderRadius: 50,
  },
  twoIconsContainer: {
    display: "flex",
    alignItems: "flex-start",
    gap: 5,
    flexDirection: "row",
  },
  statusContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  individualStatusContainer:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 15,
  },
});