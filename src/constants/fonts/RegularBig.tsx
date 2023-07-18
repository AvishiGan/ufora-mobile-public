import React, { FunctionComponent } from 'react';
import {TextProps} from "./types";
import styled from "styled-components/native";

{/*weight-400*/}
const StyledText = styled.Text`
  font-family: Text; 
  font-weight: 400;
  font-style: normal;
  font-size: 16px
`;

const RegularBig: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children} </StyledText>
};

export default RegularBig;
