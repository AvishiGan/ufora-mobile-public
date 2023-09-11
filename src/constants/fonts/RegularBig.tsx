import React, { FunctionComponent } from "react";
import { TextProps } from "./types";
import styled from "styled-components/native";

interface StyledTextProps {
  textStyles: any;
  fontColor?: string;
}

const StyledText = styled.Text<StyledTextProps>`
font-family: Text; 
font-weight: 400;
font-style: normal;
font-size: 16px
  color: ${(props: { fontColor: any }) => props.fontColor || "inherit"};
`;

const RegularBig: FunctionComponent<TextProps & { fontColor?: string }> = (
  props
) => {
  return (
    <StyledText textStyles={props.textStyles} fontColor={props.fontColor}>
      {props.children}
    </StyledText>
  );
};

export default RegularBig;
