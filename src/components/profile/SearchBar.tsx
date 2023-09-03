import React from "react";
import { View, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./styles";
import { COLORS, RegularBig } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { Search } from "lucide-react-native";

type PageTitleBarProps = {
  searchContext: string;
  onChangeText?: (text: string) => void;
  onSearch?: () => void;
};

const SearchBar: React.FC<PageTitleBarProps> = ({
  searchContext,
  onChangeText,
  onSearch,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchBarContainer}>
      <TouchableOpacity onPress={onSearch} style={styles.searchIcon}>
        <Search size={24} color={COLORS.placeHolder} />
      </TouchableOpacity>
      {/* <RegularBig fontColor={COLORS.placeHolder}>{searchContext}</RegularBig> */}
      <TextInput
        style={styles.searchInput}
        placeholder={searchContext}
        placeholderTextColor={COLORS.placeHolder}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchBar;
