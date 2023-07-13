import { StyleSheet } from "react-native";
import { Paragraph } from "react-native-paper";

export const styles = StyleSheet.create({
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
    paragraph: {
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