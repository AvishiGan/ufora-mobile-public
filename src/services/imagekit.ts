import ImageKit from "imagekit-javascript";
import { FileData } from "../model";
import { generateImageKitAuth } from "../util/imageKitUtils";

const urlEndpoint = process.env.IMAGE_KIT_URL_ENDPOINT || "";
const publicKey = process.env.IMAGE_KIT_PUBLIC_KEY;

const imageKit = new ImageKit({
  publicKey,
  urlEndpoint,
});

/**
 * Uploads a file to ImageKit
 */
export const uploadFile = async function (
  file: FileData,
  tags?: [string]
): Promise<any> {
  if (file.uri && file.name) {
    const { token, expire, signature } = generateImageKitAuth();

    const uploadOptions = {
      file: file.uri,
      fileName: file.name,
      tags,
      signature,
      token,
      expire,
    };

    return new Promise((resolve, reject) => {
      imageKit.upload(uploadOptions, (err: any, result: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
  return Promise.reject("File not provided");
};

/**
 * Returns the ImageKit URL for a given image source
 */
export function getImageKitUrlFromSrc(
  imageSrc: string,
  transformationArr: any[]
): string {
  const ikOptions = {
    src: imageSrc,
    transformation: transformationArr,
  };
  const imageURL = imageKit.url(ikOptions);

  return imageURL;
}

/**
 * Returns the ImageKit URL for a given image path
 */
export function getImageKitUrlFromPath(
  imagePath: string,
  transformationArr: any[]
): string {
  const ikOptions = {
    urlEndpoint,
    path: imagePath,
    transformation: transformationArr,
  };

  const imageURL = imageKit.url(ikOptions);

  return imageURL;
}
