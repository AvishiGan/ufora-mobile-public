import apiClient from "../util/apiClient";
import { AccessLevel } from "../util";
import { Post } from "../model";

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
