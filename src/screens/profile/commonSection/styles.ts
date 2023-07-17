import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  fullContainer: {
    width: 430,
    height: 321,
    flexShrink: 0,
  },
  infoContainer: {
    display: "flex",
    width: 405,
    height: 140,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    flexShrink: 0,
    borderRadius: 15,
    backgroundColor: "var(--brand-white, #FEFEFE)",
  },
  imageNameContainer: {
    display: "flex",
    alignItems: "center",
    gap: 15,
  },
  // Profile name
  profileName: {
    color: "var(--brand-black, #111)",
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
    color: "var(--brand-grey, #4F4E4E)",
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
    width: 282,
    alignItems: "flex-start",
    gap: 15,
  },
});