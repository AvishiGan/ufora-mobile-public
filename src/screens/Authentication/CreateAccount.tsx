import React, { FunctionComponent, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ImageSourcePropType,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import logo from "../../../assets/logo.png";
import google from "../../../assets/icons/google.png";
import apple from "../../../assets/icons/google.png";
import User from "../../../assets/icons/user.png";
import UserWhite from "../../../assets/icons/user-white.png";
import Business from "../../../assets/icons/business.png"
import BusinessWhite from "../../../assets/icons/building-white.png";
import Password from "../../../assets/icons/password.png";
import Eyeoff from "../../../assets/icons/eye-off.png";
import Mail from "../../../assets/icons/mail.png";
import { GestureResponderEvent } from "react-native";
import { TouchableOpacity } from "react-native";
import Authentication, {
  handlePressGoogle,
  handlePressApple,
} from "../../components/auth/Authentication";
import BoldText from "../../constants/fonts/BoldHeading";
import MediumText from "../../constants/fonts/SmallMedium";
import RegularBig from "../../constants/fonts/RegularBig";
import Logo from "../../components/logo/Logo";
import RegularNormal from "../../constants/fonts/RegularNormal";
import RegularButton from "../../components/buttons/RegularButton";
import SemiBoldBig from "../../constants/fonts/SemiboldBig";
import UnfilledButton from "../../components/buttons/UnfilledButton";


interface CustomImageProps {
  source: ImageSourcePropType;
}

const CustomImage: FunctionComponent<CustomImageProps> = ({ source }) => {
  return <Image source={source} />;
};

interface CreateAccountProps {
  onStudentClick: () => void;
  onBusinessClick: () => void;
  }

const CreateAccount: FunctionComponent<CreateAccountProps> = (onStudentClick, onBusinessClick) => {
  const [activeButton, setActiveButton] = useState("");

  const handleStudentClick = () => {
    setActiveButton("student");
    onStudentClick();
  };

  const handleBusinessClick = () => {
    setActiveButton("business");
    onBusinessClick();
  };

  return (
    <>
      <StatusBar />
      <View>
        {/* Top section */}
        <Logo source={logo} mainText="Create Account" subText="Choose an Account type to get started "/>

        {/* Bottom section */}
        <TouchableOpacity
        onPress={handleStudentClick}
        style={{marginTop: 130,marginLeft: 50,flexDirection: 'row',alignItems: 'center',}}
      >
        <View
          onPress={handleStudentClick}
        >
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
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    style={{ height: 40, width: 40 }}
                    source={UserWhite}
                  />
                </View>
              ) : (
                <Image
                  style={{ height: 40, width: 40}}
                  source={User}
                />
              )}
            </View>

            <SemiBoldBig
              fontColor="#B8B8B8"
              style={{color: activeButton === 'student' ? '#FEFEFE' : '#B8B8B8'}}
            >
              Student
            </SemiBoldBig>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

        <TouchableOpacity
          onPress={handleBusinessClick}
          style={{marginTop: 10,marginLeft: 50,flexDirection: 'row',alignItems: 'center'}}
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
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    style={{ height: 40, width: 40 }}
                    source={BusinessWhite}
                  />
                </View>
              ) : (
                <Image
                  style={{ height: 40, width: 40}}
                  source={Business}
                />
              )}
            </View>
            <SemiBoldBig fontColor="#B8B8B8" style={activeButton === 'business' ? { color: '#FEFEFE' } : { color: '#B8B8B8' }}>
              Business
            </SemiBoldBig>

            </TouchableOpacity>
          </View>
        </TouchableOpacity>


          {/* Button */}
          <View style={{ marginTop: 30, alignItems: "center", marginLeft:42, marginRight:42}}>
            <RegularButton onPress={() => {}}>
              <Text style={{ color: "#FEFEFE" }}>Next</Text>
            </RegularButton>
          </View>

          <View style={{ marginTop: 20, alignItems: "center" }}>
            <RegularNormal style={{alignItems: "center" }}>
              Already have an account? Login
            </RegularNormal>
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
