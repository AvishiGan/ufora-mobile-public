import { StyleSheet } from "react-native";

export const cstyles = StyleSheet.create({
    container: {
        display: 'flex',
        width: 405,
        paddingVertical: 20,
        paddingHorizontal: 10,
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 10,
        borderRadius: 15,
        backgroundColor: '#FEFEFE'
    },
    title: {
        color: '#111',
        leadingTrim: 'both',
        textEdge: 'cap',
        // fontFamily: 'Poppins',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 24,
    },
    normalText: {
        width: 385,
        // color: var(--brand-black, #111);
        color: '#111',
        leadingTrim: 'both',
        textEdge: 'cap',
        // fontFamily: 'Poppins',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
        // line-height: 16px; /* 114.286% */
        lineHeight: 16,
    },
    smallContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        alignSelf: 'stretch',
      },
      listItem: {
        marginLeft: 50,
      },
      textContainer: {
          // display: -webkit-box;
          display: 'flex',
          webkitBoxOrient: 'vertical',
          webkitLineClamp: 1,
          alignSelf: 'stretch',
      },
      text: {
          overflow: 'hidden',
          color: 'var(--brand-black, #111)',
          leadingTrim: 'both',
          textEdge: 'cap',
          textOverflow: 'ellipsis',
          fontFamily: 'Poppins',
          fontSize: 14,
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 16, /* 114.286% */
      },
      university: {
          overflow: 'hidden',
          webkitBoxOrient: 'vertical',
          webkitLineClamp: 1,
          color: 'var(--brand-black, #111)',
          leadingTrim: 'both',    
          textEdge: 'cap',
          textOverflow: 'ellipsis',
          fontFamily: 'Poppins',
          fontSize: 14,
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: 16, /* 114.286% */
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
    }
});