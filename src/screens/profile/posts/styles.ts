import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    // Previous posts and add a new post container
    postActionContainer: {
        // display:"inline-flex",
        display: "flex",
        // padding: 0px 10px;
        paddingVertical: 0,
        paddingHorizontal: 10,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 15,
    },
    allPostsContainer: {
        display: 'flex',
        width: 404,
        // padding: '15px 10px 0px 10px',
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