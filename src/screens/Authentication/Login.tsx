import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";
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

//navigation
import { RootStackParamList } from "../../navigation/Nav/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
import { FunctionComponent } from "react";
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

    const handleLogin = (values: FormValues) => {
      //const handleLogin = () => Alert.alert("Login");
      // Making the API request
      //console.log(values);
      navigation.navigate("Feed");
      // navigation.navigate("Feed",
      //     {email: JSON.stringify($email), 
      //     password: JSON.stringify($password)}),
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar />
        <View>
          {/* Top section */}
          <Logo
            source={logo}
            mainText="Login"
            subText="Login to your account "
          />

          {/* Bottom section */}
          <View style={{paddingHorizontal: 10, marginTop: 190, alignItems: "center"}}>
            <Formik initialValues={initialValues} onSubmit={handleLogin}>
              {({ handleChange, handleSubmit, values }) => (
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
                      imageSource={require("../../../assets/icons/password.png")}
                      name="password"
                      placeholder="*********"
                      secureTextEntry={true}
                    />
                  </View>
                  <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        marginTop: 10,
                      }}
                    >
                      <RegularSmall>
                        <Text style={{ color: "#2656FF" }}>
                          Forgot Password?
                        </Text>
                      </RegularSmall>
                    </View>
                  </TouchableOpacity>

                  {/* Button */}
                  <View
                    style={{flexDirection: "row", marginTop: 25, alignItems: "center", width: 330, }} >
                    <RegularButton onPress={handleSubmit}>
                      <Text style={{ color: "#FEFEFE" }}>Log In</Text>
                    </RegularButton>
                  </View>
                </View>
              )}
            </Formik>

            <View style={{ marginTop: 20, alignItems: "center", flexDirection: "row", }} >
              <RegularNormal>
                <Text style={{ alignItems: "center" }}>Don't have an account?</Text>
              </RegularNormal>
              <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
    },
});

export default Login;
