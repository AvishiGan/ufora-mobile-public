import React, { FunctionComponent } from 'react';
import {TextProps} from "./types";
import styled from "styled-components/native";

{/*weight-400*/}
const StyledText = styled.Text`
    font-family: Text; 
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
`;

const RegularNormal: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children} </StyledText>
};

export default RegularNormal;
