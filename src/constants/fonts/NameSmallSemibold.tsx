import React, { FunctionComponent } from 'react';
import {TextProps} from "./types";
import styled from "styled-components/native";

interface StyledTextProps {
  textStyles: any;
  fontColor?: string;
}

{/*weight-600 */}
const StyledText = styled.Text`
    font-family: Text;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    color: ${(props) => props.fontColor || 'inherit'};

`;

const NameSmallSemibold:  FunctionComponent<TextProps & { fontColor?: string }> = (props) => {
  return <StyledText textStyles={props.textStyles} fontColor={props.fontColor}>{props.children}</StyledText>;
};


export default NameSmallSemibold;
