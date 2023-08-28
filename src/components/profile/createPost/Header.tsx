import React from "react";
import { View, Image } from "react-native";
import { styles } from "../styles";
import { UforaIcon, VerifiedIcon } from "../../../../assets/svg";
import SemiBoldBig from "../../../constants/fonts/SemiboldBig";
import DropdownPost from "../../../components/profile/DropdownPost";

interface CreatePostHeaderData {
  profilePic?: any;
  profileName: string;
}

interface CreatePostHeaderProps {
  data: CreatePostHeaderData;
}

const CreatePostHeader: React.FC<CreatePostHeaderProps> = ({ data }) => {
  return (
    <View style={styles.createPostHeader}>
      {/* Profile pic */}
      <Image style={styles.profilePicCreatePost} source={data.profilePic} />
      <View style={styles.profileNameUniContainer}>
        <View style={styles.profileNameTwoIconsContainer}>
          <SemiBoldBig>{data.profileName}</SemiBoldBig>
          {/* Two icons */}
          <VerifiedIcon size={16} fillColor="#2656FF" strokeColor="#fff" />
          <UforaIcon size={16} fillColor="#111" strokeColor="#fff" />
        </View>
      </View>
      {/* Dropdown */}
      <DropdownPost
        iconType="globe"
        value="Public"
        onChangeText={handleDropdownChange}
      />
    </View>
  );
};

const handleDropdownChange = () => {
  console.log("Dropdown changed!");
};

export default CreatePostHeader;
