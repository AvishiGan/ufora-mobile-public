import React from "react";
import { View, Text } from "react-native";
import TopBar from "../../TopBar";
import { styles } from "../styles";
import { UserPlus2 } from "lucide-react-native";
import { COLORS, NameSemiboldNormal } from "../../../../constants";
import FormComponent from "./FormComponent-EditProfile";
import { SafeAreaView } from "react-native-safe-area-context";
import RegularButton from "../../../authentication/buttons/RegularButton";

const EditProfile = () => {
  function handleSubmit(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <SafeAreaView>
      <TopBar titleBarName="Edit profile" />
      <View style={styles.profilePicAndFormContainer}>
        <View style={styles.profilePicContainer}>
          <UserPlus2 size={40} color={COLORS.placeHolder} />
          <Text style={styles.uploadPhotoText}>Upload Photo</Text>
        </View>
        <View style={styles.formTitle}>
          <NameSemiboldNormal>Basic Information</NameSemiboldNormal>
        </View>
      </View>
      <View style={styles.titleAndFormContainer}>
        <FormComponent
          initialValues={{
            name: "",
            intro: "",
            dob: "",
            mobileNo: "",
          }}
          validationSchema=""
          // errorMessage="An error occurred."
          handleCreateStudentAcc={(values) => {
            // Handle form submission
          }}
          handleBack={() => {
            // Handle going back
          }}
        />
        <View style={styles.buttonContainer}>
          <RegularButton onPress={handleSubmit}>
            <Text style={{ color: COLORS.brandWhite }}>Continue</Text>
          </RegularButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
