import React, { FunctionComponent } from 'react';
import {TextProps} from "./types";
import styled from "styled-components/native";

interface StyledTextProps {
  textStyles: any;
  fontColor?: string;
}

{/*weight-500 */}
const StyledText = styled.Text<StyledTextProps>`
    font-family: Text;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    color: ${(props) => props.fontColor || 'inherit'};

`;

const ButtonMedium: FunctionComponent<TextProps & { fontColor?: string }> = (props) => {
  return <StyledText textStyles={props.textStyles} fontColor={props.fontColor}>{props.children}</StyledText>;
};

export default ButtonMedium;
