import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";
import { VerifiedIcon, UforaIcon } from "../../../assets/svg";
import { EditButton, ShareButton } from ".";
import {
  SubHeadingSemibold,
  RegularNormal,
  SemiboldBig,
} from "../../constants";

interface ProfileHeaderData {
  profilePic: any;
  profileName: string;
  university: string;
  friendsCount: number;
  postsCount: number;
  blogsCount: number;
  projectsCount: number;
}

interface ProfileHeaderProps {
  data: ProfileHeaderData;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ data }) => {
  return (
    <View style={styles.userDetailsContainer}>
      <View style={styles.profilePicNameUniContainer}>
        {/* Profile pic */}
        <View style={styles.profilePicContainer}>
          <Image
            style={styles.profilePicProfileHeader}
            source={data.profilePic}
          />
          {/* Profile plus icon */}
          {/* <View style={styles.profilePlusIcon}>
            <ProfilePlusIcon size={30} color="blue" />
          </View> */}
        </View>
        <View style={styles.profileNameUniContainer}>
          <View style={styles.profileNameTwoIconsContainer}>
            <SubHeadingSemibold>{data.profileName}</SubHeadingSemibold>
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
          <RegularNormal>{data.university}</RegularNormal>
        </View>
      </View>
      <View style={styles.statusContainer}>
        <View style={styles.individualStatusContainer}>
          <StatusCount count={data.friendsCount} name="Friends" />
          <StatusCount count={data.postsCount} name="Posts" />
          <StatusCount count={data.blogsCount} name="Blogs" />
          <StatusCount count={data.projectsCount} name="Projects" />
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
    <SemiboldBig>
      {count}
      <RegularNormal> {name}</RegularNormal>
    </SemiboldBig>
  );
};

const handleButtonPress = () => {
  console.log("Button pressed!");
};

export default ProfileHeader;
