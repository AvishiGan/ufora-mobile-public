import { AlignLeft, CalendarDays, PhoneCall } from "lucide-react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "../../../constants";
import { FileData, Profile } from "../../../models";
import { selectMediaFromDevice } from "../../../utils/fileUtils";
import { uploadMediaToImageKit } from "../../../services/imagekit";

import TopBar from "../TopBar";
import CustomForm from "./CustomForm";
import { createProfileRequest } from "../../../services/profileService";

const CreateProfile = () => {
  const [intro, setIntro] = useState("");
  const [dob, setDob] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [selectedMedia, setSelectedMedia] = useState<FileData | null>(null);

  const handleMediaSelection = async () => {
    try {
      const fileData = await selectMediaFromDevice(1);
      if (fileData.length) setSelectedMedia(fileData[0]);
    } catch (error) {
      console.log("Error selecting media", error);
    }
  };

  const uploadFileToImageKit = async (): Promise<string> => {
    if (!selectedMedia) return Promise.reject("No media selected");
    try {
      const imageKitResponse = await uploadMediaToImageKit(selectedMedia);
      return Promise.resolve(imageKitResponse.url);
    } catch (error) {
      console.log("Error uploading file to ImageKit", error);
      return Promise.reject(error);
    }
  };

  const handleCreateProfile = async () => {
    try {
      const imageUrl = await uploadFileToImageKit();

      const profile: Profile = {
        intro,
        date_of_birth: dob,
        mobile_no: mobileNo,
        profile_picture: imageUrl,
      };
      await createProfileRequest(profile);
      alert("Created profile");
    } catch (error) {
      alert("Failed to create profile" + error);
    }
  };

  /**
   * The fields array is used to render the input fields in the form.
   */
  const fields = [
    {
      label: "Intro",
      icon: <AlignLeft size={20} color={COLORS.placeHolder} />,
      placeholder: "A small introduction to yourself",
      value: intro,
      onChange: setIntro,
    },
    {
      label: "Date of Birth",
      icon: <CalendarDays size={20} color={COLORS.placeHolder} />,
      placeholder: "01/01/2000",
      value: dob,
      onChange: setDob,
    },
    {
      label: "Mobile Number",
      icon: <PhoneCall size={20} color={COLORS.placeHolder} />,
      placeholder: "+94 77 123 1234",
      value: mobileNo,
      onChange: setMobileNo,
    },
  ];

  return (
    <SafeAreaView>
      <TopBar titleBarName="Add your basic info" />
      <CustomForm
        imagePlaceholderText="Upload Photo"
        formTitle="Basic Information"
        fields={fields}
        includeButton={true}
        handleMediaSelection={handleMediaSelection}
        handleSubmit={handleCreateProfile}
        selectedMedia={selectedMedia}
      />
    </SafeAreaView>
  );
};

export default CreateProfile;
