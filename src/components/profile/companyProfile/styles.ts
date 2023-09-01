import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  /********************************************************* Job card ********************************************************* */
  singleJobCardContainer: {
    display: "flex",
    width: "90%",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#FEFEFE",
  },
  organizationLogoNameJobContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
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
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignItems: "center",
    gap: 10,
    borderRadius: 5,
    backgroundColor: "#2656FF",
  },
});
