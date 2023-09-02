import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  /******************************Post********************************** */

  // Previous posts and add a new post container
  postActionContainer: {
    display: "flex",
    paddingVertical: 0,
    paddingHorizontal: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  allPostsContainer: {
    display: "flex",
    padding: 15,
    paddingLeft: 10,
    paddingTop: 0,
    paddingRight: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },

  /********************************* Jobs ********************************** */

  allJobsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    marginTop: 25,
    marginBottom: 25,
  },

  /*********************************Common********************************** */

  topSectionContainer: {
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    display: "flex",
  },
});
