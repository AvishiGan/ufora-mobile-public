import { StatusBar } from "expo-status-bar";
import { Text, View, KeyboardAvoidingView, StyleSheet} from "react-native";

import logo from "../../../assets/logo.png";
import RegularButton from "../../components/buttons/RegularButton";
import { TouchableOpacity } from "react-native";
import InputField from "../../components/inputField/InputField";
import Logo from "../../components/logo/Logo";
import RegularNormal from "../../constants/fonts/RegularNormal";
import { Field, Formik } from "formik";

//navigation
import { RootStackParamList } from "../../navigation/Nav/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
import React, { FunctionComponent, useState } from "react";
import SmallerRegular from "../../constants/fonts/SmallerRegular";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
import Dropdown from "../../components/dropdown/Dropdown";
type Props = StackScreenProps<RootStackParamList, "SelectUniversity">;

interface FormValues {
  university: string;
  email: string;
}

const SelectUniversity: FunctionComponent<Props> = ({route, navigation }) => {
  const [isSelected, setSelection] = useState(false);
  const initialValues: FormValues = {
    university: "",
    email: "",
  };

  const handleNext = async (values: FormValues) => {
    const username = route.params.username;
    console.log(username)
    try {
      const response = await axios.post(
        "http://192.168.1.5:3000/register/undergraduate/university",
        {
          username:username,
          university: values.university,
          university_email: values.email,
        }
      );

      console.log(values);
      navigation.navigate("UniOTP", { email: values.email });

      //Request OTP when create account success
      try {
        const otpResponse = await axios.post(
          "http://192.168.1.5:3000/otp/request",
          {
            email: values.email,
          }
        );

        console.log("OTP Request Response: ", otpResponse.data);
      } catch (otpError) {
        console.error("OTP Request Error: ", otpError);
      }

      console.log("API Response: ", response.data);
    } catch (error: any) {
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        const errorMessage = `${JSON.stringify(error.response.data)}`;
        alert(errorMessage);
        console.error("API error: ", error.response.data);
        console.error("API error status: ", error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("API error: No response received");
        console.log(error);
      } else {
        // Something happened in setting up the request that triggered an Error
        const errorMessage = `${JSON.stringify(error.message)}`;
        alert(errorMessage);
        console.error("API error: ", error.message);
      }
    }
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={250}
      behavior="padding"
      style={styles.container}
    >
      <SafeAreaView />
      <View>
        {/* Top section */}
        <Logo
          source={logo}
          mainText="Create Account"
          subText="Create a Student Account"
        />

        {/* Bottom section */}
        <View
          style={{
            paddingHorizontal: 10,
            marginTop: 180,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Formik initialValues={initialValues} onSubmit={handleNext}>
            {({ handleChange, handleSubmit, values }) => (
              <View>
                <View
                  style={{
                    marginTop: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "transparent",
                    borderRadius: 20,
                    padding: 2,
                    borderColor: '#B8B8B8'
                  }}
                >
                  <Field
                    imageSource={require("../../../assets/icons/gradcap.png")}
                    component={Dropdown}
                    name="university"
                    onChangeText={handleChange("university")}
                    value={values.university}
                  />
                </View>

                <View
                  style={{
                    marginTop: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "transparent",
                    borderRadius: 20,
                    padding: 2,
                  }}
                >
                  <Field
                    component={InputField}
                    imageSource={require("../../../assets/icons/mail.png")}
                    name="email"
                    placeholder="University Email"
                    onChangeText={handleChange("email")}
                    value={values.email}
                  />
                </View>

                <View
                  style={{
                    marginTop: 20,
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                >
                  {/* Custom Checkbox */}
                  <TouchableOpacity onPress={() => setSelection(!isSelected)}>
                    <View
                      style={{
                        width: 15,
                        height: 15,
                        borderWidth: 1,
                        borderColor: isSelected ? '#FEFEFE' : '#000000',
                        borderRadius: 3,
                        marginRight: 10,
                        backgroundColor: isSelected ? '#2656FF' : 'transparent',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                    {isSelected && (
                      <View style={{ width: 7, height: 4, borderColor: '#FFFFFF', borderTopWidth: 2, borderRightWidth: 2, transform: [{ rotate: '130deg' }] }} />
                    )}                    
                    </View>
                  </TouchableOpacity>


                  <SmallerRegular>
                    <Text style={{ alignItems: "center" }}>I agree to the</Text>
                  </SmallerRegular>
                  <TouchableOpacity onPress={() => navigation.navigate("Feed")}>
                    <View>
                      <SmallerRegular>
                        <Text style={{ color: "#2656FF" }}>
                          Terms & conditions
                        </Text>
                      </SmallerRegular>
                    </View>
                  </TouchableOpacity>
                  <SmallerRegular>
                    <Text style={{ alignItems: "center" }}>and the</Text>
                  </SmallerRegular>
                  <TouchableOpacity onPress={() => navigation.navigate("Feed")}>
                    <View>
                      <SmallerRegular>
                        <Text style={{ color: "#2656FF" }}>privacy policy</Text>
                      </SmallerRegular>
                    </View>
                  </TouchableOpacity>
                </View>

                {/* Button */}
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 25,
                    alignItems: "center",
                    width: 340,
                    gap: 10,
                  }}
                >
                  <RegularButton onPress={handleSubmit}>
                    <Text style={{ color: "#FEFEFE" }}>Next</Text>
                  </RegularButton>
                </View>
              </View>
            )}
          </Formik>

          <View
            style={{
              marginTop: 20,
              alignItems: "center",
              flexDirection: "row",
              marginBottom: 30,
            }}
          >
            <RegularNormal>
              <Text style={{ alignItems: "center" }}>
                Can't find your university?
              </Text>
            </RegularNormal>
            <TouchableOpacity onPress={() => navigation.navigate("Feed")}>
              <View>
                <RegularNormal>
                  <Text style={{ color: "#2656FF" }}>Contact Support</Text>
                </RegularNormal>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
});

export default SelectUniversity;
