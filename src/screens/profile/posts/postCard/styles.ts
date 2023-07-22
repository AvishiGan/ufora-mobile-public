import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    // allPostsContainer: {
    //     display: 'flex',
    //     width: 404,
    //     // padding: '15px 10px 0px 10px',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     gap: 15,
    //     borderRadius: 15,
    //     backgroundColor: "var(--brand-white, #FEFEFE)",
    // },
    singlePostContainer: {
        display: 'flex',
        width: 404,
        // padding: '15px 10px 0px 10px',
        padding: 15,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
    },
    postDescription: {
        // display: "webkit-box",
        display: "flex",
        width: 373,
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: 2,
        overflow: "hidden",
        color: "var(--brand-black, #111)",
        textOverflow: "ellipsis",
        fontFamily: "Poppins",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: 16, /* 114.286% */
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
        lineHeight: 16, /* 114.286% */
    },
    postImage: {
        // width: 373,
        // height: 200,
        width: 404,
        height: 313,
        borderRadius: 15,
        // background: "url(https://images.unsplash.com/photo-1621574539437-4b7b7b0b0b0b), lightgray 50% / cover no-repeat",
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
        width: 373,
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
    likeButton: {
        width: 20,
        height: 20,
    },
    likedNames: {
        color: "var(--form-field-outline, #87929D)",
        leadingTrim: "both",
        textEdge: "cap",
        fontFamily: "Poppins",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "600",
        // lineHeight: "normal",
        lineHeight: 14, /* 116.667% */
    },
    andOthers:{
        color: "var(--form-field-outline, #87929D)",
        leadingTrim: "both",
        textEdge: "cap",
        fontFamily: "Poppins",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "400",
        // lineHeight: "normal",
        lineHeight: 14, /* 116.667% */
    },
    commentsCountContainer: {
        display: 'flex',
        height: 12,
        alignItems: 'flex-end',
        gap: 10,
    },
    commentsCountText: {
        display: 'flex',
        height: 12,
        alignItems: 'flex-end',
        gap: 10,
        color: "var(--form-field-outline, #87929D)",
        leadingTrim: "both",
        textEdge: "cap",
        fontFamily: "Poppins",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "400",
        // lineHeight: "normal",
        lineHeight: 14, /* 116.667% */
    },
    likeShareCommentButtonContainer: {
        display: 'flex',
        // width: 373,
        width: 406,
        // flexDirection: 'column',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
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
    eachButton: {
        width: 18,
        height: 18,
    },
    eachButtonText: {
        color: "var(--form-field-outline, #87929D)",
        leadingTrim: "both",
        textEdge: "cap",
        fontFamily: "Poppins",
        fontSize: 10,
        fontStyle: "normal",
        fontWeight: "400",
        // lineHeight: "normal",
        lineHeight: 11, /* 110% */
    },

});