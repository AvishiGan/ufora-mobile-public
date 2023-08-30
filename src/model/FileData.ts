class FileData {
  size?: number; // Ex: 2774844
  name?: string; // Ex: "IMG20230829161515.jpg"
  uri?: string; // Ex: "file:///data/user/0/host.exp.exponent/cache/DocumentPicker/e8ff3d2a-0c01-4baa-bc6d-c5d4775c777e.jpg"
  type?: string; // Ex: "success"
  mimeType?: string; // Ex: "image/jpeg"

  constructor(data: any) {
    this.size = data.size;
    this.name = data.name;
    this.uri = data.uri;
    this.type = data.type;
    this.mimeType = data.mimeType;
  }
}

export default FileData;
