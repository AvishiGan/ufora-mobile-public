import React from "react";
// import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../../constants";
import { Search, FileText, PlusCircle } from "lucide-react-native";
import { RegularBig, SemiboldBig } from "../../constants/fonts";
import styles from "./blogStyles.styles";

// Use satate for search
// const [searchTerm, setSearchTerm] = useState();

interface UpperBodyProps {
  navigation: any;
  route: string; // Pass the current route as a prop
}

const UpperBody: React.FC<UpperBodyProps> = ({ navigation, route }) => {
  const handleMyBlog = () => {
    navigation.navigate("UserProfileScreen"); // Navigate to the 'AddBlog' screen when 'Add Blog' is clicked
  };

  const handleAddBlog = () => {
    navigation.navigate("AddBlog"); // Navigate to the 'AddBlog' screen when 'Add Blog' is clicked
  };

  const isBlogCentre = route === "BlogCentre";

  return (
    <View style={styles.container}>
      <View style={styles.wrapContainer}>
        <View style={styles.searchInput}>
          <Search color={COLORS.placeHolder} size={SIZES.iconSize} />
          {/* <RegularBig> */}
          <TextInput
            placeholder={isBlogCentre ? "Find blogs..." : "Find projects..."}
            placeholderTextColor={COLORS.placeHolder}
            value=""
          />
          {/* </RegularBig> */}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonCard} onPress={handleMyBlog}>
            <FileText color={COLORS.brandGrey} size={40} />
            <SemiboldBig>
              <Text>{isBlogCentre ? "My Articles" : "My Projects"}</Text>
            </SemiboldBig>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCard} onPress={handleAddBlog}>
            <PlusCircle color={COLORS.brandGrey} size={40} />
            <SemiboldBig>
              <Text>{isBlogCentre ? "Add Blog" : "Add Project"}</Text>
            </SemiboldBig>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UpperBody;
