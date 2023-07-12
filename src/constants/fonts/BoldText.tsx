import React, { FunctionComponent } from 'react';
import {TextProps} from "./types";
import styled from "styled-components/native";

{/*weight-700 */}
const StyledText = styled.Text`
  font-family: Text;
  font-weight: 700;
  //font-size: 36px
`;

const BoldText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children} </StyledText>
};

export default BoldText;
