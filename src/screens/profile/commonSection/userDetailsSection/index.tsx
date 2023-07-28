import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { profileData } from "../data";
import VerifiedIcon from "../../../../../assets/svg/myProfile/common/verifiedIcon";
import UforaIcon from "../../../../../assets/svg/myProfile/common/uforaIcon";
import { EditButton, ShareButton } from "../../../../components/profile";

const UserDetailsContainer: React.FC = () => {
  /**
   * @function handleButtonPress
   * @returns void
   * @description Handles the button press event
   */
  const handleButtonPress = () => {
    console.log("Button pressed!");
  };

  return (
    <View style={styles.userDetailsContainer}>
      <View style={styles.profilePicNameUniContainer}>
        {/* Profile pic comes here */}
        <View style={styles.profileNameUniContainer}>
          <View style={styles.profileNameTwoIconsContainer}>
            <Text style={styles.profileName}>{profileData.name}</Text>
            <View style={styles.twoIconsContainer}>
              {/* Verified icon */}
              <VerifiedIcon
                size={21}
                fillColor="#2656FF"
                strokeColor="#FEFEFE"
              />
              {/* Ufora icon */}
              <UforaIcon size={21} fillColor="#111111" strokeColor="#FEFEFE" />
            </View>
          </View>
          <Text style={styles.uniName}>{profileData.university}</Text>
        </View>
      </View>
      <View style={styles.statusContainer}>
        <View style={styles.individualStatusContainer}>
          <StatusCount count={profileData.friendsCount} name="Friends" />
          <StatusCount count={profileData.postsCount} name="Posts" />
          <StatusCount count={profileData.blogsCount} name="Blogs" />
          <StatusCount count={profileData.projectsCount} name="Projects" />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {/* Edit profile button */}
        <EditButton onPress={handleButtonPress} />
        {/* Share profile button */}
        <ShareButton onPress={handleButtonPress} />
      </View>
    </View>
  );
};

/**
 * @interface StatusCountProps
 * Defines the expected properties for the StatusCount component
 */
interface StatusCountProps {
  count: number;
  name: string;
}

/**
 *
 * @param param0 | StatusCountProps
 * @returns | JSX.Element
 * @description | Renders the count and name of a particular status
 */
const StatusCount: React.FC<StatusCountProps> = ({ count, name }) => {
  return (
    <Text style={styles.statusCount}>
      {count}
      <Text style={styles.statusName}> {name}</Text>
    </Text>
  );
};

export default UserDetailsContainer;
