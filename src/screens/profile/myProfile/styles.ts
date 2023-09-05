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
        display: 'flex',
        // width: 404,
        padding: 15,
        paddingLeft: 10,
        paddingTop: 0,
        paddingRight: 10,
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
    },

    /*********************************Blogs********************************** */

    blogActionContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: 10,
    },

    /*********************************Portfolio********************************** */
    projectActionContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },

    /*********************************Common********************************** */

    topSectionContainer: {
        flexShrink: 0,
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
    },
  });