import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    postHeaderContainer: {
        display: 'flex',
        width: 373,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    profilePicNameUniTimeContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: 13,
        flexDirection: 'row',
    },
    profileNameUniTimeContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 5,
    },
    profileNameTwoIconsContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        flexDirection: 'row',
    },
    profilePic:{
        width: 44,
        height: 44,
        borderRadius: 44,
    },
    verifiedAndUforaIconContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 5,
        flexDirection: 'row',
    },
    verifiedIcon: {
        display: 'flex',
        width: 16,
        height: 16,
        padding: 4.444,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2.222,
        borderRadius: 17.111,
        background: 'var(--brand-blue, #2656FF)',
    },
    uforaIcon: {
        display: 'flex',
        width: 16,
        height: 16,
        padding: 4.444,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2.222,
        borderRadius: 17.111,
        background: 'var(--brand-black, #111)',
    },
    timeAndGlobeIconContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        flexDirection: 'row',
    },
    dotIcon: {
        width: 2,
        height: 2,
        fill: 'var(--form-field-outline, #87929D)',
    },
    globeIcon: {
        width: 10,
        height: 10,
    },
    moreIcon: {
        width: 24,
        height: 24,
        flexShrink: 0,
    },
});