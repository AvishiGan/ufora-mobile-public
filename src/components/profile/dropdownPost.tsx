import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, { FunctionComponent, useState } from "react";
import { Globe, Users, Lock } from "lucide-react-native";

interface DropdownProps {
  iconType?: "globe" | "users" | "lock";
  value: string;
  onChangeText: (text: string) => void;
}

const DropdownPost: FunctionComponent<DropdownProps> = ({
  iconType,
  value,
  onChangeText,
}) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "transparent",
      borderWidth: 1,
      borderRadius: 15,
      marginBottom: 2,
      width: 320,
      borderColor: "#87929D",
    },
    icon: {
      marginRight: 8,
      marginLeft: 15,
    },
    picker: {
      flex: 1,
    },
    placeholder: {
      fontSize: 16,
      color: "#B8B8B8",
      fontWeight: "400",
    },
  });

  // Function to get the appropriate icon based on the iconType prop
  const getIcon = () => {
    switch (iconType) {
      case "globe":
        return <Globe size={20} color="#000" />;
      case "users":
        return <Users size={20} color="#000" />;
      case "lock":
        return <Lock size={20} color="#000" />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {iconType && <View style={styles.icon}>{getIcon()}</View>}
      <Picker
        selectedValue={value}
        onValueChange={(itemValue, itemIndex) => onChangeText(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="University" value="" style={styles.placeholder} />
        <Picker.Item
          label="University of Colombo"
          value="University of Colombo"
        />
        <Picker.Item
          label="University of Peradeniya"
          value="University of Peradeniya"
        />
        <Picker.Item
          label="University of Moratuwa"
          value="University of Moratuwa"
        />
        {/* Add other items as needed */}
      </Picker>
    </View>
  );
};

export default DropdownPost;
