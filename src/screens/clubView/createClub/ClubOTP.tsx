import React, { FunctionComponent, useRef, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView,} from 'react-native'
import TopBar from '../../../components/profile/TopBar'

import { RootStackParamList } from "../../../navigation/navigator/RootNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import RegularButton from '../../../components/authentication/buttons/RegularButton';
import { Formik } from 'formik';
import RegularSmall from '../../../constants/fonts/RegularSmall';
import RegularNormal from '../../../constants/fonts/RegularNormal';
import { RegularBig } from '../../../constants';
type Props = StackScreenProps<RootStackParamList, "clubOTP">;

interface FormValues {
    [key: string]: string;
  }

const ClubOTP: FunctionComponent<Props> = () => {
    const [errorMessage, setErrorMessage] = useState<string>("");

  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  const initialValues: FormValues = {
    num1: "",
    num2: "",
    num3: "",
    num4: "",
    num5: "",
    num6: "",
  };

  const focusNextField = (index: number) => {
    if (index < inputRefs.length - 1) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleVerify = async () => {}

  const handleResendOTP = async () => {}

  return (

    <KeyboardAvoidingView keyboardVerticalOffset={400} style={styles.container}>
        <View style={{flexDirection: "row", alignItems: "center", gap: 180}}>
          <TopBar titleBarName="OTP" />
        </View>

        <View
          style={{
            paddingHorizontal: 10,
            marginTop: 450,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
            <View style={{marginBottom: 15}}>
                <RegularBig>Please enter the OTP sent to your Club Email</RegularBig>
            </View>
          <Formik initialValues={initialValues} onSubmit={handleVerify}>
            {({ handleChange, handleSubmit, values }) => (
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  {inputRefs.map((ref, index) => (
                    <View key={index}>
                      <TextInput
                        ref={ref}
                        placeholder="0"
                        placeholderTextColor={
                          errorMessage ? "#CC3535" : "#B8B8B8"
                        }
                        style={[
                          styles.input,
                          errorMessage ? styles.inputError : null,
                        ]}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={(value) => {
                          handleChange(`num${index + 1}`)(value);
                          if (value) {
                            focusNextField(index);
                          }
                        }}
                        value={values[`num${index + 1}`]}
                      />
                    </View>
                  ))}
                </View>

                <View
                  style={{
                    marginTop: 10,
                    flexDirection: "row",
                    marginLeft: 0,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <RegularSmall>
                    {errorMessage ? (
                      <Text style={{ color: "#CC3535", fontSize: 12 }}>
                        {errorMessage}
                      </Text>
                    ) : null}
                  </RegularSmall>
                </View>

                {/* Button */}
                <View
                  style={{
                    marginLeft: 25,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 25,
                    width: 280,
                  }}
                >
                  <RegularButton onPress={handleSubmit}>
                    <Text style={{ color: "#FEFEFE" }}>Verify</Text>
                  </RegularButton>
                </View>
              </View>
            )}
          </Formik>
          <View
            style={{
              marginTop: 30,
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <RegularNormal>
              <Text style={{ alignItems: "center" }}>
                Didn't receive an OTP?
              </Text>
            </RegularNormal>
            <TouchableOpacity onPress={handleResendOTP}>
              <View>
                <RegularNormal>
                  <Text style={{ color: "#2656FF" }}>Resend OTP</Text>
                </RegularNormal>
              </View>
            </TouchableOpacity>
          </View>
        </View>


    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 48,
    height: 58,
    borderWidth: 1,
    borderColor: "gray",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
    borderRadius: 12,
  },
  inputError: {
    borderColor: "#CC3535",
  },
});

export default ClubOTP