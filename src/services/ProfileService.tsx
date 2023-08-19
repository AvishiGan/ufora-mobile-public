import ApiClient from "../util/ApiClient";
import { Profile } from "../model";

export const CreateProfile = async (profile: Profile) => {
  try {
    const response = await ApiClient.post("/profile/create", profile);
    console.log("Profile created:", response);
    alert("Profile created!");
  } catch (error) {
    throw error;
  }
};
