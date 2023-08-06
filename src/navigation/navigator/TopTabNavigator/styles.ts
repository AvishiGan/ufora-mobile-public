import { StyleSheet } from 'react-native';

const tabBarStyles = {
    tabBarLabelStyle: { fontSize: 14, textTransform: 'capitalize' },
    tabBarItemStyle: { flex: 1, marginBottom: '2%' },
    tabBarStyle: { backgroundColor: "white" },
    tabBarIndicatorStyle: { backgroundColor: "#FEFEFE" },
};
  
const customTabBarStyles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        height: 38,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        // backgroundColor: 'white',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#B8B8B8',
        // paddingLeft: '2%',
        // paddingRight: '2%',
        // marginTop: 25,
        // paddingHorizontal: 10,
    },
    tabItem: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#B8B8B8',
        borderRadius: 7,
    },
    activeTabItem: {
      backgroundColor: "#2656FF",
    },
    inactiveTabItem: {
      backgroundColor: 'white',
    },
    activeText: {
      color: 'white',
      fontSize: 14,
      textTransform: 'capitalize',
    },
    inactiveText: {
      color: '#B8B8B8',
      fontSize: 14,
      textTransform: 'capitalize',
    },
});
  
export { tabBarStyles, customTabBarStyles };
  