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
        width: 405,
        // width: 385, // CHANGE THIS! MANUALLY ADDED
        paddingVertical: 20,
        paddingHorizontal: 10,
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 10,
        borderRadius: 15,
        backgroundColor: '#FEFEFE',
        flexShrink: 0,
    },
    // introContainer: {
    //   width: 385,
    // },
    allDetailsContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 50,
    },
    iconAndDetailsContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        alignSelf: 'stretch',
        flexDirection: 'row',
      },
      listItem: {
        marginLeft: 10,
      },
      /**
       * Include in education, clubs and societies, achievements
       */
      detailsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 5,
        flex: 1,
        flexGrow: 0,
        flexShrink: 0,
      },
      individualDetailContainer: {
          // display: -webkit-box;
          display: 'flex',
          webkitBoxOrient: 'vertical',
          webkitLineClamp: 1,
          alignSelf: 'stretch',
      },
      // university -> firstDetail
      // Each detail container first detail
      mainDetail: {
          overflow: 'hidden',
          webkitBoxOrient: 'vertical',
          webkitLineClamp: 1,
          // color: 'var(--brand-black, #111)',
          color: '#111',
          leadingTrim: 'both',    
          textEdge: 'cap',
          textOverflow: 'ellipsis',
          fontFamily: 'Poppins',
          fontSize: 14,
          fontStyle: 'normal',
          fontWeight: "500",
          // fontWeight: 'bold',
          lineHeight: 16, /* 114.286% */
      },
      infoContainer: {
        marginTop: 10, // Add margin to create a gap between each set of info
      },
      basicInfoContainer: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
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
      // border: 1px solid var(--placeholder-colour, #B8B8B8);
    },
    /*****************************************************Basic Info*************************************************** */
    singleBasicInfoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      alignSelf: 'stretch',
      flexDirection: 'row',
      marginBottom: 10,
      paddingLeft: 15,
    },
    basicInfoIconContainer: {
      width: 30,
      height: 30,
    },
});




