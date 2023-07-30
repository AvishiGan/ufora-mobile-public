import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    authorBioContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        alignSelf: 'stretch',
        flexDirection: 'row',
    },
    profileNameUniContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        flexGrow: 0,
        flexShrink: 0,
    },
    profileNameTwoIconsContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        flexDirection: 'row',
    },
    profilePic: {
        width: 30,
        height: 30,
        borderRadius: 30,
    },
});

