import ImageKit from "imagekit-javascript";
import { urlEndpoint, publicKey } from "./config/imagekit";
import * as Crypto from 'expo-crypto';
import * as Random from 'expo-random';
import { Buffer } from 'buffer';

global.Buffer = Buffer;

const imagekit = new ImageKit({
  publicKey,
  urlEndpoint,
});

/**
 * Returns the ImageKit URL for a given image source
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
 * Returns the ImageKit URL for a given image path
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

const secretKey = 'private_y0v9a/GGzdcw9kxujOvTm+uKBbw=';

const expirationTime = Math.floor(Date.now() / 1000) + 3600; // 1 hour from now

/**
 * Generates a signature for ImageKit
 */
async function generateSignature(message: string): Promise<string> {
  const signature = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    secretKey + message // secretKey is prepended to message
  );
  return signature;
}

/**
 * Uploads a file to ImageKit
 */
export const uploadFile = async function(file: File): Promise<any> {
  
  const token = await randomBytes(16);
  
  const message = `fileName=${file.name}&expire=${expirationTime}`;
  
  const signature = await generateSignature(message);

  const uploadOptions = {
    file,
    fileName: file.name,
    tags: ["sample-tag-1", "sample-tag-2"],
    signature,
    token,
    expire: expirationTime,
  };

  return new Promise((resolve, reject) => {
    imagekit.upload(uploadOptions, (err: any, result: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

async function randomBytes(arg0: number): Promise<string> {
  const randomBytes = await Random.getRandomBytesAsync(arg0);
  return Buffer.from(randomBytes).toString('hex');
}