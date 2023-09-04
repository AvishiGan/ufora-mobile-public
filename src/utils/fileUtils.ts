import {
  launchImageLibraryAsync,
  ImagePickerAsset,
  MediaTypeOptions,
} from "expo-image-picker";
import { FileData } from "../models";

export const selectMediaFromDevice = async (
  mediaCount: number
): Promise<FileData[]> => {
  try {
    let { assets, canceled } = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: true,
      base64: true,
      selectionLimit: mediaCount,
      aspect: [4, 3],
      quality: 1,
    });

    if (!canceled && assets)
      return Promise.resolve(
        assets.map((asset: ImagePickerAsset) => new FileData(asset))
      );
    else return Promise.resolve([]);
  } catch (error) {
    return Promise.reject(error);
  }
};
