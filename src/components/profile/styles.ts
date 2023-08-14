import { Flex } from "@react-native-material/core";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    /***************************************************Top Bar******************************************************** */
    headerIconsContainer: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 13,
        marginTop:20

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
        width: "95%",
        flexShrink: 0,
        borderRadius: 15,
        backgroundColor: "#FEFEFE",
        marginBottom: 25,
        paddingVertical: 5,
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
        // Should be 90% of the screen width
        width: "100%",
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
        gap: 10,
        flexDirection: 'row',
    },

    /******************************************************Blog Card************************************************************/
    singleBlogContainer: {
        display: 'flex',
        width: "100%",
        alignItems: 'center',
        gap: 10,
        borderRadius: 15,
        flexDirection: 'row',
    },
    blogImage: {
        borderRadius: 15,
        marginLeft: 5,
        marginTop: 5,
        marginBottom: 5,
        // height: 180,
        flexShrink: 0,
        flex: 1,
        flexGrow: 1,
        alignSelf: 'stretch',
    },
    blogContentContainer: {
        display: 'flex',
        width: "62%",
        paddingVertical: 10,
        paddingHorizontal: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 10,
        // backgroundColor: "yellow",
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5,
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
    },
    dateTimeContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderRadius: 5,
        flexDirection: 'row',
    },

    /******************************************************All Blogs************************************************************/

    blogActionContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        marginHorizontal: 10,
        marginTop: 25,
        marginBottom: 25,
    },

    /******************************************************Post Card************************************************************/
    singlePostContainer: {
        display: 'flex',
        width: "100%",
        paddingTop: 15,
        flexDirection: 'column',
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
        // width: 330,
        width: "100%",
        height: 330,
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
    descriptionContainer: {
        width: "90%",
    },

    /******************************************************All Posts************************************************************/
    // Previous posts and add a new post container
     postActionContainer: {
        display: "flex",
        paddingVertical: 0,
        paddingHorizontal: 10,
        flexDirection: "column",
        alignItems: "center",
        gap: 15,
        marginTop: 25,
        marginBottom: 25,
    },
    allPostsContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
    },

    /******************************************************Project Card************************************************************/
    singleProjectContainer: {
        display: 'flex',
        width: "100%",
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 10,
        borderRadius: 15,
    },
    projectImage: {
        height: 150,
        width: "97%",
        borderRadius: 15,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
    },
    projectContentContainer: {
        display: 'flex',
        padding: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 10,
        alignSelf: 'stretch',
        marginBottom: 5,
        marginHorizontal: 5,
    },
    projectArticleContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 10,
        alignSelf: 'stretch',
    },

    /******************************************************All Projects************************************************************/

    projectActionContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        marginHorizontal: 10,
        marginTop: 25,
        marginBottom: 25,
    },

    /******************************************************All Common************************************************************/

    topSectionContainer: {
        flexShrink: 0,
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
        gap: 10,
    },

    /******************************************************Post Author Bio Footer************************************************************/
    authorBioContainer: {
        display: 'flex',
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
        flexDirection: "row",
        marginBottom: 15,
    },

    /****************************************************Create Post***************************************************************/
    twoButtonsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },

    /**
     * Create post header profile pic
     */
    profilePicCreatePost: {
        width: 44,
        height: 44,
        borderRadius: 44,
    },

    inputField: {
        fontFamily: "Switzer Variable",
        fontSize: 25,
        fontStyle: "normal",
        fontWeight: "600",
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginBottom: 60,
    },

    //////////////////////////////////////////////////////////////////Buttons//////////////////////////////////////////////////////////////////////////////////

    /*************************************************************Profile Header Buttons******************************************************************** */
    profileHeaderButtonContainer: {
        display: "flex",
        padding: 5,
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#4F4E4E",
        flexDirection: "row",
      },
      buttonContent: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
      },
    
      /*************************************************************Create Post Buttons*********************************************************************** */
      createPostButtonContainer: {
        display: "flex",
        padding: 10,
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#4F4E4E",
        flexDirection: "row",
      },

      headerAccessLevelContainer: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
      },
});