import { AlignLeft, CalendarDays, PhoneCall, User } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "../../../constants";
import { Profile } from "../../../models/profileModel";

import TopBar from "../TopBar";
import CustomForm from "./CustomForm";

interface Props {
  profileFormSubmit: (profile: Profile) => void;
  currentProfile: Profile; // The profile that is currently being edited
}

const EditProfile: React.FC<Props> = ({
  profileFormSubmit,
  currentProfile,
}) => {
  const [name, setName] = useState(currentProfile.name || "");
  const [intro, setIntro] = useState(currentProfile.intro || "");
  const [dob, setDob] = useState(currentProfile.date_of_birth || "");
  const [mobileNo, setMobileNo] = useState(currentProfile.mobile_no || "");

  // This useEffect hook is used to update the state of the input fields when the currentProfile prop changes
  useEffect(() => {
    setName(currentProfile.name || "");
    setIntro(currentProfile.intro || "");
    setDob(currentProfile.date_of_birth || "");
    setMobileNo(currentProfile.mobile_no || "");
  }, [currentProfile]);

  const handleEditProfile = async () => {
    const profile: Profile = {
      name,
      intro,
      date_of_birth: dob,
      mobile_no: mobileNo,
    };
    profileFormSubmit(profile);
  };

  const fields = [
    {
      label: "Name",
      icon: <User size={20} color={COLORS.placeHolder} />,
      placeholder: "Isuru Ranawaka",
      value: name,
      onChange: setName,
    },
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
      <TopBar titleBarName="Edit Profile" />
      <CustomForm
        imagePlaceholderText="Upload Photo"
        formTitle="Basic Information"
        fields={fields}
        includeButton={true}
        handleSubmit={handleEditProfile}
        selectedMedia={null}
      />
    </SafeAreaView>
  );
};

export default EditProfile;
