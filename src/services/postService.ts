import apiClient from "../utils/apiClient";
import { AccessLevel } from "../utils";
import { Post } from "../models";

export const createPostRequest = async (post: Post) => {
  try {
    const response = await apiClient.post("/api/post/create", post);
    console.log("Post created:", response);
    alert("Post created!");
  } catch (error) {
    throw error;
  }
};

/**
 * @returns | Returns a list of posts
 */
export const getPostsRequest = async () => {
  try {
    // Assuming Post is the type for the post objects
    const response = await apiClient.get<Post[]>("api/post");
    console.log("Posts retrieved:", response);
    return response;
  } catch (error) {
    throw error;
  }
};
