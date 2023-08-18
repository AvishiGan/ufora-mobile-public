import ApiClient from "../util/ApiClient";
import { AccessLevel } from "../util";
import { Post } from "../model";

/**
 * @param caption | Caption for the post.
 * @param content | Content (image or other media) for the post
 */
export const createPost = async (post: Post) => {
  try {
    const response = await ApiClient.post("/post/create", post);
    console.log("Post created:", response);
    alert("Post created!");
  } catch (error) {
    // console.error("Error creating post:", error.message);
    throw error;
  }
};

/**
 *
 * @returns | Returns a list of posts
 */
export const getPosts = async () => {
  try {
    const response = await ApiClient.get<Post[]>("api/post"); // Assuming Post is the type for your post objects
    console.log("Posts retrieved:", response);
    return response;
  } catch (error) {
    // Handle errors here
  }
};
