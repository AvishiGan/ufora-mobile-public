import React, { FunctionComponent } from 'react';
import {TextProps} from "./types";
import styled from "styled-components/native";

{/*weight-400 */}
const StyledText = styled.Text`
  font-family: ItalicText;
  font-weight: 400
`;

const RegularItalicText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children} </StyledText>
};

export default RegularItalicText;