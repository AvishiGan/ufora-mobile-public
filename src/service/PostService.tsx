import ApiClient from "../util/ApiClient";
import { AccessLevel } from "../util";
import { profilePicture } from "../../assets/images";

/**
 * @interface PostData | Interface for post data
 */
interface PostData {
  caption: string;
  accessLevel: AccessLevel;
  content?: File;
}

/**
 * @constant newPost | Example post data
 */
const newPost: PostData = {
  caption: "Hi my name is John! I'm a software engineer.",
  accessLevel: AccessLevel.Public,
  content: profilePicture,
};

const createPost = async (postData: PostData) => {
  try {
    const formData = new FormData();
    formData.append("caption", postData.caption);
    formData.append("access_level", postData.accessLevel);

    if (postData.content) {
      formData.append("content", postData.content);
    }

    const response: PostData = await ApiClient.post<PostData>(
      "/create-post",
      formData
    );
    console.log("Post created:", response);
  } catch (error: any) {
    console.error("Error creating post:", error.message);
  }
};

// Call the function with the newPost data
createPost(newPost);
