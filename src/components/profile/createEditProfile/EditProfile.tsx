import React, { useState } from "react";
import { User, AlignLeft, CalendarDays, PhoneCall } from "lucide-react-native";
import TopBar from "../TopBar";
import CustomForm from "./CustomForm";
import { COLORS } from "../../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { Profile } from "../../../model/profileModel";

interface Props {
  profileFormSubmit: (profile: Profile) => void;
}

const EditProfile: React.FC<Props> = ({ profileFormSubmit }) => {
  const [name, setName] = useState("");
  const [intro, setIntro] = useState("");
  const [dob, setDob] = useState("");
  const [mobileNo, setMobileNo] = useState("");

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
      placeholder:
        "Hey I am Isuru, an undergrad  at UCSC. I love designing and creating websites and posters. I also love playing cricket in my free time and going for a swim whenever possible!",
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
      <TopBar titleBarName="Edit " />
      <CustomForm
        imagePlaceholderText="Upload Photo"
        formTitle="Basic Information"
        fields={fields}
        includeButton={true}
        handleSubmit={handleEditProfile}
      />
    </SafeAreaView>
  );
};

export default EditProfile;
