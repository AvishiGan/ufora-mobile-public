import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";
import { VerifiedIcon, UforaIcon } from "../../../assets/svg";
import {
  EditButton,
  FollowingButton,
  MessageButton,
  ShareButton,
} from "./buttons/profileHeader";
import {
  SubHeadingSemibold,
  RegularNormal,
  SemiBoldBig,
} from "../../constants";
import MemberButton from "./buttons/profileHeader/MemberButton";

interface ProfileHeaderData {
  profilePic: any;
  profileName: string;
  organization: string;
  friendsCount?: number; // user
  postsCount: number; // all
  blogsCount?: number; // user
  projectsCount?: number; // user
  followersCount?: number; // company, club
  membersCount?: number; // club
  eventsCount?: number; // club
}

interface ProfileHeaderProps {
  data: ProfileHeaderData;
  profileType: "user" | "company" | "club";
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ data, profileType }) => {
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
              {profileType === "user" && (
                <UforaIcon
                  size={21}
                  fillColor="#111111"
                  strokeColor="#FEFEFE"
                />
              )}
              <UforaIcon size={21} fillColor="#111111" strokeColor="#FEFEFE" />
            </View>
          </View>
          <RegularNormal>{data.organization}</RegularNormal>
        </View>
      </View>
      <View style={styles.statusContainer}>
        <View style={styles.individualStatusContainer}>
          {profileType === "user" && (
            <>
              <StatusCount count={data.friendsCount || 0} name="Friends" />
              <StatusCount count={data.postsCount} name="Posts" />
              <StatusCount count={data.blogsCount || 0} name="Blogs" />
              <StatusCount count={data.projectsCount || 0} name="Projects" />
            </>
          )}
          {profileType === "company" && (
            <>
              <StatusCount count={data.followersCount || 0} name="Followers" />
              <StatusCount count={data.postsCount} name="Posts" />
            </>
          )}
          {profileType === "club" && (
            <>
              <StatusCount count={data.membersCount || 0} name="Members" />
              <StatusCount count={data.followersCount || 0} name="Followers" />
              <StatusCount count={data.postsCount} name="Posts" />
              <StatusCount count={data.eventsCount || 0} name="Events" />
            </>
          )}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {profileType === "user" && (
          <>
            <EditButton onPress={handleButtonPress} />
            <ShareButton onPress={handleButtonPress} />
          </>
        )}
        {profileType === "company" && (
          <>
            <FollowingButton onPress={handleButtonPress} />
            <MessageButton onPress={handleButtonPress} />
          </>
        )}
        {profileType === "club" && (
          <>
            <FollowingButton onPress={handleButtonPress} />
            <MemberButton onPress={handleButtonPress} />
            <MessageButton onPress={handleButtonPress} />
          </>
        )}
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
    <SemiBoldBig>
      {count}
      <RegularNormal> {name}</RegularNormal>
    </SemiBoldBig>
  );
};

const handleButtonPress = () => {
  console.log("Button pressed!");
};

export default ProfileHeader;
