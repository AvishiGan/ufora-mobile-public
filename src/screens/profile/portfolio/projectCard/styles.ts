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
    },
    projectImage: {
        height: 150,
        alignSelf: 'stretch',
        borderRadius: 15,
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
});
