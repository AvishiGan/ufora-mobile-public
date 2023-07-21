import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    userDetailsContainer: {
        display: "flex",
        width: 373,
        justifyContent: "space-between",
        alignItems: "center",
    },
    profilepicNameUniContainer: {
        display: "flex",
        alignItems: "center",
        gap: 15,
    },
    nameUniContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 5,
    },
    profileNameAndTwoIconsContainer: {
        display: "flex",
        alignItems: "center",
        gap: 5,
    },
    verificationIconAndLogoutContainer: {
        display: "flex",
        alignItems: "flex-start",
        gap: 5,
    },
    verificationIcon: {
        display: "flex",
        width: 16,
        height: 16,
        padding: 4.444,
        justifyContent: "center",
        alignItems: "center",
        gap: 2.222,
    },
    uforaLogo: {
        display: "flex",
        width: 16,
        height: 16,
        padding: 4.444,
        justifyContent: "center",
        alignItems: "center",
        gap: 2.222,
        borderRadius: 17.111,
        backgroundColor: "var(--brand-black, #111)",
    },
    profilePic: {
        width: 44,
        height: 44,
        borderRadius: 44,
        // background: url(<path-to-image>), lightgray 50% / cover no-repeat;
    },
    profileName: {
        color: "var(--brand-black, #111)",
        leadingTrim: "both",
        textEdge: "cap",
        fontFamily: "Poppins",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "600",
        // line-height: normal;
        lineHeight: 24,
    },
    uniName: {
        color: "var(--brand-grey, #4F4E4E)",
        leadingTrim: "both",
        textEdge: "cap",
        fontFamily: "Poppins",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "400",
        // line-height: normal;
        lineHeight: 24,
    },
    timeAndGlobeIconContainer: {
        display: "flex",
        alignItems: "center",
        gap: 5,
    },
    time: {
        color: "var(--brand-grey, #4F4E4E)",
        leadingTrim: "both",
        textEdge: "cap",
        fontFamily: "Poppins",
        fontSize: 10,
        fontStyle: "normal",
        fontWeight: "500",
        // line-height: normal;
        lineHeight: 24,
    },
    globeIcon: {
        width: 10,
        height: 10,
    },
    dotIcon: {
        width: 2,
        height: 2,
    },
    moreIcon: {
        width: 24,
        height: 24,
        flexShrink: 0,
    },
});



