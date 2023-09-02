import {
  wso2Logo,
  locationImage,
} from "../../../../assets/images/profile/companyProfile";

/**
 * @interface CompanyProfileData
 *  This has all the data which contains in common profile sections
 */
export interface CompanyProfileData {
  profilePic: any;
  profileName: string;
  firstName: string;
  organization: string;
  followersCount: number;
  postsCount: number;
  titleBarName: string;
  slideTitles: string[];
  time?: string;
  address: string;
  mobileNo: string;
  email: string;
  location: any;
  intro: string;
}

/**
 * Instance of the CompanyProfileData interface
 * Object contain actual data
 */
export const companyProfileData: CompanyProfileData = {
  profilePic: wso2Logo,
  profileName: "WSO2",
  firstName: "WSO2",
  organization: "Software organization",
  followersCount: 1045,
  postsCount: 105,
  titleBarName: "wso2",
  slideTitles: ["Posts", "About", "Jobs"],
  address: "105, Bauddhaloka Mawatha, Colombo",
  mobileNo: "+94 112 145 345",
  email: "contact@wso2.com",
  location: locationImage,
  intro:
    "WSO2 is a software company which offers open source and API-first integration, identity and cloud native solutions. WSO2 employs over 650 engineers, consultants and professionals worldwide and has offices in the US, the UK and Sri Lanka.",
};
