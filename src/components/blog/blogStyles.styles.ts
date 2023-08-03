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
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: SIZES.gap*2,
        marginRight: SIZES.marginSide-1,
    },
    headerLeft: {
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
        flexDirection: "row",
        // justifyContent: "center",
        alignItems: "center",
        marginHorizontal: SIZES.marginSide,
        gap: 15,
    },
    buttonCard: {
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
        flex: 1,
        flexirection: "column",
        justifyContent: 'flex-start',
        alignItems: "flex-start",
    },
    blogTitle: {
        color: COLORS.brandWhite,
        alignSelf: "stretch",
    },
    blogDescription: {
        color: COLORS.brandWhite,
    },
    descriptionContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
    },
    blogAuthor: {
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
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5
    },
    carouselIcons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 2
    },
    blogDisplay: {
        marginTop: 25,
        flexDirection: "column",
    },
    smallCardContainer: {
        flexDirection: "row",
    },
    blogCardSmall: {
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
        width: 185,
        alignSelf: "stretch",
    },
    blogCardSmallText: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 10,
        alignSelf: "stretch",
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    blogCardSmallTitle: {
        color: COLORS.brandBlack,
        alignSelf: "stretch"
    }
});

export default styles;