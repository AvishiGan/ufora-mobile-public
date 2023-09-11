import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  /********************************************************* Job card ********************************************************* */
  singleJobCardContainer: {
    display: "flex",
    width: "95%",
    padding: 10,
    justifyContent: "space-between",
    borderRadius: 15,
    backgroundColor: "#FEFEFE",
    marginLeft: 10,
    marginRight: 10,
  },
  organizationLogoNameJobContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    justifyContent: "space-between", // To push the date and apply button to the right
  },
  organizationLogo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 0.25,
    borderStyle: "solid",
    borderColor: "#B8B8B8",
  },
  organizationNameJobContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 5,
    width: "55%", // To make the organization name and job title wrap to the next line
  },
  dateApplyButtonContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  applyButton: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    borderRadius: 5,
    backgroundColor: "#2656FF",
    color: "#FEFEFE",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
