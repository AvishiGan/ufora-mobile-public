import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    singlePostContainer: {
        display: 'flex',
        width: 350,
        padding: 15,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
    },
    seeMore:{
        overflow: "hidden",
        webkitBoxOrient: "vertical",
        webkitLineClamp: 2,
        color: "#2656FF",
        textOverflow: "ellipsis",
        fontFamily: "Poppins",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "700",
    },
    postImage: {
        width: 350,
        height: 350,
        borderRadius: 15,
    },
    feedbackContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    likesCommentsContainer: {
        display: 'flex',
        width: 320,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    likeButtonAndNamesContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        flexDirection: 'row',
    },
    likeShareCommentButtonContainer: {
        display: 'flex',
        width: 350,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        paddingVertical: 15,
        paddingHorizontal: 0,
        borderTopWidth: 0.2,
        borderTopColor: '#87929D',
        borderTopStyle: 'solid',
    },
    eachButtonContainer: {
        display: 'flex',
        width: 110,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        flexShrink: 0,
    },
});