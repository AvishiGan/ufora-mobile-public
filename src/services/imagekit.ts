import ImageKit from "imagekit-javascript";
import {
  urlEndpoint,
  publicKey,
  //   authenticationEndpoint,
} from "./config/imagekit";

const imagekit = new ImageKit({
  publicKey,
  urlEndpoint,
  //   authenticationEndpoint,
});

/**
 * To create a URL from the image source (full image URL) and transformation array
 */
export function getImagekitUrlFromSrc(
  imageSrc: string,
  transformationArr: any[]
): string {
  const ikOptions = {
    src: imageSrc,
    transformation: transformationArr,
  };
  const imageURL = imagekit.url(ikOptions);

  return imageURL;
}

/**
 * To create a URL from the image path (relative to the URL endpoint) and transformation array
 */
export function getImagekitUrlFromPath(
  imagePath: string,
  transformationArr: any[]
): string {
  const ikOptions = {
    urlEndpoint,
    path: imagePath,
    transformation: transformationArr,
  };

  const imageURL = imagekit.url(ikOptions);

  return imageURL;
}

export default getImagekitUrlFromSrc;
