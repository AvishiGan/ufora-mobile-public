import club1  from "../../../../assets/images/myProfile/about/clubs/club1.png";

/**
 * @interface ProfileData
 *  This has all the data which contains in common profile sections
 */
export interface ProfileData {
    profilePic: any;
    profileName: string;
    firstName: string;
    description: string;
    memberCount: number;
    postsCount: number;
    eventsCount: number;
    followersCount: number;
    titleBarName: string;
    // slideTitles: string[];
    time?: string;
  }
  
  /**
   * Instance of the ProfileData interface
   * Object contain actual data
   */
  export const profileData: ProfileData = {
    profilePic: club1,
    profileName: "Rotaract Club of UCSC",
    firstName: "Isuru",
    description: "Youth Organization",
    memberCount: 125,
    postsCount: 105,
    eventsCount: 5,
    followersCount: 1045,
    titleBarName: "racucsc",
    // slideTitles: ["About", "Posts", "Blogs", "Portfolio"],
  };