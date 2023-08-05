import React, { FunctionComponent } from 'react';
import { TextProps } from './types';
import styled from 'styled-components/native';

interface StyledTextProps {
  textStyles: any;
  fontColor?: string;
}

const StyledText = styled.Text<StyledTextProps>`
  font-family: Text;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  color: ${(props) => props.fontColor || 'inherit'};
`;

const RegularSmall: FunctionComponent<TextProps & { fontColor?: string }> = (props) => {
  return <StyledText textStyles={props.textStyles} fontColor={props.fontColor}>{props.children}</StyledText>;
};

export default RegularSmall;