import { ImagePickerAsset } from "expo-image-picker";

class FileData {
  /**
   * Base64 encoded data string of the file
   */
  data?: string;
  /**
   * Size of the file in bytes
   */
  size?: number;
  /**
   * Name of the file
   * @example "IMG20230829161515.jpg"
   */
  name?: string;
  /**
   * URI of the file
   * @example "file:///data/user/0/host.exp.exponent/cache/DocumentPicker/e8ff3d2a-0c01-4baa-bc6d-c5d4775c777e.jpg"
   */
  uri?: string;
  /**
   * Type of the file
   * @example "success"
   */
  type?: string;

  constructor(imagePickerAsset: ImagePickerAsset) {
    this.data = imagePickerAsset.base64!;
    this.size = imagePickerAsset.fileSize;
    this.name = imagePickerAsset.fileName!;
    this.uri = imagePickerAsset.uri;
    this.type = imagePickerAsset.type;
  }
}

export default FileData;
