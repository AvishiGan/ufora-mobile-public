import ImageKit from "imagekit-javascript";
import { randomUUID } from "expo-crypto";

import { FileData } from "../model";
import { generateImageKitAuth } from "../util/imageKitUtils";

const urlEndpoint = process.env.IMAGE_KIT_URL_ENDPOINT || "";
const publicKey = process.env.IMAGE_KIT_PUBLIC_KEY;

const imageKit = new ImageKit({
  publicKey,
  urlEndpoint,
});

/**
 * Uploads media file to image kit
 * @param file FileData File data object
 * @param tags string[] Tags to be added to the file
 * @returns Promise<any> Promise that resolves to the response from image kit
 */
export const uploadMediaToImageKit = async function (
  file: FileData,
  tags?: [string]
): Promise<any> {
  const { data, uri } = file;

  if (data && uri) {
    const { token, expire, signature } = generateImageKitAuth();

    const uploadOptions = {
      file: data,
      fileName: randomUUID(),
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

// /**
//  * Returns the ImageKit URL for a given image source
//  */
// export function getImageKitUrlFromSrc(
//   imageSrc: string,
//   transformationArr: any[]
// ): string {
//   const ikOptions = {
//     src: imageSrc,
//     transformation: transformationArr,
//   };
//   const imageURL = imageKit.url(ikOptions);

//   return imageURL;
// }

// /**
//  * Returns the ImageKit URL for a given image path
//  */
// export function getImageKitUrlFromPath(
//   imagePath: string,
//   transformationArr: any[]
// ): string {
//   const ikOptions = {
//     urlEndpoint,
//     path: imagePath,
//     transformation: transformationArr,
//   };

//   const imageURL = imageKit.url(ikOptions);

//   return imageURL;
// }
