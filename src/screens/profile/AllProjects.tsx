/**
 * This file contains all the projects information
 */
import React from "react";
import { View } from "react-native";
import { ProjectCard, ContentAdditionBar } from "../../components";
import { mobileApp, hostel, robotic } from "../../../assets/images";
import { styles } from "../../components/profile/styles";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfilePortfolioSection = () => {
  return (
    <SafeAreaView>
      <View>
        {/* <ScrollView> */}
          <View style={styles.projectActionContainer}>
            <ContentAdditionBar title="Add a new project" />
            <ProjectCard
              projectImage={mobileApp}
              projectTitle="University Social Media App"
              projectDescription="Introducing University Social Media App, designed to revolutionize campus connections and foster an engaging online community for students and faculty alike."
            />

            <ProjectCard
              projectImage={hostel}
              projectTitle="Hostel Booking & Management System"
              projectDescription="Welcome to advanced Hostel Booking & Management System, streamlining accommodations and ensuring seamless experiences for users"
            />

            <ProjectCard
              projectImage={robotic}
              projectTitle="Robotics & IOT"
              projectDescription="Unlock the potential of the future with our Robotics & IoT innovations."
            />
          </View>
        {/* </ScrollView> */}
      </View>
    </SafeAreaView>
  );
};

export default ProfilePortfolioSection;
