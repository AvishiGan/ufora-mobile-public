import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    // Back icon, profile name, search icon, chat icon container
    headerIconsContainer: {
        display: "flex",
        width: 404,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    backIconNameContainer: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        flex: 1,
        flexGrow: 0,
        flexShrink: 0,
        flexDirection: "row",
    },
    profileName: {
        // color: "var(--brand-black, #111)",
        color: "#111",
        leadingTrim: "both",
        textEdge: "cap",
        fontFamily: "Poppins",
        fontSize: 25,
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: 37.5,
    },
    chatSearchIconsContainer: {
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