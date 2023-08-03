import React, { useState } from "react";
import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";
import { Globe, Users, Lock } from "lucide-react-native";

type LocalDataItem = {
  value: number;
  label: string;
  icon: React.ReactNode;
};

const local_data: LocalDataItem[] = [
  {
    value: 1,
    label: "Public",
    icon: <Globe />,
  },
  {
    value: 2,
    label: "Friends",
    icon: <Users />,
  },
  {
    value: 3,
    label: "Only me",
    icon: <Lock />,
  },
];

const SelectCountryScreen: React.FC = () => {
  const [country, setCountry] = useState("1");

  return (
    <SelectCountry
      style={styles.dropdown}
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      iconStyle={styles.iconStyle}
      maxHeight={200}
      value={country}
      data={local_data}
      valueField="value"
      labelField="label"
      iconField="icon"
      placeholder="Select country"
      searchPlaceholder="Search..."
      onChange={(e: SelectCountryData) => {
        setCountry(e.value);
      }}
    />
  );
};

export default SelectCountryScreen;

type Styles = {
  dropdown: ViewStyle;
  placeholderStyle: TextStyle;
  selectedTextStyle: TextStyle;
  iconStyle: ImageStyle;
};

const styles = StyleSheet.create<Styles>({
  dropdown: {
    margin: 16,
    height: 50,
    width: 150,
    backgroundColor: "#EEEEEE",
    borderRadius: 22,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
