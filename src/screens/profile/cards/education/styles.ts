import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    smallContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: 1000,
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
    }
  });