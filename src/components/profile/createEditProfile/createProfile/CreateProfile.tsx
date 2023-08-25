import React, { useState } from "react";
import { View, TextInput, Button, SafeAreaView, Text } from "react-native";
import { AlignLeft, CalendarDays, PhoneCall } from "lucide-react-native";
import { COLORS } from "../../../../constants";
import { styles } from "../styles";
import { Profile } from "../../../../model";
import TopBar from "../../TopBar";
import { createProfileRequest } from "../../../../services/ProfileService";
import { RegularButton } from "../../../authentication/buttons";

const CreateProfile: React.FC = () => {
  const [intro, setIntro] = useState("");
  const [dob, setDob] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  const handleCreateProfile = async () => {
    console.log("Button pressed! Caption:", intro, dob, mobileNo);

    try {
      if (!intro) throw new Error("Intro is empty");
      if (!dob) throw new Error("Date of birth is empty");
      if (!mobileNo) throw new Error("Mobile number is empty");

      const profile: Profile = {
        intro,
        date_of_birth: dob,
        mobile_no: mobileNo,
      };

      await createProfileRequest(profile);
      alert("Created profile");
    } catch (error) {
      alert("Failed to create profile" + error);
    }
  };

  return (
    <SafeAreaView>
      <TopBar titleBarName="Add your basic info" />
      {/* Form component starts here */}
      <View style={styles.container}>
        <View style={styles.fieldContainer}>
          <TextInput
            placeholder="A small introduction to yourself"
            value={intro}
            onChangeText={setIntro}
          />
        </View>
        <View style={styles.fieldContainer}>
          <TextInput
            placeholder="01/01/2000"
            value={dob}
            onChangeText={setDob}
          />
        </View>
        <View style={styles.fieldContainer}>
          <TextInput
            placeholder="+94 77 123 1234"
            value={mobileNo}
            onChangeText={setMobileNo}
          />
        </View>
        {/* Form component ends here */}
        <View style={styles.fieldContainer}>
          {/* Add a submission button */}
          <Button title="Submit" onPress={handleCreateProfile} />
        </View>
        <RegularButton onPress={handleCreateProfile}>
          <Text style={{ color: COLORS.brandWhite }}>Continue</Text>
        </RegularButton>
      </View>
    </SafeAreaView>
  );
};

export default CreateProfile;
