import React, { FunctionComponent } from 'react';
import {TextProps} from "./types";
import styled from "styled-components/native";

{/*weight-400*/}
const StyledText = styled.Text`
  font-family: RegularText; 
  font-size: 16px;
  //font-weight: 400
`;

const RegularText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children} </StyledText>
};

export default RegularText;