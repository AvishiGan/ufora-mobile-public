import React from "react";
import { View, Image } from "react-native";
import { styles } from "../styles";
import { UforaIcon, VerifiedIcon } from "../../../../assets/svg";
import SemiBoldBig from "../../../constants/fonts/SemiboldBig";

interface CreatePostHeader {
  profilePic?: any;
  profileName: string;
}

interface PostAuthorBioFooterProps {
  data: CreatePostHeader;
}

const CreatePostHeader: React.FC<PostAuthorBioFooterProps> = ({ data }) => {
  return (
    <View style={styles.authorBioContainer}>
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
      {/* Drop down icon comes here */}
      {/* <Dropdown label="Public" value /> */}
    </View>
  );
};

export default CreatePostHeader;

// Got this from post author bio footer
