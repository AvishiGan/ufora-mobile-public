import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    allCardsContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 15,
    },
    individualCardContainer: {
        display: 'flex',
        // width: 405,
        width: 385, // CHANGE THIS! MANUALLY ADDED
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 10,
        borderRadius: 15,
        backgroundColor: '#FEFEFE',
        flexShrink: 0,
    },
    allDetailsContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 50,
    },
    iconAndDetailsContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        alignSelf: 'stretch',
        flexDirection: 'row',
        marginBottom: 10,
        paddingLeft: 0,
      },
      /**
       * Include in education, clubs and societies, achievements
       */
      detailsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
      },
      individualDetailContainer: {
          display: 'flex',
          webkitBoxOrient: 'vertical',
          webkitLineClamp: 1,
          alignSelf: 'stretch',
      },
    imageContainer: {
      width: 40,  
      height: 40,
      borderRadius: 40, 
      borderWidth: 1,
      borderColor: '#B8B8B8',
      overflow: 'hidden',
      borderStyle: 'solid',
      resizeMode: 'cover',
    },
    /******************************************************Badges****************************************************** */
    allBadgesContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      alignSelf: 'stretch',
      flexDirection: 'row',
    },
    singleBadgeContainer: {
      width: 40,
      height: 40,
      borderRadius: 40,
      borderWidth: 1,
      borderColor: '#B8B8B8',
      overflow: 'hidden',
      borderStyle: 'solid',
    },
    /*****************************************************Basic Info*************************************************** */
    singleBasicInfoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      alignSelf: 'stretch',
      flexDirection: 'row',
      marginBottom: 10,
    },
    basicInfoIconContainer: {
      width: 30,
      height: 30,
    },
    seeMore: {
      color: '#2656FF',
  },
  contentWithGap: {
    paddingVertical: 10,
  },
});