import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    iconAndTextContainer: {
        display: "flex",
        padding: 10,
        alignItems: "center",
        gap: 10,
        alignSelf: "stretch",
        borderRadius: 15,
        // background: "var(--brand-white, #FEFEFE)",
        background: "#FEFEFE",
        flexDirection: "row",
    },
    text: {
        // color: "var(--form-field-outline, #87929D)",
        color: "#87929D",
        leadingTrim: "both",
        textEdge: "cap",
        fontFamily: "Poppins",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "400",
        // lineHeight: "normal",
        lineHeight: 21,
    },
});