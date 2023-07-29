import React, { FunctionComponent, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ImageSourcePropType,
  Text,
  View,
  Image,
} from "react-native";
import logo from "../../../assets/logo.png";
import User from "../../../assets/icons/user.png";
import UserWhite from "../../../assets/icons/user-white.png";
import Business from "../../../assets/icons/business.png"
import BusinessWhite from "../../../assets/icons/building-white.png";
import { TouchableOpacity } from "react-native";
import Authentication, {
  handlePressGoogle,
  handlePressApple,
} from "../../components/auth/Authentication";
import Logo from "../../components/logo/Logo";
import RegularNormal from "../../constants/fonts/RegularNormal";
import RegularButton from "../../components/buttons/RegularButton";
import SemiBoldBig from "../../constants/fonts/SemiboldBig";
import CreateBusinessAccount from "./CreateBusinessAccount";

//navigation
import { RootStackParamList } from "../../navigation/Nav/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
type Props = StackScreenProps<RootStackParamList, "CreateAccount">;

interface CustomImageProps {
  source: ImageSourcePropType;
}

const CreateAccount: FunctionComponent<Props> = ({navigation}) => {
  const [activeButton, setActiveButton] = useState("");

  const handleStudentClick = () => {
    setActiveButton("student");
  };

  const handleBusinessClick = () => {
    setActiveButton("business");
  };

  return (
    <>
      <StatusBar />
      <View style={{alignItems: "center"}}>
        {/* Top section */}
        <Logo source={logo} mainText="Create Account" subText="Choose an Account type to get started "/>

        {/* Bottom section */}
        <TouchableOpacity
          onPress={handleStudentClick}
          style={{marginTop: 130,flexDirection: 'row',alignItems: 'center',}} >
        <View onPress={handleStudentClick} >
          {activeButton === 'student' && (
            <View/>
          )}
        </View>

        <View>
          <TouchableOpacity
            onPress={handleStudentClick}
            style={{borderColor: activeButton === 'student' ? '#2656FF' : '#B8B8B8',borderWidth: 1,borderRadius: 15,backgroundColor: activeButton === 'student' ? '#2656FF' : 'transparent',justifyContent: 'center',alignItems: 'center',height: 106,width: 280, }}
          >
              <View>
              {activeButton === 'student' ? (
                <View
                  style={{justifyContent: 'center',alignItems: 'center'}}>
                  <Image style={{ height: 40, width: 40 }} source={UserWhite}/>
                </View>
              ) : (
                <Image style={{ height: 40, width: 40}} source={User}/>
              )}
            </View>

            <SemiBoldBig fontColor="#B8B8B8" style={{color: activeButton === 'student' ? '#FEFEFE' : '#B8B8B8'}}>
              Student
            </SemiBoldBig>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

        <TouchableOpacity
          onPress={handleBusinessClick}
          style={{marginTop: 10,flexDirection: 'row',alignItems: 'center'}}
        >
          <TouchableOpacity
            onPress={handleBusinessClick}
          >
            {activeButton === 'business' && (
              <View/>
            )}
          </TouchableOpacity>

          <View>
            <TouchableOpacity
              onPress={handleBusinessClick}
              style={{borderColor: activeButton === 'business' ? '#2656FF' : '#B8B8B8',borderWidth: 1,borderRadius: 15,backgroundColor: activeButton === 'business' ? '#2656FF' : 'transparent',justifyContent: 'center',alignItems: 'center',height: 106,width: 280}}
            >
              <View>
              {activeButton === 'business' ? (
                <View
                  style={{justifyContent: 'center',alignItems: 'center'}}>
                  <Image style={{ height: 40, width: 40 }} source={BusinessWhite}/>
                </View>
              ) : (
                <Image style={{ height: 40, width: 40}} source={Business}/>
              )}
            </View>
            <SemiBoldBig fontColor="#B8B8B8" style={activeButton === 'business' ? { color: '#FEFEFE' } : { color: '#B8B8B8' }}>
              Business
            </SemiBoldBig>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>


          {/* Button */}
          <View style={{ marginTop: 30, width: 300}}>
            <RegularButton onPress={() => {
              if (activeButton === 'student'){
                navigation.navigate("CreateStudentAccount");
              } else if (activeButton === 'business'){
                navigation.navigate("CreateBusinessAccount")
              }
            }}>
              <Text style={{ color: "#FEFEFE" }}>Next</Text>
            </RegularButton>
          </View>

          <View style={{ marginTop: 20, alignItems: "center", flexDirection: "row", }}>
            <RegularNormal>
            <Text style={{ alignItems: "center" }}>Already have an account?</Text>
            </RegularNormal>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <View>
                <RegularNormal>
                 <Text style={{ color: "#2656FF" }}>Login</Text>
                </RegularNormal>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Authentication
          onPressGoogle={handlePressGoogle}
          onPressApple={handlePressApple}
        />

    </>
  );
};

export default CreateAccount;
