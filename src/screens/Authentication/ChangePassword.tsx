import React, { useState } from "react";
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import Logo from "../../components/authentication/logo/Logo";
import logo from "../../../assets/logo.png";
import RegularButton from "../../components/authentication/buttons/RegularButton";
import RegularNormal from "../../constants/fonts/RegularNormal";
import InputField from "../../components/authentication/inputField/InputField";
import { Key } from "lucide-react-native";

//navigation
import { RootStackParamList } from "../../navigation/navigator/WelcomeNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import { FunctionComponent } from "react";
import { Field, Formik } from "formik";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import * as Yup from "yup";
import RegularSmall from "../../constants/fonts/RegularSmall";
import envs from "../../services/config/env";
import { API_PATH } from '@env';
type Props = StackScreenProps<RootStackParamList, "ChangePassword">;

interface FormValues {
  password: string;
  confirmPassword: string;
}

const validationSchema = Yup.object({
  password: Yup.string().required("Password is Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password does not match")
    .required("Please Re-type your password"),
});

const ChangePassword: FunctionComponent<Props> = ({ navigation }) => {
  // const { API_PATH } = envs;
  const [errorMessage, setErrorMessage] = useState<string>("");

  const initialValues: FormValues = {
    password: "",
    confirmPassword: "",
  };

  const handleLogin = async (values: FormValues) => {
    try {
      const token = await SecureStore.getItemAsync("password_reset_token");

       const response = await axios.post(`${API_PATH}/password/reset`, {
      // const response = await axios.post("http://192.168.1.7:3000/api/password/reset", {
        password: values.password,
        confirm_password: values.confirmPassword,
        password_reset_token: token,
      });
      console.log(values);

      navigation.navigate("Login");
      console.log("API Response: ", response.data);
    } catch (error: any) {
      if (error.response.status === 500) {
        setErrorMessage("Server Error");
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
      keyboardVerticalOffset={255}
      behavior="padding"
      style={styles.container}
    >
      <StatusBar />
      <View style={{ marginTop: 0 }}>
        {/* Top section */}
        <Logo
          source={logo}
          mainText="Change Password"
          subText="Please enter a new password to continue "
        />

        {/* Bottom section */}
        <View
          style={{
            paddingHorizontal: 10,
            marginTop: 280,
            alignItems: "center",
          }}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({
              handleChange,
              handleSubmit,
              values,
              errors,
              handleBlur,
              touched,
            }) => (
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "transparent",
                    borderRadius: 20,
                  }}
                >
                  <Field
                    component={InputField}
                    error={touched.password && errors.password}
                    iconComponent={
                      <Key
                        color={
                          touched.password && errors.password
                            ? "#CC3535"
                            : "#B8B8B8"
                        }
                        size={24}
                      />
                    }
                    name="password"
                    placeholder="Password"
                    secureTextEntry={true}
                    showPasswordToggle={true}
                    onChangeText={handleChange("password")}
                    value={values.password}
                    onBlur={handleBlur("password")}
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
                  }}
                >
                  <Field
                    component={InputField}
                    error={touched.confirmPassword && errors.confirmPassword}
                    iconComponent={
                      <Key
                        color={
                          touched.confirmPassword && errors.confirmPassword
                            ? "#CC3535"
                            : "#B8B8B8"
                        }
                        size={24}
                      />
                    }
                    name="ConfirmPassword"
                    placeholder="Re-Type Password"
                    secureTextEntry={true}
                    showPasswordToggle={true}
                    onChangeText={handleChange("confirmPassword")}
                    value={values.confirmPassword}
                    onBlur={handleBlur("confirmPassword")}
                  />
                </View>

                <View
                  style={{ marginTop: 0, flexDirection: "row", marginLeft: 8 }}
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
                    flexDirection: "row",
                    marginTop: 15,
                    alignItems: "center",
                    width: 330,
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
            style={{ marginTop: 30, alignItems: "center", marginBottom: 10 }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Feed")}>
              <View>
                <RegularNormal>
                  <Text style={{ color: "#2656FF" }}>
                    Can't reset your password?
                  </Text>
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
});

export default ChangePassword;
