import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, { FunctionComponent } from "react";
import { Globe, Users, Lock } from "lucide-react-native";

interface DropdownProps {
  iconType?: "globe" | "users" | "lock";
  value: string;
  onChangeText: (text: string) => void;
}

const DropdownPost: FunctionComponent<DropdownProps> = ({
  iconType = "globe",
  value = "Public",
  onChangeText = () => {},
}) => {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderRadius: 5,
      width: 200,
      borderColor: "#2656FF",
      // gap: 5,
      height: 40,
      // paddingHorizontal: 5,
      paddingVertical: 10,
      flex: 1,
      color: "#2656FF",
    },
    icon: {
      marginLeft: 5,
      marginRight: 10,
      color: "#2656FF",
    },
    picker: {
      flex: 1,
      color: "#2656FF",
    },
    placeholder: {
      fontSize: 8,
      color: "#2656FF",
      fontWeight: "400",
    },
  });

  const getIcon = () => {
    switch (iconType) {
      case "globe":
        return <Globe size={20} color="#2656FF" />;
      case "users":
        return <Users size={20} color="#2656FF" />;
      case "lock":
        return <Lock size={20} color="#2656FF" />;
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
        <Picker.Item
          label="accessLevel"
          value="accessLevel"
          style={styles.placeholder}
        />
        <Picker.Item label="Public" value="Public" />
        <Picker.Item label="Friends" value="Friends" />
        <Picker.Item label="Only me" value="Only me" />
      </Picker>
    </View>
  );
};

export default DropdownPost;
