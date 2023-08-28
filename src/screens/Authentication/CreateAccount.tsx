import React, { FunctionComponent, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ImageSourcePropType, Text, View, Image } from "react-native";
import logo from "../../../assets/logo.png";
import { User, Building } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import Authentication from "../../components/authentication/auth/Authentication";
import Logo from "../../components/authentication/logo/Logo";
import RegularNormal from "../../constants/fonts/RegularNormal";
import RegularButton from "../../components/authentication/buttons/RegularButton";
import SemiBoldBig from "../../constants/fonts/SemiboldBig";

//navigation
import { RootStackParamList } from "../../navigation/navigator/WelcomeNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import SmallerRegular from "../../constants/fonts/SmallerRegular";
type Props = StackScreenProps<RootStackParamList, "CreateAccount">;

  interface CustomImageProps {
    source: ImageSourcePropType;
  }

const CreateAccount: FunctionComponent<Props> = ({ navigation }) => {
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
      <View style={{ alignItems: "center" }}>
        {/* Top section */}
        <Logo
          source={logo}
          mainText="Create Account"
          subText="Choose an Account type to get started "
        />

        {/* Bottom section */}
        <TouchableOpacity
          onPress={handleStudentClick}
          style={{ marginTop: 120, flexDirection: "row", alignItems: "center" }}
        >
          <View>
            <TouchableOpacity
              onPress={handleStudentClick}
              style={{
                borderColor: activeButton === "student" ? "#2656FF" : "#B8B8B8",
                borderWidth: 1,
                borderRadius: 15,
                backgroundColor:
                  activeButton === "student" ? "#2656FF" : "transparent",
                justifyContent: "center",
                alignItems: "center",
                height: 106,
                width: 280,
              }}
            >
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <User
                  size={40}
                  color={activeButton === "student" ? "#FEFEFE" : "#B8B8B8"}
                />
              </View>
              <SemiBoldBig
                fontColor={activeButton === "student" ? "#FEFEFE" : "#B8B8B8"}
                style={{
                  color: activeButton === "student" ? "#FEFEFE" : "#B8B8B8",
                }}
              >
                Student
              </SemiBoldBig>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleBusinessClick}
          style={{ marginTop: 10, flexDirection: "row", alignItems: "center" }}
        >
          <View>
            {/* Use Lucide icon component */}
            <TouchableOpacity
              onPress={handleBusinessClick}
              style={{
                borderColor:
                  activeButton === "business" ? "#2656FF" : "#B8B8B8",
                borderWidth: 1,
                borderRadius: 15,
                backgroundColor:
                  activeButton === "business" ? "#2656FF" : "transparent",
                justifyContent: "center",
                alignItems: "center",
                height: 106,
                width: 280,
              }}
            >
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Building
                  size={40}
                  color={activeButton === "business" ? "#FEFEFE" : "#B8B8B8"}
                />
              </View>
              <SemiBoldBig
                fontColor={activeButton === "business" ? "#FEFEFE" : "#B8B8B8"}
                style={{
                  color: activeButton === "business" ? "#FEFEFE" : "#B8B8B8",
                }}
              >
                Business
              </SemiBoldBig>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        {/* Button */}
        <View style={{ marginTop: 30, width: 300 }}>
          <RegularButton
            onPress={() => {
              if (activeButton === "student") {
                navigation.navigate("CreateStudentAccount");
              } else if (activeButton === "business") {
                navigation.navigate("CreateBusinessAccount");
              }
            }}
          >
            <Text style={{ color: "#FEFEFE" }}>Next</Text>
          </RegularButton>
        </View>

        <View
          style={{ marginTop: 15, alignItems: "center", flexDirection: "row" }}
        >
          <RegularNormal>
            <Text style={{ alignItems: "center" }}>
              Already have an account?
            </Text>
          </RegularNormal>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <View>
              <RegularNormal>
                <Text style={{ color: "#2656FF" }}>Login</Text>
              </RegularNormal>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Authentication />

      <View
        style={{
          justifyContent: "center",
          marginTop: 20,
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <SmallerRegular>
          <Text style={{ alignItems: "center" }}>
            By Creating an Account, you agree to our{" "}
          </Text>
        </SmallerRegular>
        <TouchableOpacity onPress={() => navigation.navigate("Feed")}>
          <View>
            <SmallerRegular>
              <Text style={{ color: "#2656FF" }}>Terms of Service</Text>
            </SmallerRegular>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CreateAccount;
