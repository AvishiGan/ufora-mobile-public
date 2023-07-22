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
import InputField from "../../components/inputField/InputField";
import Logo from "../../components/logo/Logo";
import RegularNormal from "../../constants/fonts/RegularNormal";
import { Field, Formik } from "formik";

//navigation
import { RootStackParamList } from "../../navigation/Nav/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
import { FunctionComponent } from "react";
import SmallerRegular from "../../constants/fonts/SmallerRegular";
type Props = StackScreenProps<RootStackParamList, "Login">;

interface FormValues {
  university: string;
  password: string;
}

const Login: FunctionComponent<Props> = ({ navigation }) => {
    const initialValues: FormValues = {
      university: "",
      password: "",
    };

    const handleNext = (values: FormValues) => {
      //const handleNext = () => Alert.alert("Login");
      // Making the API request
      //console.log(values);
      navigation.navigate("UniOTP");
    };
  
    const Link = () => {
      const handleForgotPassword = () => {};
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar />
        <View>
          {/* Top section */}
          <Logo
            source={logo}
            mainText="Create Account"
            subText="Create a Student Account"
          />

          {/* Bottom section */}
          <View style={{paddingHorizontal: 10, marginTop: 250, alignItems: "center", justifyContent: "center"}}>
            <Formik initialValues={initialValues} onSubmit={handleNext}>
              {({ handleChange, handleSubmit, values }) => (
                <View>
                  <View
                    style={{
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
                      imageSource={require("../../../assets/icons/user.png")}
                      name="university"
                      placeholder="University of Colombo"
                    />
                  </View>

                  <View
                    style={{marginTop: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "transparent", borderRadius: 20, padding: 2, }} >
                    <Field
                      component={InputField}
                      imageSource={require("../../../assets/icons/password.png")}
                      name="password"
                      placeholder="*********"
                      secureTextEntry={true}
                    />
                  </View>

                    <View style={{ marginTop: 20, alignItems: 'center', justifyContent: "center",flexDirection: 'row'}}>
                      <SmallerRegular>
                          <Text style={{ alignItems: 'center'}}>I agree to the</Text>
                      </SmallerRegular>
                      <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
                          <View>
                          <SmallerRegular>
                              <Text style={{ color: '#2656FF' }}>Terms & conditions</Text>
                          </SmallerRegular>
                          </View>
                      </TouchableOpacity>
                      <SmallerRegular>
                          <Text style={{ alignItems: 'center'}}>and the</Text>
                      </SmallerRegular>
                      <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
                          <View>
                          <SmallerRegular>
                              <Text style={{ color: '#2656FF' }}>privacy policy</Text>
                          </SmallerRegular>
                          </View>
                      </TouchableOpacity>
                    </View>

                  {/* Button */}
                    <View style={{flexDirection: "row",marginTop: 25,alignItems: "center", width: 340, gap:10}} >
                        <RegularButton onPress={handleSubmit}>
                            <Text style={{ color: "#FEFEFE" }}>Next</Text>
                        </RegularButton>
                    </View>
                </View>
              )}
            </Formik>

            <View style={{ marginTop: 20, alignItems: 'center',flexDirection: 'row', marginBottom: 30}}>
                <RegularNormal>
                    <Text style={{ alignItems: 'center'}}>Can't find your university?</Text>
                </RegularNormal>
                <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
                    <View>
                    <RegularNormal>
                        <Text style={{ color: '#2656FF' }}>Contact Support</Text>
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
