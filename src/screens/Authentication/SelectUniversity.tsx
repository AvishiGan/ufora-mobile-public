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
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
type Props = StackScreenProps<RootStackParamList, "Login">;

interface FormValues {
  university: string;
  email: string;
}

const Login: FunctionComponent<Props> = ({ navigation }) => {
    const initialValues: FormValues = {
      university: "",
      email: "",
    };

  const handleNext = async (values: FormValues) => {
    //  try {
    //   const response = await axios.post("http://192.168.1.6:3000/otp/verify/university",{
    //     university: values.university,  
    //     email: values.email,
    //   });

    //   console.log(values);
      navigation.navigate("UniOTP", { email: values.email });

      //Request OTP when create account success
      try{
        const otpResponse = await axios.post("http://192.168.1.6:3000/otp/request", {
            email: values.email,
        });

        console.log("OTP Request Response: ", otpResponse.data);
    } catch (otpError){
        console.error("OTP Request Error: ", otpError);
    }

    //   console.log("API Response: ", response.data);
    // } catch (error: any) {

    //   if (error.response) {
    //     // The request was made and the server responded with a status code that falls out of the range of 2xx
    //     const errorMessage = `${JSON.stringify(error.response.data)}`
    //     alert(errorMessage);
    //     console.error("API error: ", error.response.data);
    //     console.error("API error status: ", error.response.status);
    //   } else if (error.request) {
    //     // The request was made but no response was received
    //     console.error("API error: No response received");
    //     console.log(error);
    //   } else {
    //     // Something happened in setting up the request that triggered an Error
    //     const errorMessage = `${JSON.stringify(error.message)}`
    //     alert(errorMessage);
    //     console.error("API error: ", error.message);
    //   }
    // }
  };

    return (
        <KeyboardAvoidingView keyboardVerticalOffset={255} behavior="padding" style={styles.container}>
        <SafeAreaView />
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
                      onChangeText = {handleChange("university")}
                      value = {values.university}
                    />
                  </View>

                  <View
                    style={{marginTop: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "transparent", borderRadius: 20, padding: 2, }} >
                    <Field
                      component={InputField}
                      imageSource={require("../../../assets/icons/mail.png")}
                      name="email"
                      placeholder="samanp@stu.ucsc.cmb.ac.lk"
                      onChangeText = {handleChange("email")}
                      value = {values.email}
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