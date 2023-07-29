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
        flexDirection: 'row',
    },
    blogImage: {
        flex: 1,
        flexShrink: 0,
        flexBasis: 0,
        alignSelf: 'stretch',
        borderRadius: 15,
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
    dateTimeContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderRadius: 5,
        flexDirection: 'row',
    },
});
