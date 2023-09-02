import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  allCardsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 15,
    marginTop: 25,
    marginBottom: 25,
  },
  individualCardContainer: {
    display: "flex",
    width: "95%",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    borderRadius: 15,
    backgroundColor: "#FEFEFE",
  },
  allDetailsContainer: {
    display: "flex",
    flexDirection: "column",
  },
  iconAndDetailsContainer: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    alignSelf: "stretch",
    flexDirection: "row",
    marginBottom: 10,
    paddingLeft: 0,
  },
  /**
   * Include in education, clubs and societies, achievements
   */
  detailsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  individualDetailContainer: {
    display: "flex",
    webkitBoxOrient: "vertical",
    webkitLineClamp: 1,
    alignSelf: "stretch",
  },
  imageContainer: {
    width: "110%",
    height: 132,
    borderRadius: 15,
  },
  /*****************************************************Basic Info*************************************************** */
  singleBasicInfoContainer: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    alignSelf: "stretch",
    flexDirection: "row",
    marginBottom: 10,
  },
  basicInfoIconContainer: {
    width: 30,
    height: 30,
  },
  seeMore: {
    color: "#2656FF",
  },
  contentWithGap: {
    paddingVertical: 10,
  },
});
