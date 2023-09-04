import React, { useState } from "react";
import { AlignLeft, CalendarDays, PhoneCall } from "lucide-react-native";
import TopBar from "../TopBar";
import CustomForm from "./CustomForm";
import { COLORS } from "../../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { Profile } from "../../../model/profileModel";

interface Props {
  profileFormSubmit: (profile: Profile) => void;
}

const CreateProfile: React.FC<Props> = ({ profileFormSubmit }) => {
  const [intro, setIntro] = useState("");
  const [dob, setDob] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  const handleCreateProfile = async () => {
    const profile: Profile = {
      intro,
      date_of_birth: dob,
      mobile_no: mobileNo,
    };
    profileFormSubmit(profile);
  };

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
        handleSubmit={handleCreateProfile}
      />
    </SafeAreaView>
  );
};

export default CreateProfile;
