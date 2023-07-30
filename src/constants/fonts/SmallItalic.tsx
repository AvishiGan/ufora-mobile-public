import React, { FunctionComponent } from 'react';
import {TextProps} from "./types";
import styled from "styled-components/native";

{/*weight-500 */}
const StyledText = styled.Text`
  font-family: Text;
  font-size: 12px;
  font-style: normal;
  font-weight: Italic;
  //line-height: 16px
`;

const SmallItalic: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children} </StyledText>
};

export default SmallItalic;