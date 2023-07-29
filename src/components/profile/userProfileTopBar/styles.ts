import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerIconsContainer: {
        display: "flex",
        width: 350,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    backIconNameContainer: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        // flex: 1,
        // flexGrow: 0,
        // flexShrink: 0,
        flexDirection: "row",
    },
    chatSearchIconsContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        flexDirection: "row",
    },
});