import React, { FunctionComponent } from 'react';
import {TextProps} from "./types";
import styled from "styled-components/native";

{/*weight-600 */}
const StyledText = styled.Text`
    font-family: Text;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    //line-height: normal;
`;

const NameSmallSemibold: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children} </StyledText>
};

export default NameSmallSemibold;
