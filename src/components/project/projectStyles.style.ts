import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const projectStyles = StyleSheet.create({
    projectContainer: {
        display: "flex",
        //width: 404,
        alignItems: "flex-start",
        alignContent: "flex-start",
        gap: 14,
        flexWrap: "wrap",
        marginHorizontal: SIZES.marginSide
    },
    projectCardLarge: {
        display: "flex",
        //width: 404,
        padding: 5,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 10,
        flexShrink: 0,
        borderRadius: 15,
        backgroundColor: COLORS.brandWhite,
    },
    projectCardLargeImage: {
        height: 150,
        alignSelf: "stretch",
        borderRadius: 15,
        resizeMode: "cover",
        backgroundColor: COLORS.lightGrayHalf,
    },
    projectCardLargeText: {
        display: "flex",
        padding: 5,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 10,
        alignSelf: "stretch"
    },
    projectCardSmallImage: {
        resizeMode: "cover",
        backgroundColor: COLORS.lightGrayHalf,
        borderRadius: 15,
        height: 73,
        //width: 185,
        alignSelf: "stretch",
    },
    projectCardSmallText: {
        display: "flex",
        padding: 5,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 10,
        alignSelf: "stretch",
    },
}) 

export default projectStyles;