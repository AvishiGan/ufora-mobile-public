import { profilePicture } from "../../../../assets/images/profile/myProfile";

/**
 * @interface MyProfileData
 *  This has all the data which contains in common profile sections
 */
export interface MyProfileData {
  profilePic: any;
  profileName: string;
  firstName: string;
  organization: string;
  friendsCount: number;
  postsCount: number;
  blogsCount: number;
  projectsCount: number;
  titleBarName: string;
  slideTitles: string[];
  time?: string;
}

/**
 * Instance of the MyProfileData interface
 * Object contain actual data
 */
export const myProfileData: MyProfileData = {
  profilePic: profilePicture,
  profileName: "Isuru Ranawaka",
  firstName: "Isuru",
  organization: "Undergrad at University of Colombo",
  friendsCount: 145,
  postsCount: 35,
  blogsCount: 5,
  projectsCount: 4,
  titleBarName: "isurur",
  slideTitles: ["About", "Posts", "Blogs", "Portfolio"],
};
