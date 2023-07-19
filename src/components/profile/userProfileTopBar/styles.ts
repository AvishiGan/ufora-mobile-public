import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    topSectionContainer: {
        display: "flex",
        width: 404,
        justifyContent: "space-between",
        alignItems: "center",
    },
    nameBackContainer: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        // flex: 1 0 0,
        flex: 1,
    },
    name: {
        color: "var(--brand-black, #111)",
        leadingTrim: "both",
        textEdge: "cap",
        fontFamily: "Poppins",
        fontSize: 25,
        fontStyle: "normal",
        fontWeight: "600",
        // lineHeight: 150%, /* 37.5px */
        lineHeight: 37.5,
    },
    chatSearchContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },
    searchAndChatIconsContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },
    searchOrChatIcon: {
        width: 24,
        height: 24,
    },
    backButton: {
        width: 6,
        height: 12,
    },
});