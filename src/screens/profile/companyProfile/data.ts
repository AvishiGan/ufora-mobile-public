import { profilePicture } from "../../../../assets/images/profile/myProfile";

/**
 * @interface ProfileData
 *  This has all the data which contains in common profile sections
 */
export interface ProfileData {
  profilePic: any;
  profileName: string;
  firstName: string;
  organization: string;
  followersCount: number;
  postsCount: number;
  titleBarName: string;
  slideTitles: string[];
  time?: string;
}

/**
 * Instance of the ProfileData interface
 * Object contain actual data
 */
export const profileData: ProfileData = {
  profilePic: profilePicture,
  profileName: "WSO2",
  firstName: "WSO2",
  organization: "Software organization",
  followersCount: 1045,
  postsCount: 105,
  titleBarName: "wso2",
  slideTitles: ["Posts", "About", "Jobs"],
};
