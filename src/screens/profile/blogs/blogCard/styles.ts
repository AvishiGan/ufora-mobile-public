import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    singleBlogContainer: {
        display: 'flex',
        width: 404,
        padding: 5,
        alignItems: 'center',
        gap: 10,
        borderRadius: 15,
        backgroundColor: "var(--brand-white, #FEFEFE)",
    },
    blogImage: {
        flex: 1, // Flex grow is set to 1
        flexShrink: 0, // Flex shrink is set to 0
        flexBasis: 0, // Flex basis is set to 0
        alignSelf: 'stretch',
        borderRadius: 15,
        // background: url(<path-to-image>), lightgray 50% / cover no-repeat,
    },
    blogContentContainer: {
        display: 'flex',
        width: 276,
        paddingVertical: 10,
        paddingHorizontal: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 23,
        flexShrink: 0,
    },
    /**
     * Blog content without profile header container 
     */
    blogArticleContainer:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 10,
        alignSelf: 'stretch',
    },
    blogTitle: {
        alignSelf: 'stretch',
        color: "var(--brand-black, #111)",
        leadingTrim: 'both',
        textEdge: 'cap',
        fontFamily: "Poppins",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 40, /* 250% */
    },
    blogDescription: {
        alignSelf: 'stretch',
        color: "var(--brand-black, #111)",
        leadingTrim: 'both',
        textEdge: 'cap',
        fontFamily: "Poppins",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: 15, /* 125% */
    },
    dateTimeContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderRadius: 5,
    },
    dateTime: {
        color: "var(--brand-grey, #4F4E4E)",
        leadingTrim: 'both',
        textEdge: 'cap',
        fontFamily: "Poppins",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: 24, /* 200% */
    },
    dotBetweenDateTime: {
        width: 5,
        height: 5,
        fill: "var(--brand-grey, #4F4E4E)",
    },
});
