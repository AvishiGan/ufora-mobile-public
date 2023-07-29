import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    authorBioContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 13,
        alignSelf: 'stretch',
        flexDirection: 'row',
    },
    profileNameUniContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 2,
        // flex: 1,
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
    verifiedIcon: {
        display: 'flex',
        width: 12,
        height: 12,
        padding: 4.444,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2.222,
        borderRadius: 17.111,
        background: 'var(--brand-blue, #2656FF)',
    },
    uforaIcon: {
        display: 'flex',
        width: 12,
        height: 12,
        padding: 4.444,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2.222,
        borderRadius: 17.111,
        background: 'var(--brand-black, #111)',
    },
    profilePic: {
        width: 30,
        height: 30,
        borderRadius: 30,
    },
});

