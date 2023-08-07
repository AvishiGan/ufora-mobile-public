import React, { FunctionComponent } from 'react'
import { GestureResponderEvent } from 'react-native';
import { Svg, Path } from "react-native-svg";

interface AppleProps {
    width?: number;
    height?: number;

}

const Apple: FunctionComponent<AppleProps> = ({width= 27, height=31}) => {
  return (
    <Svg
        width={width}
        height={height}
        viewBox="0 0 27 31"
        fill="none"
        // xmlns="http://www.w3.org/2000/svg"
    >

    <Path 
        d="M21.9215 28.9998C20.2884 30.583 18.5053 30.333 16.7888 29.5831C14.9724 28.8165 13.3059 28.7832 11.3895 29.5831C8.98977 30.6163 7.72326 30.3163 6.2901 28.9998C-1.84223 20.6175 -0.64238 7.85243 8.58982 7.38582C10.8395 7.50247 12.406 8.619 13.7225 8.71899C15.6889 8.31904 17.572 7.16918 19.6718 7.31916C22.1881 7.51913 24.0879 8.51901 25.3378 10.3188C20.1384 13.4351 21.3716 20.2842 26.1377 22.2007C25.1878 24.7004 23.9546 27.1834 21.9048 29.0165L21.9215 28.9998ZM13.5559 7.28583C13.3059 3.56962 16.3222 0.503332 19.7884 0.203369C20.2717 4.50284 15.8889 7.70245 13.5559 7.28583Z" 
        fill="#111111"
    />
    </Svg>
  )
}

export default Apple