import React, { FunctionComponent } from 'react';
import {TextProps} from "./types";
import styled from "styled-components/native";

{/*weight-500 */}
const StyledText = styled.Text`
    font-family: Text;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    //line-height: normal;
`;

const ButtonMedium: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children} </StyledText>
};

export default ButtonMedium;
