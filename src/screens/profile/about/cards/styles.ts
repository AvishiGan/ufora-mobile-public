import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    allCardsContainer: {
      // display: "inline-flex",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 15,
    },
    // container -> individualCardContainer
    individualCardContainer: {
        display: 'flex',
        // width: 405,
        width: 385, // CHANGE THIS! MANUALLY ADDED
        paddingVertical: 20,
        paddingHorizontal: 10,
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 10,
        borderRadius: 15,
        backgroundColor: '#FEFEFE',
        flexShrink: 0,
    },
    // title -> cardTitle
    cardTitle: {
        color: '#111',
        leadingTrim: 'both',
        textEdge: 'cap',
        // fontFamily: 'Poppins',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 24,
    },
    // introContainer: {
    //   width: 385,
    // },
    introText: {
        // color: var(--brand-black, #111);
        color: '#111',
        leadingTrim: 'both',
        textEdge: 'cap',
        // fontFamily: 'Poppins',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 16, /* 114.286% */
    },
    // normalText -> cardTBodText
    // cardBodyText: {
    //     width: 385,
    //     // color: var(--brand-black, #111);
    //     color: '#111',
    //     leadingTrim: 'both',
    //     textEdge: 'cap',
    //     // fontFamily: 'Poppins',
    //     fontSize: 14,
    //     fontStyle: 'normal',
    //     fontWeight: '400',
    //     // line-height: 16px; /* 114.286% */
    //     lineHeight: 16,
    // },
    // smallContainer -> iconAndDetailsContainer
    iconAndDetailsContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        alignSelf: 'stretch',
      },
      listItem: {
        marginLeft: 50,
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
      // textContainer -> eachDetailContainer
      individualDetailContainer: {
          // display: -webkit-box;
          display: 'flex',
          webkitBoxOrient: 'vertical',
          webkitLineClamp: 1,
          alignSelf: 'stretch',
      },
      // text: {
      //     overflow: 'hidden',
      //     color: 'var(--brand-black, #111)',
      //     leadingTrim: 'both',
      //     textEdge: 'cap',
      //     textOverflow: 'ellipsis',
      //     fontFamily: 'Poppins',
      //     fontSize: 14,
      //     fontStyle: 'normal',
      //     fontWeight: 400,
      //     lineHeight: 16, /* 114.286% */
      // },
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
      // This is only for the university text
      italicDetail: {
        overflow: 'hidden',
        // color: 'var(--brand-black, #111)',
        color: '#111',
        leadingTrim: 'both',
        textEdge: 'cap',
        textOverflow: 'ellipsis',
        fontFamily: 'Poppins',
        fontSize: 12,
        fontStyle: 'italic',
        fontWeight: "400",
        lineHeight: 16, /* 133.333% */
      },
      // This is only for the light colored text
      lightDetail: {
        // color: 'var(--form-field-outline, #87929D)',
        color: '#87929D',
        leadingTrim: 'both',
        textEdge: 'cap',
        fontFamily: 'Poppins',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: "400",
        lineHeight: 24, /* 200% */
      },
      infoContainer: {
        marginTop: 10, // Add margin to create a gap between each set of info
      },
      boldText: {
        fontWeight: 'bold',
      },
      italicText: {
        fontStyle: 'italic',
      },
      lightText: {
        color: "#87929D",
      },
      seeMore: {
        // color: var(--brand-blue, #2656FF);
        color: '#2656FF',
        leadingTrim: 'both',
        textEdge: 'cap',
        // fontFamily: 'Poppins',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 16,
    },
    basicInfoIconContainer:{
      width: 30,
      height: 30,
    },
});

// width: 30px;
// height: 30px;

// Missed style
// Italic detail
// Layout
// display: flex;
// justify-content: center;
// align-items: center;
// gap: 10px;