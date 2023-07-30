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
    featuredCardContainer: {
        flex: 1,
    },
    featuredCard: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        borderRadius: 15,
        overflow: "hidden",
        // width: 385,
        // height: 200,
        backgroundColor: 'rgba(211, 211, 211, 0.5)' 
    },
    featuredImage: {
        resizeMode: "cover",
    },
    blogDetails: {
        flex: 1,
        flexirection: "column",
        justifyContent: 'center',
        alignItems: "flex-start",
        //marginTop: 101
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
        gap: 5
    }
});

export default styles;