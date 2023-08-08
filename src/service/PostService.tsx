import ApiClient from "../util/ApiClient";
import { AccessLevel } from "../util";
import { profilePicture } from "../../assets/images";

/**
 * @interface PostData | Interface for post data
 */
interface PostData {
  name: string;
  postDescription: string;
  accessLevel: AccessLevel;
  media?: File;
}

/**
 * @constant newPost | Example post data
 */
const newPost: PostData = {
  name: "John Doe",
  postDescription: "Hi my name is John! I'm a software engineer.",
  accessLevel: AccessLevel.Public,
  media: profilePicture,
};

const createPost = async (postData: PostData) => {
  try {
    const formData = new FormData();
    formData.append("name", postData.name);
    formData.append("postDescription", postData.postDescription);
    formData.append("accessLevel", postData.accessLevel);

    if (postData.media) {
      formData.append("media", postData.media);
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
