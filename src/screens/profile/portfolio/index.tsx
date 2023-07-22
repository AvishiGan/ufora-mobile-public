/**
 * This file contains all the projects information
 */
import React from "react";
import { View, StyleSheet } from "react-native";
import ProjectCard from "../../profile/portfolio/projectCard/index";
import { marketing, security, HCI, office } from "../../../../assets/images";
import { styles } from "./styles";

const ProfilePortfolioSection = () => {
  return (
    <View style={styles.projectActionContainer}>
      {/* Add a new post bar comes here */}
      <ProjectCard
        projectImage={marketing}
        projectTitle="University Social Media App"
        projectDescription="Introducing University Social Media App, 
        designed to revolutionize campus connections and foster an engaging online community for students and faculty alike."
      />

      <ProjectCard
        projectImage={security}
        projectTitle="Hostel Booking & Management System"
        projectDescription="Welcome to advanced Hostel Booking & Management System, 
        streamlining accommodations and ensuring seamless experiences for users"
      />

      <ProjectCard
        projectImage={HCI}
        projectTitle="Robotics & IOT"
        projectDescription="Unlock the potential of the future with our Robotics & IoT innovations."
      />
    </View>
  );
};

export default ProfilePortfolioSection;
