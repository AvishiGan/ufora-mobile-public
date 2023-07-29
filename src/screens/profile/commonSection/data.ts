import { profilePicture } from "../../../../assets/images";

/**
 * @interface ProfileData
 *  Specify the properties and their types that the profileData object should have
 */
export interface ProfileData {
    profilePic: any;
    name: string;
    university: string;
    friendsCount: number;
    postsCount: number;
    blogsCount: number;
    projectsCount: number;
    titleBarName: string;
    slideTitles: string[];
  }
  
  /**
   * Instance of the ProfileData interface
   * Object contain actual data
   */
  export const profileData: ProfileData = {
    profilePic: profilePicture,
    name: "Isuru Ranawaka",
    university: "Undergrad at University of Colombo",
    friendsCount: 45,
    postsCount: 35,
    blogsCount: 5,
    projectsCount: 4,
    titleBarName: "isurur",
    slideTitles: ["Posts", "Blogs", "Projects"],
  };
  