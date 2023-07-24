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
        marginRight: SIZES.marginSide,
        marginLeft: SIZES.marginSide,
        marginTop: 0,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: COLORS.placeHolder,
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 12
    },
    buttonContainer: {
        flexDirection: "row",
        // justifyContent: "center",
        alignItems: "center",
        marginRight: SIZES.marginSide,
        marginLeft: SIZES.marginSide,
        gap: 15,
        height: 70,
        width: 404
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
    },
});

export default styles;