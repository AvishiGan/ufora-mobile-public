import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const menuStyles = StyleSheet.create({
    menuContainer: {
        //display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 25,
        marginHorizontal: SIZES.marginSide,
    },
    myProfiles: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 15,
        marginTop: 0
    },
    shortcutsWrap: {
        display: "flex",
        //width: 404,
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 15
    },
    shortcuts: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 10,
    },
    shortcutRow: {
        display: "flex",
        //width: 405,
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 15,
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 10,
        backgroundColor: COLORS.brandWhite,
        borderRadius: 15
    },
    innerRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 15,
        alignSelf: "stretch"
    },
    innerRowWrap: {
        display: "flex",
        flexDirection: "row",
        //width: 115
        alignItems: "center",
        gap: 5
    }
});

export default menuStyles;