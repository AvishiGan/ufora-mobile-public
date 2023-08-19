import ApiClient from "../util/ApiClient";
import { AccessLevel } from "../util";
import { Post } from "../model";

export const createPost = async (post: Post) => {
  try {
    const response = await ApiClient.post("/post/create", post);
    console.log("Post created:", response);
    alert("Post created!");
  } catch (error) {
    throw error;
  }
};

/**
 * @returns | Returns a list of posts
 */
export const getPosts = async () => {
  try {
    // Assuming Post is the type for the post objects
    const response = await ApiClient.get<Post[]>("api/post");
    console.log("Posts retrieved:", response);
    return response;
  } catch (error) {
    throw error;
  }
};
