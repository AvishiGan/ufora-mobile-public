import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import ProfileButton from "../../../../components/profile/buttons";
import { profileData } from "../data";
import VerifiedIcon from "../../../../../assets/svg/myProfile/common/verifiedIcon";
import UforaIcon from "../../../../../assets/svg/myProfile/common/uforaIcon";
import EditIcon from "../../../../../assets/svg/myProfile/common/editIcon";
import ShareIcon from "../../../../../assets/svg/myProfile/common/shareIcon";
import SearchIcon from "../../../../../assets/svg/myProfile/common/searchIcon";
import ChatIcon from "../../../../../assets/svg/myProfile/common/chatIcon";
import BackIcon from "../../../../../assets/svg/myProfile/common/backIcon";
import GlobeIcon from "../../../../../assets/svg/myProfile/common/globeIcon";
import MoreIcon from "../../../../../assets/svg/myProfile/common/moreIcon";
import DotIconInBlogs from "../../../../../assets/svg/myProfile/common/dotIcon";
import DotIcon from "../../../../../assets/svg/myProfile/common/dotIcon";
import SmallDotIcon from "../../../../../assets/svg/myProfile/common/smallDotIcon";
import LikeIcon from "../../../../../assets/svg/myProfile/common/likeIcon";

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
              <EditIcon size={17} fillColor="#111111" strokeColor="#4F4E4E" />
              <ShareIcon size={17} strokeColor="#4F4E4E" />
              <SearchIcon size={24} strokeColor="#4F4E4E" />
              <ChatIcon size={24} strokeColor="#4F4E4E" />
              <BackIcon width={8} height={14} color="#4F4E4E" />
              <GlobeIcon width={11} height={10} color="#87929D" />
              <MoreIcon width={25} height={24} color="black" />
              <DotIcon size={5} color="#4F4E4E" />
              <SmallDotIcon width={3} height={2} color="#87929D" />
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
        {/* Button icons come here */}
        <ProfileButton onPress={handleButtonPress} title="Edit Profile" />
        <ProfileButton onPress={handleButtonPress} title="Share Profile" />
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
