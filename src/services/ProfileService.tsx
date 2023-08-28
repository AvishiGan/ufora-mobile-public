import ApiClient from "../util/ApiClient";
import { Profile } from "../model";

export const createProfileRequest = async (profile: Profile) => {
  try {
    const response = await ApiClient.post("/profile/create", profile);
    console.log("Profile created:", response);
    alert("Profile created!");
  } catch (error) {
    throw error;
  }
};

export const viewProfileWithIDRequest = async (id: string) => {
  try {
    const response = await ApiClient.get(`/profile/retrieveProfileByID/${id}`);
    console.log("Profile:", response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const viewProfileWithUsernameOrEmailRequest = async (
  identifier: string,
  identifierType: "username" | "email"
) => {
  try {
    const response = await ApiClient.get(
      `/profile/retrieveProfile/${identifier}`
    );
    console.log("Profile:", response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const UpdateProfileRequest = async (profile: Profile) => {
  try {
    const response = await ApiClient.put("/profile/updateProfile/", profile);
    console.log("Profile updated:", response);
    alert("Profile updated!");
  } catch (error) {
    throw error;
  }
};
