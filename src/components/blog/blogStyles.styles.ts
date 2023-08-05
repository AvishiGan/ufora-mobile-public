import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: -30
    },
    wrapContainer: {
        gap: 25,
        flexDirection: "column"
    },
    headerRight: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: SIZES.gap*2,
        marginRight: SIZES.marginSide-1,
    },
    headerLeft: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: SIZES.marginSide-8,
        gap: SIZES.gap/10,
    },
    headerTitle: {
        fontSize: 25,
        color: COLORS.brandGrey
    },
    searchInput: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: SIZES.gap,
        marginHorizontal: SIZES.marginSide,
        marginTop: 0,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: COLORS.placeHolder,
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 12,  
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        // justifyContent: "center",
        alignItems: "center",
        marginHorizontal: SIZES.marginSide,
        gap: 15,
    },
    buttonCard: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.brandWhite,
        paddingVertical: 15,
        paddingHorizontal: 20,
        gap: 15,
        borderRadius: 15,
        flex: 1
    },
    featuredContainer: {
        marginHorizontal: SIZES.marginSide,
        flexDirection: "column",
        gap: 15,
        display: "flex",
        },
    featuredTitle: {
        color: COLORS.brandGrey,
        alignSelf: "stretch"
    },
    carouselCardContainer: {
        flex: 1,
    },
    carouselCard: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        borderRadius: 15,
        overflow: "hidden",
        // width: 385,
        height: 200,
        backgroundColor: COLORS.lightGrayHalf 
    },
    carouselCardImage: {
        resizeMode: "cover",
    },
    wrapContent: {
        flexDirection: "column",
        gap: 19,
        marginTop: 78,
    },
    sideButtons: {
        flexDirection: "row",
        marginHorizontal: -4,
        alignItems: "center", 
    },
    blogDetails: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: "flex-start",
    },
    blogTitle: {
        color: COLORS.brandWhite,
        alignSelf: "stretch",
    },
    blogDescription: {
        display: "flex",
        color: COLORS.brandWhite,
    },
    descriptionContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
    },
    blogAuthor: {
        display: "flex",
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 5
    },
    profilePicture: {
        width: 20,
        height: 20,
        borderRadius: 20,
        resizeMode: "cover",
        backgroundColor: COLORS.lightGrayHalf
    },
    authorName: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5
    },
    carouselIcons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        display: "flex",
    },
    blogDisplay: {
        marginTop: 10,
        flexDirection: "column",
        display: "flex",
        //width: 404,
        alignItems: "flex-start",
        alignContent: "flex-start",
        gap: 14,
        flexWrap: "wrap",
    },
    smallCardContainer: {
        flexDirection: "row",
        display: "flex",
        gap: 14
    },
    blogCardSmall: {
        display: "flex",
        width: 195,
        padding: 5,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 10,
        flexShrink: 0,
        backgroundColor: COLORS.brandWhite,
        borderRadius: 15,
    },
    blogCardSmallImage: {
        resizeMode: "cover",
        backgroundColor: COLORS.lightGrayHalf,
        borderRadius: 15,
        height: 97,
        //width: 185,
        alignSelf: "stretch",
    },
    blogCardSmallText: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 10,
        alignSelf: "stretch",
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    titleUpper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 5,
        alignSelf: "stretch"
    },
    blogCardSmallTitle: {
        color: COLORS.brandBlack,
        alignSelf: "stretch"
    },
    blogCardSmallDescription: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        borderRadius: 5,
    },
    authorDetails: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        alignSelf: "stretch"
    },
    blogCardSmallProfile: {
        width: 30,
        height: 30,
        borderRadius: 30,
        resizeMode: "cover",
        backgroundColor: COLORS.lightGrayHalf
    },
    authorBio: {
        flexDirection: "column",
        alignItems: "flex-start",
        flex: 1,
    },
    bioName: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        color: COLORS.brandBlack,
    },
    bioInstitute: {
        overflow: "hidden",
        color: COLORS.brandGrey,
        alignSelf: "stretch",    
    },
    blogCardLarge: {
        display: "flex",
        flexDirection: "row",
        //width: 404,
        padding: 5,
        alignItems: "center",
        gap: 10,
        flexShrink: 0,
        borderRadius: 15,
        backgroundColor: COLORS.brandWhite,
        height: 168
    },
    blogCardLargeImage: {
        alignSelf: "stretch",
        borderRadius: 15,
        resizeMode: "cover",
        backgroundColor: COLORS.lightGrayHalf,
        width: 108,
        height: 158
    },
    blogCardLargeText: {
        display: "flex",
        flex: 1,
        //width: 276,
        paddingHorizontal: 5,
        paddingVertical: 10,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 10,
        flexShrink: 0,
    },
    blogCardLargeDescription: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 5,
        alignSelf: "stretch",
    },
    blogCardLargeContent: {
        alignSelf: "stretch",
        color: COLORS.brandBlack,
        textAlign: "justify"
    },
    blogCardLargeAuthor: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        alignSelf: "stretch"
    },
    blogCardLargeAuthorDetails: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flex: 1
    },
    blogCardLargeAuthorName: {
        flexDirection: "row",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
    }
});

export default styles;