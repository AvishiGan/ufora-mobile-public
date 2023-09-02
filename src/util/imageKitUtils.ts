import CryptoES from "crypto-es";
import * as Crypto from "expo-crypto";

const generateExpireTime = (expireDurationMin: number) =>
  Math.floor((Date.now() + 5 * 60 * 1000) / 1000);

const generateToken = () => Crypto.randomUUID();

const generateSignature = (apiKey: string, token: string, expire: number) =>
  CryptoES.HmacSHA1(`${token}${expire}`, apiKey).toString();

export const generateImageKitAuth = (): {
  token: string;
  expire: number;
  signature: string;
} => {
  const expireDurationMin =
    process.env.IMAGE_KIT_SIGNATURE_EXPIRED_DURATION_MIN;
  const apiKey = process.env.IMAGE_KIT_PRIVATE_KEY;

  try {
    if (expireDurationMin && apiKey) {
      const token = generateToken();
      const expire = generateExpireTime(+expireDurationMin);
      const signature = generateSignature(apiKey, token, expire);
      return { token, expire, signature };
    } else {
      throw new Error("Environment variables are not set");
    }
  } catch (error) {
    throw new Error("ImageKit auth cannot be generated");
  }
};
