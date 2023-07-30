import React, { FunctionComponent } from 'react';
import {TextProps} from "./types";
import styled from "styled-components/native";

{/*weight-700 */}
const StyledText = styled.Text`
    font-family: Text;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    //line-height: normal;
`;

const CardHeadingBold: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children} </StyledText>
};

export default CardHeadingBold;
