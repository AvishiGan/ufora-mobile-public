import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  });