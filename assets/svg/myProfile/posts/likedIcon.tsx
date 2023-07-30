import React from "react";
import { Svg, Path } from "react-native-svg";

type LikeIconProps = {
  width: number;
  height: number;
  fillColor?: string; // Optional fill color for the SVG paths
};

const LikeIcon: React.FC<LikeIconProps> = ({
  width,
  height,
  fillColor = "#2656FF",
}) => (
  <Svg width={width} height={height} viewBox="0 0 21 20" fill="none">
    <Path
      d="M6.33332 8.33335V18.3334V8.33335ZM13 4.90002L12.1667 8.33335H17.025C17.2837 8.33335 17.5389 8.3936 17.7703 8.50931C18.0018 8.62502 18.2031 8.79303 18.3583 9.00002C18.5136 9.20701 18.6185 9.44731 18.6648 9.70188C18.7111 9.95645 18.6974 10.2183 18.625 10.4667L16.6833 17.1334C16.5823 17.4795 16.3718 17.7836 16.0833 18C15.7948 18.2164 15.4439 18.3334 15.0833 18.3334H3.83332C3.3913 18.3334 2.96737 18.1578 2.65481 17.8452C2.34225 17.5326 2.16666 17.1087 2.16666 16.6667V10C2.16666 9.55799 2.34225 9.13407 2.65481 8.82151C2.96737 8.50895 3.3913 8.33335 3.83332 8.33335H6.13332C6.44339 8.33319 6.74727 8.24653 7.01079 8.08312C7.2743 7.91971 7.48701 7.68603 7.62499 7.40835L10.5 1.66669C10.893 1.67155 11.2798 1.76516 11.6315 1.94052C11.9832 2.11587 12.2908 2.36844 12.5312 2.67936C12.7716 2.99027 12.9386 3.35149 13.0198 3.73602C13.101 4.12056 13.0942 4.51847 13 4.90002Z"
      fill={fillColor} // Default fill color -> "#2656FF"
    />
    <Path
      d="M6.33332 8.33335V18.3334M13 4.90002L12.1667 8.33335H17.025C17.2837 8.33335 17.5389 8.3936 17.7703 8.50931C18.0018 8.62502 18.2031 8.79303 18.3583 9.00002C18.5136 9.20701 18.6185 9.44731 18.6648 9.70188C18.7111 9.95645 18.6974 10.2183 18.625 10.4667L16.6833 17.1334C16.5824 17.4795 16.3718 17.7837 16.0833 18C15.7948 18.2164 15.4439 18.3334 15.0833 18.3334H3.83332C3.3913 18.3334 2.96737 18.1578 2.65481 17.8452C2.34225 17.5326 2.16666 17.1087 2.16666 16.6667V10C2.16666 9.55799 2.34225 9.13407 2.65481 8.82151C2.96737 8.50895 3.3913 8.33335 3.83332 8.33335H6.13332C6.44339 8.33319 6.74727 8.24653 7.01079 8.08312C7.2743 7.91971 7.48701 7.68603 7.62499 7.40835L10.5 1.66669C10.893 1.67155 11.2798 1.76516 11.6315 1.94052C11.9832 2.11587 12.2908 2.36844 12.5312 2.67936C12.7716 2.99027 12.9386 3.35149 13.0198 3.73602C13.101 4.12056 13.0942 4.51847 13 4.90002Z"
      stroke="#FEFEFE"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default LikeIcon;
