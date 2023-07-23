import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import ProfileButton from "../../../../components/profile/buttons/index";
import { profileData } from "./data";
import PageTitleBar from "../../../../components/profile/userProfileTopBar";
import ProfileSlider from "../../../../components/profile/profileSlider/index";

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
            <Text style={styles.uniName}>{profileData.university}</Text>
            {/* Two icons come here */}
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
          {/* Button icons come here */}
          <ProfileButton onPress={handleButtonPress} title="Edit Profile" />
          <ProfileButton onPress={handleButtonPress} title="Share Profile" />
        </View>
        <View>
          <ProfileSlider titles={["About", "Posts", "Blogs", "Portfolio"]} />
        </View>
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
