import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    allSlidesContainer: {
        width: 405,
        height: 30,
        flexShrink: 0,
    },
    individualSlideContainer: {
        display: "flex",
        width: 130,
        paddingVertical: 10,
        paddingHorizontal: 5,
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        flexShrink: 0,
        borderRadius: 7,
        animationTimingFunction: "ease-out",
        animationDuration: 300,
    },
    individualSlideText: {
        color: "#FEFEFE",
        leadingTrim: 'both',
        textEdge: 'cap',
        fontFamily: 'Poppins',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 20,        
    },
});

// // On click
// // Navigate to: "Profile About";
// // Animate: Smart animate;
// animation-timing-function: ease-out;
// animation-duration: 300ms;
