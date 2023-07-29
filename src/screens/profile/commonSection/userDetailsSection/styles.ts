import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // topSectionContainer: {
  //   width: 430,
  //   height: 321,
  //   flexShrink: 0,
  // },
  // topSectionContainer: {
  //   flex: 1,
  //   flexGrow: 0,
  //   flexShrink: 0,
  //   height: 200, // CHANGE THIS! MANUALLY ADDED
  // },  
  userDetailsContainer: {
    display: "flex",
    width: 405,
    height: 300,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    flexShrink: 0,
    borderRadius: 15,
    // backgroundColor: "var(--brand-white, #FEFEFE)",
    backgroundColor: "#FEFEFE",
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
    gap: 12,
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
    gap: 15,
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
    flexGrow: 1,
    // width: 282,
    alignItems: "flex-start",
    gap: 15,
  },
});