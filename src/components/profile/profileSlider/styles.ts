import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    allSlidesContainer: {
        flexShrink: 0,
        display: "flex",
        flexDirection: "row",
    },
    individualSlideContainer: {
        display: "flex",
        width: 90,
        paddingVertical: 10,
        paddingHorizontal: 5,
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        flexShrink: 0,
        borderRadius: 7,
        backgroundColor: "#2656FF",
    },
    activeSlide: {
        backgroundColor: "#FF2656",
    },
});
