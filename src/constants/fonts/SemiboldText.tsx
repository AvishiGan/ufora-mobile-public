import React, { FunctionComponent } from 'react';
import {TextProps} from "./types";
import styled from "styled-components/native";

{/*weight-600 */}
const StyledText = styled.Text`
  font-family: Text;
  font-weight: 600;
`;

const SemiboldText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children} </StyledText>
};

export default SemiboldText;
