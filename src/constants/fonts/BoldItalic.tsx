import React, { FunctionComponent } from 'react';
import {TextProps} from "./types";
import styled from "styled-components/native";

{/*weight-700 */}
const StyledText = styled.Text`
  font-family: ItalicText;
  font-weight: 700
`;

const BoldItalicText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children} </StyledText>
};

export default BoldItalicText;