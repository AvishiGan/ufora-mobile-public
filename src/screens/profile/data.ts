import { profilePicture } from "../../../assets/images";

/**
 * @interface ProfileData
 *  This has all the data which contains in common profile sections
 */
export interface ProfileData {
    profilePic: any;
    profileName: string;
    university: string;
    friendsCount: number;
    postsCount: number;
    blogsCount: number;
    projectsCount: number;
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
    profileName: "Isuru Ranawaka",
    university: "Undergrad at University of Colombo",
    friendsCount: 145,
    postsCount: 35,
    blogsCount: 5,
    projectsCount: 4,
    titleBarName: "isurur",
    slideTitles: ["About", "Posts", "Blogs", "Portfolio"],
  };