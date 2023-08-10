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
      flexDirection: "row",
      alignItems: "center",
      // backgroundColor: "transparent",
      borderWidth: 1,
      borderRadius: 5,
      paddingVertical: 5,
      paddingHorizontal: 10,
      // width: 320,
      borderColor: "#2656FF",
      gap: 5,
    },
    icon: {
      marginRight: 8,
      marginLeft: 15,
    },
    picker: {
      flex: 1,
    },
    placeholder: {
      fontSize: 12,
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
