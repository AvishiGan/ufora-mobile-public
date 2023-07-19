import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // topSectionContainer: {
  //   width: 430,
  //   height: 321,
  //   flexShrink: 0,
  // },
  topSectionContainer: {
    flex: 1,
    flexGrow: 0,
    flexShrink: 0,
    height: 200, // CHANGE THIS! MANUALLY ADDED
  },  
  userDetailsContainer: {
    display: "flex",
    width: 405,
    // flexGrow: 1,
    height: 140,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    flexShrink: 0,
    borderRadius: 15,
    backgroundColor: "var(--brand-white, #FEFEFE)",
  },
  profilepicNameUniContainer: {
    display: "flex",
    alignItems: "center",
    gap: 15,
  },
  // Profile name
  profileName: {
    // color: "var(--brand-black, #111)",
    color: "#111",
    leadingTrim: "both",
    textEdge: "cap",
    fontFamily: "Poppins",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "600",
    // lineHeight: 200,
  },
  // Name of the university
  uniName: {
    // color: "var(--brand-grey, #4F4E4E)",
    color: "##4F4E4E",
    leadingTrim: "both",
    textEdge: "cap",
    fontFamily: "Poppins",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    // lineHeight: "normal",
  },
  // Container of profile name and university name
  nameUniContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 12,
  },
  statusContainer: {
    display: "flex",
    flexDirection: "row", // // Update to horizontal layout
    alignItems: "center",
    gap: 15,
  },
  individualStatusContainer:{
    display: "flex",
    flexDirection: "row", // // Update to horizontal layout
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  // statusCommon: {
  //   color: "#000",
  //   leadingTrim: "both",
  //   textEdge: "cap",
  //   fontFamily: "Poppins",
  //   fontStyle: "normal",
  //   // lineHeight: "normal",
  // },
  statusCount: {
    color: "#000",
    leadingTrim: "both",
    textEdge: "cap",
    fontFamily: "Poppins",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    // lineHeight: "normal",
  },
  statusName: {
    color: "#000",
    leadingTrim: "both",
    textEdge: "cap",
    fontFamily: "Poppins",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    // lineHeight: "normal",
    textTransform: "capitalize",
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

// background: var(--graph, radial-gradient(678.36% 138.22% at 100.00% 95.42%, rgba(242, 242, 242, 0.30) 0%, rgba(224, 223, 223, 0.30) 50.24%, rgba(238, 238, 238, 0.30) 100%), #FFF);