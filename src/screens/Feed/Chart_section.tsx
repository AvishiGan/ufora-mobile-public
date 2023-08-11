import { View, Image } from "react-native";
import React from "react";

const Chart_section = () => {
  return (
    <Image
      source={require('../../../assets/images/chart.png')} // Update the path to your image
      style={{ height: 112, width: '100%', marginTop: 2, marginBottom:15 }}
    />
 
  );
};

export default Chart_section;
