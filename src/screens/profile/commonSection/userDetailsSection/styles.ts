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
  profileName: {
    // color: "var(--brand-black, #111)",
    color: "#111",
    leadingTrim: "both",
    textEdge: "cap",
    fontFamily: "Poppins",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 24,
    // paddingBottom: 12,
  },
  twoIconsContainer: {
    display: "flex",
    alignItems: "flex-start",
    gap: 5,
    flexDirection: "row",
  },
  verifiedIcon: {
    display: "flex",
    width: 20,
    height: 20,
    padding: 4.444,
    justifyContent: "center",
    alignItems: "center",
    gap: 2.222,
    borderRadius: 17.111,
    // background: "var(--brand-blue, #2656FF)",
    background: "#2656FF",
  },
  uforaIcon: {
    display: "flex",
    width: 20,
    height: 20,
    padding: 4.444,
    justifyContent: "center",
    alignItems: "center",
    gap: 2.222,
    borderRadius: 17.111,
    // background: "var(--brand-black, #111)",
    background: "#111",
  },
  uniName: {
    // color: "var(--brand-grey, #4F4E4E)",
    color: "##4F4E4E",
    leadingTrim: "both",
    textEdge: "cap",
    fontFamily: "Poppins",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 24,
  },
  statusContainer: {
    display: "flex",
    flexDirection: "row", // // Update to horizontal layout
    alignItems: "flex-start",
    gap: 15,
  },
  individualStatusContainer:{
    display: "flex",
    flexDirection: "row", // // Update to horizontal layout
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  statusCount: {
    color: "#000",
    leadingTrim: "both",
    textEdge: "cap",
    fontFamily: "Poppins",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 24,
  },
  statusName: {
    color: "#000",
    leadingTrim: "both",
    textEdge: "cap",
    fontFamily: "Poppins",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    // lineHeight: 1,
    lineHeight: 24,
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