import {ReactNode} from "react";
import {StyleProp, TextStyle} from "react-native";

export interface TextProps{
    className: string;
    textStyles?: StyleProp<TextStyle>;
    children: ReactNode;
}