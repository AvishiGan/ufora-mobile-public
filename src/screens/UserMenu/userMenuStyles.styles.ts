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
    profileCardContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 10
    },
    profileCard: {
        display: "flex",
        flexDirection: "row",
        //width: 404,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        backgroundColor: COLORS.brandWhite,
        borderRadius: 15,
        borderWidth: 0.4,
        borderStyle: "solid",
        borderColor: COLORS.formFieldOutline
    },
    personDetails: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        flex: 1,
        alignSelf: "stretch"
    },
    profilePicture: {
        height: 40,
        width: 40,
        borderRadius: 40,
        resizeMode: "cover",
        backgroundColor: COLORS.lightGrayHalf
    },
    personName:  {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 10
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
    },
    settings: {
        display: "flex",
        //width: 404,
        padding: 10,
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 10,
        borderRadius: 15,
        backgroundColor: COLORS.brandWhite
    },
    titleContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 15,
    },
    titleContainer2: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch"
    },
    bodyContainer: {
        display: "flex",
        flexDirection: "row",
        paddingVertical: 5,
        paddingHorizontal: 0,
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch",
    },   
    searchTextContainer: {
        marginTop: 10,
        display: "flex",
        flexDirection: "column",
        marginHorizontal: SIZES.marginSide
    },
    historyNew: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 5
    },
    searchResult: {
        display: "flex",
        flexDirection: "row",
        // width: 404,
        paddingVertical: 5,
        paddingHorizontal: 10,
        //justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    dropdownStyle: {
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: "center",
        gap: 5,
        borderRadius: 5
    },

});

export default menuStyles;