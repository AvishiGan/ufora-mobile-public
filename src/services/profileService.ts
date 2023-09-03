import apiClient from "../util/apiClient";
import { Profile } from "../model";

export const createProfileRequest = async (profile: Profile) => {
  try {
    const response = await apiClient.post("/profile/create", profile);
    console.log("Profile created:", response);
    alert("Profile created!");
  } catch (error) {
    throw error;
  }
};

export const viewProfileWithIDRequest = async (id: string) => {
  try {
    const response = await apiClient.get(`/profile/retrieveProfileByID/${id}`);
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
    const response = await apiClient.get(
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
    const response = await apiClient.put("/profile/updateProfile/", profile);
    console.log("Profile updated:", response);
    alert("Profile updated!");
  } catch (error) {
    throw error;
  }
};
