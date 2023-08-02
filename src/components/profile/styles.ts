import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    /***************************************************User Profile Top Bar******************************************************** */
    headerIconsContainer: {
        display: "flex",
        width: "95%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingBottom: 15,
        backgroundColor: "#FEFEFE",
    },
    backIconNameContainer: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        flexDirection: "row",
    },
    chatSearchIconsContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        flexDirection: "row",
    },

    /******************************************************Profile Slider************************************************************/
    allSlidesContainer: {
        flexShrink: 0,
        display: "flex",
        flexDirection: "row",
    },
    individualSlideContainer: {
        display: "flex",
        width: 90,
        paddingVertical: 10,
        paddingHorizontal: 5,
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        flexShrink: 0,
        borderRadius: 7,
        backgroundColor: "#2656FF",
    },
    activeSlide: {
        backgroundColor: "#FF2656",
    },

    /******************************************************Profile Header************************************************************/
    userDetailsContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 15,
        width: "100%",
        flexShrink: 0,
        borderRadius: 15,
        backgroundColor: "#FEFEFE",
        paddingBottom: 25,
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
        // flexGrow: 0,
        // flexShrink: 0,
      },
      profileNameTwoIconsContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        flexDirection: "row",
      },
      profilePicContainer: {
        width: 50,
        height: 50,
      },
      profilePicProfileHeader: {
        width: 50,
        height: 50,
        flexShrink: 0,
        borderRadius: 50,
      },
      twoIconsContainer: {
        display: "flex",
        alignItems: "flex-start",
        gap: 5,
        flexDirection: "row",
      },
      statusContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
      },
      individualStatusContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
      },
      buttonContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 15,
      },

    /******************************************************Post Header************************************************************/
    postHeaderContainer: {
        display: 'flex',
        width: 350,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    profilePicNameUniTimeContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        flexDirection: 'row',
    },
    profileNameUniTimeContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    profilePicPostHeader:{
        width: 44,
        height: 44,
        borderRadius: 44,
    },
    verifiedAndUforaIconContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 5,
        flexDirection: 'row',
    },
    timeAndGlobeIconContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        flexDirection: 'row',
    },
    moreAndCrossIconContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: 15,
        flexDirection: 'row',
    },

    /******************************************************Blog Card************************************************************/
    singleBlogContainer: {
        display: 'flex',
        width: 350,
        padding: 5,
        alignItems: 'center',
        gap: 10,
        borderRadius: 15,
        backgroundColor: "var(--brand-white, #FEFEFE)",
        flexDirection: 'row',
    },
    blogImage: {
        // flex: 1,
        // flexShrink: 0,
        // flexBasis: 0,
        alignSelf: 'stretch',
        borderRadius: 15,
    },
    blogContentContainer: {
        display: 'flex',
        width: 276,
        paddingVertical: 10,
        paddingHorizontal: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 10,
        flexShrink: 0,
    },
    /**
     * Blog content without profile header container 
     */
    blogArticleContainer:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 10,
        // alignSelf: 'stretch',
    },
    dateTimeContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderRadius: 5,
        flexDirection: 'row',
    },

    /******************************************************Post Card************************************************************/
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

    /******************************************************Project Card************************************************************/
    singleProjectContainer: {
        display: 'flex',
        width: 404,
        padding: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 10,
        borderRadius: 15,
        backgroundColor: "#FEFEFE",
    },
    projectImage: {
        height: 150,
        alignSelf: 'stretch',
        borderRadius: 15,
    },
    projectContentContainer: {
        display: 'flex',
        padding: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 10,
        alignSelf: 'stretch',
    },
    projectArticleContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 10,
        alignSelf: 'stretch',
    },

    /******************************************************Post Author Bio Footer************************************************************/
    authorBioContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        alignSelf: 'stretch',
        flexDirection: 'row',
    },
    profilePicBioFooter: {
        width: 30,
        height: 30,
        borderRadius: 30,
    },

    /******************************************************Content Addition Bar************************************************************/
    iconAndTextContainer: {
        display: "flex",
        padding: 10,
        alignItems: "center",
        gap: 10,
        alignSelf: "stretch",
        borderRadius: 15,
        background: "#FEFEFE",
        flexDirection: "row",
        paddingBottom: 15,
    },

});