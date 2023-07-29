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
    timeAndGlobeIconContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        flexDirection: 'row',
    },
});