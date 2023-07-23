import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

interface PostHeaderData {
  profilePic: any;
  profileName: string;
  university: string;
  time: string;
}

interface PostHeaderProps {
  data: PostHeaderData;
}

/**
 *
 * @param param0 | This is the data which we are passing to the PostHeader component
 * @returns | This component returns the header of the post
 */
const PostHeader: React.FC<PostHeaderProps> = ({ data }) => {
  return (
    <View style={styles.postHeaderContainer}>
      <View style={styles.profilePicNameUniTimeContainer}>
        {/* Profile pic comes here */}
        <View style={styles.profileNameUniTimeContainer}>
          <View style={styles.profileNameTwoIconsContainer}>
            <Text style={styles.profileName}>{data.profileName}</Text>
            <View style={styles.verifiedAndUforaIconContainer}>
              {/* Two icons come here */}
            </View>
            <Text style={styles.uniName}>{data.university}</Text>
            <View style={styles.timeAndGlobeIconContainer}>
              <Text style={styles.time}>{data.time}</Text>
              {/* Dot icon comes here */}
              {/* Globe icon comes here */}
            </View>
          </View>
        </View>
      </View>
      {/* More icon comes here */}
    </View>
  );
};

export default PostHeader;
