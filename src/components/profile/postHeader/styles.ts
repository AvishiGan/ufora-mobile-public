import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    postHeaderContainer: {
        display: 'flex',
        width: 350,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    profilePicNameUniTimeContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        flexDirection: 'row',
    },
    profileNameUniTimeContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
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
    moreAndCrossIconContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: 15,
        flexDirection: 'row',
    },
});