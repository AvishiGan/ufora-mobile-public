import React from "react";
import { Svg, Path } from "react-native-svg";

interface SuccessLogoProps {
    width?: number;
    height?: number;
}

const SuccessLogo: React.FC<SuccessLogoProps> = ({ width = 150, height = 150 }) => {
    return (
        <Svg 
            width={width}
            height={height}
            viewBox="0 0 143 143"
            fill="none"
        >
            <Path 
                d="M137.5 69.2501V75.0001C137.492 88.4778 133.128 101.592 125.058 112.387C116.989 123.181 105.646 131.078 92.721 134.9C79.7964 138.721 65.9829 138.262 53.3404 133.591C40.698 128.921 29.9041 120.288 22.5685 108.982C15.2329 97.6753 11.7487 84.3005 12.6355 70.8521C13.5223 57.4037 18.7325 44.6022 27.4892 34.3568C36.246 24.1115 48.0799 16.9713 61.2262 14.001C74.3725 11.0308 88.1267 12.3897 100.438 17.8751"
                stroke="#2656FF" // Use stroke for outline color
                strokeWidth="5" // Set the stroke width
                strokeLinecap="round" // Set stroke linecap
                strokeLinejoin="round" // Set stroke linejoin
            />
            <Path 
                d="M137.5 25L75 87.5625L56.25 68.8125"
                stroke="#2656FF" // Use stroke for outline color
                strokeWidth="5" // Set the stroke width
                strokeLinecap="round" // Set stroke linecap
                strokeLinejoin="round" // Set stroke linejoin
            />
        </Svg>
    );
};


export default SuccessLogo;