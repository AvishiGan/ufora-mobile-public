import { StatusBar } from "expo-status-bar";
import { User, Key } from "lucide-react-native";
import { Text, View, KeyboardAvoidingView, StyleSheet } from "react-native";
import logo from "../../../assets/logo.png";
import RegularButton from "../../components/authentication/buttons/RegularButton";
import { TouchableOpacity } from "react-native";
import Authentication from "../../components/authentication/auth/Authentication";
import InputField from "../../components/authentication/inputField/InputField";
import Logo from "../../components/authentication/logo/Logo";
import RegularNormal from "../../constants/fonts/RegularNormal";
import RegularSmall from "../../constants/fonts/RegularSmall";
import { Field, Formik } from "formik";

//navigation
import { RootStackParamList } from "../../navigation/navigator/WelcomeNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import { FunctionComponent, useState } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import * as Yup from "yup";
import envs from "../../services/config/env";
type Props = StackScreenProps<RootStackParamList, "Login">;

interface FormValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object({
  email: Yup.string().required("Username / Email is Required"),
  password: Yup.string().required("Password is Required"),
});

const Login: FunctionComponent<Props> = ({ navigation }) => {
  const { API_PATH } = envs;
  const [errorMessage, setErrorMessage] = useState<string>("");
  const initialValues: FormValues = {
    email: "",
    password: "",
  };

  const handleLogin = async (values: FormValues) => {
    try {
      //const response = await axios.post(`${API_PATH}/login`,{
       const response = await axios.post("http://10.22.167.182:3000/login", {
        username: values.email,
        password: values.password,
      });

      //console.log(values);
      await SecureStore.setItemAsync("token", response.data.Success.token);
      //console.log("Token stored in SecureStore.");
      navigation.navigate("Main");

      //console.log("API Response: ", response.data);
      //console.log("API Response: ", response.status)
    } catch (error: any) {
      if (error.response) {
        //console.error("API error: ", error.response.data);
        //console.error("API error status: ", error.response.status);

        if (error.response.status === 404) {
          setErrorMessage("Invalid Login Credentials");
        } else if (
          error.response.status === 401 &&
          error.response.data.InvalidLogin
        ) {
          const message = error.response.data.InvalidLogin.message;
          if (
            message ===
            "User Account is Locked. Please verify email to continue"
          ) {
            setErrorMessage("Locked account. Please verify email to continue.");
          } else {
            setErrorMessage("Invalid Login Credentials");
          }
        } else {
          setErrorMessage(
            "Unexpected response status: " + error.response.status
          );
        }
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
                    backgroundColor: "transparent",
                    borderRadius: 20,
                    padding: 2,
                  }}
                >
                  <Field
                    component={InputField}
                    error={touched.email && errors.email}
                    iconComponent={
                      <User
                        color={
                          touched.email && errors.email ? "#CC3535" : "#B8B8B8"
                        }
                        size={24}
                      />
                    }
                    name="email"
                    placeholder="Username / Email"
                    onChangeText={handleChange("email")}
                    value={values.email}
                    onBlur={handleBlur("email")}
                  />
                </View>

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
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ marginLeft: 8 }}>
                    <RegularSmall>
                      {errorMessage ? (
                        <Text style={{ color: "#CC3535", fontSize: 12 }}>
                          {errorMessage}
                        </Text>
                      ) : null}
                    </RegularSmall>
                  </View>

                  <TouchableOpacity
                    onPress={() => navigation.navigate("ForgotPassword")}
                  >
                    <View
                      style={{
                        justifyContent: "flex-end",
                      }}
                    >
                      <RegularSmall>
                        <Text style={{ color: "#2656FF" }}>
                          Forgot Password?
                        </Text>
                      </RegularSmall>
                    </View>
                  </TouchableOpacity>
                </View>

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
        <Authentication />
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
