import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    singleProjectContainer: {
        display: 'flex',
        width: 404,
        padding: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 10,
        borderRadius: 15,
        backgroundColor: "#FEFEFE",
        // backgroundColor: "var(--brand-white, #FEFEFE)",
    },
    projectImage: {
        height: 150,
        alignSelf: 'stretch',
        borderRadius: 15,
        // background: url(<path-to-image>), lightgray 50% / cover no-repeat;
    },
    projectContentContainer: {
        display: 'flex',
        padding: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 10,
        alignSelf: 'stretch',
    },
    projectArticleContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 10,
        alignSelf: 'stretch',
    },
    projectTitle: {
        alignSelf: 'stretch',
        // color: "var(--brand-black, #111)",
        color: "#111",
        leadingTrim: 'both',
        textEdge: 'cap',
        fontFamily: "Poppins",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 40, /* 250% */
    },
    projectDescription: {
        alignSelf: 'stretch',
        // color: "var(--brand-black, #111)",
        color: "#111",
        leadingTrim: 'both',
        textEdge: 'cap',
        fontFamily: "Poppins",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: 15, /* 125% */
    },
});
