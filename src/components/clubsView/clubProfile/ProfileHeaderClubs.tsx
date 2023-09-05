import React from "react";
import { View, Image, Touchable } from "react-native";
import { styles } from "../../../components/profile/styles";
import { VerifiedIcon, UforaIcon } from "../../../../assets/svg";
import { EditButton, ShareButton } from "../../../components/profile/buttons/profileHeader";
import {
  SubHeadingSemibold,
  RegularNormal,
  SemiBoldBig,
} from "../../../constants";
import ManageButton from "../../profile/buttons/profileHeader/ManageButton";
import { TouchableOpacity } from "react-native-gesture-handler";


interface ProfileHeaderData {
  profilePic: any;
  profileName: string;
  description: string;
  memberCount: number;
  postsCount: number;
  eventsCount: number;
  followersCount: number;
}

interface ProfileHeaderProps {
  data: ProfileHeaderData;
}

const ProfileHeaderClubs: React.FC<ProfileHeaderProps> = ({ data }) => {
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
              {/* <UforaIcon size={21} fillColor="#111111" strokeColor="#FEFEFE" /> */}
            </View>
          </View>
          <RegularNormal>{data.description}</RegularNormal>
        </View>
      </View>
      <View style={styles.statusContainer}>
        <View style={styles.individualStatusContainer}>
          <TouchableOpacity>
            <StatusCount count={data.memberCount} name="Members" />
          </TouchableOpacity>
          <TouchableOpacity>
            <StatusCount count={data.followersCount} name="Followers" />
          </TouchableOpacity>
         
          <StatusCount count={data.postsCount} name="Posts" />
          <StatusCount count={data.eventsCount} name="Events" />
          
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {/* Manage profile button */}
        <ManageButton onPress={handleButtonPress}/>
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
    <SemiBoldBig>
      {count}
      <RegularNormal> {name}</RegularNormal>
    </SemiBoldBig>
  );
};

const handleButtonPress = () => {
  console.log("Button pressed!");
};

export default ProfileHeaderClubs;
