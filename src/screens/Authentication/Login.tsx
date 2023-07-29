import { StatusBar } from "expo-status-bar";
import { Text, View, KeyboardAvoidingView, StyleSheet } from "react-native";
import logo from "../../../assets/logo.png";
import RegularButton from "../../components/buttons/RegularButton";
import { TouchableOpacity } from "react-native";
import Authentication, {
  handlePressGoogle,
  handlePressApple,
} from "../../components/auth/Authentication";
import InputField from "../../components/inputField/InputField";
import Logo from "../../components/logo/Logo";
import RegularNormal from "../../constants/fonts/RegularNormal";
import RegularSmall from "../../constants/fonts/RegularSmall";
import { Field, Formik } from "formik";

import Constants from 'expo-constants';

//navigation
import { RootStackParamList } from "../../navigation/Nav/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
import { FunctionComponent, useState } from "react";
import axios from "axios";
type Props = StackScreenProps<RootStackParamList, "Login">;

interface FormValues {
  email: string;
  password: string;
}

const Login: FunctionComponent<Props> = ({ navigation }) => {
  const initialValues: FormValues = {
    email: "",
    password: "",
  };

  const handleLogin = async (values: FormValues) => {
    try {
      const ipAddress = Constants.expoConfig?.extra?.IP;
      const response = await axios.post("http://${ipAddress}:3000/login",{
        username: values.email,
        password: values.password
      });

      console.log(values);
      navigation.navigate("Feed");

      console.log("API Response: ", response.data);
    } catch (error: any) {

      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        console.error("API error: ", error.response.data);
        console.error("API error status: ", error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("API error: No response received");
        console.log(error);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("API error: ", error.message);
      }
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar />
      <View>
        {/* Top section */}
        <Logo source={logo} mainText="Login" subText="Login to your account " />

        {/* Bottom section */}
        <View
          style={{
            paddingHorizontal: 10,
            marginTop: 190,
            alignItems: "center",
          }}
        >
          <Formik 
          initialValues={initialValues} 
          onSubmit={handleLogin} 
          // validate={(values: FormValues) => {
          //   const errors: Partial<FormValues> = {};

          //   //validate username
          //   if (!values.email){
          //     errors.email = "Username is required";
          //   }

          //   if (!values.password){
          //     errors.password = "Password is required";
          //   }
          // }}
          >
            {({ handleChange, handleSubmit, values, errors }) => (
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "transparent",
                    borderRadius: 20,
                    padding: 2,
                  }}
                >
                  <Field
                    component={InputField}
                    imageSource={require("../../../assets/icons/user.png")}
                    name="email"
                    placeholder="Username / Email"
                    onChangeText={handleChange("email")}
                    value={values.email}
                  />
                </View>
                {errors.email && <Text>{errors.email}</Text>}

                <View
                  style={{
                    marginTop: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "transparent",
                    borderRadius: 20,
                    padding: 2,
                  }}
                >
                  <Field
                    component={InputField}
                    imageSource={require("../../../assets/icons/password.png")}
                    name="password"
                    placeholder="*********"
                    secureTextEntry={true}
                    onChangeText={handleChange("password")}
                    value={values.password}
                  />


                </View>
                {errors.password && <Text>{errors.password}</Text>}

                <TouchableOpacity
                  onPress={() => navigation.navigate("ForgotPassword")}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      marginTop: 10,
                    }}
                  >
                    <RegularSmall>
                      <Text style={{ color: "#2656FF" }}>Forgot Password?</Text>
                    </RegularSmall>
                  </View>
                </TouchableOpacity>

                {/* Button */}
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 25,
                    alignItems: "center",
                    width: 330,
                  }}
                >
                  <RegularButton onPress={handleSubmit}>
                    <Text style={{ color: "#FEFEFE" }}>Log In</Text>
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
            }}
          >
            <RegularNormal>
              <Text style={{ alignItems: "center" }}>
                Don't have an account?
              </Text>
            </RegularNormal>
            <TouchableOpacity
              onPress={() => navigation.navigate("CreateAccount")}
            >
              <View>
                <RegularNormal>
                  <Text style={{ color: "#2656FF" }}>Create Account</Text>
                </RegularNormal>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Authentication
          onPressGoogle={handlePressGoogle}
          onPressApple={handlePressApple}
        />
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

export default Login;
