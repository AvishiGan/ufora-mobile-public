import React, { FunctionComponent } from "react";
import { TextProps } from "./types";
import styled from "styled-components/native";

interface StyledTextProps {
  textStyles: any;
  fontColor?: string;
}

const StyledText = styled.Text<StyledTextProps>`
  font-family: Text;
  font-weight: 600;
  font-size: 16px;
  font-style: normal;
`;

const SemiBoldBig: FunctionComponent<
  TextProps & { fontColor?: string; style?: any }
> = (props) => {
  return (
    <StyledText textStyles={props.textStyles} fontColor={props.fontColor}>
      {props.children}
    </StyledText>
  );
};

export default SemiBoldBig;

// color: ${props => props.fontColor};
