/**
 * This code is a common code for creating one single project card which we can use later to create multiple project cards
 */

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { styles } from "./styles";
import PropTypes from "prop-types";
import { Paragraph } from "react-native-paper";

interface ProjectCardData {
  projectImage: any;
  projectTitle: string;
  projectDescription: string;
}

const ProjectCard: React.FC<ProjectCardData> = ({
  projectImage,
  projectTitle,
  projectDescription,
}) => {
  return (
    <View style={styles.singleProjectContainer}>
      <Image style={styles.projectImage} source={projectImage} />
      <View style={styles.projectContentContainer}>
        <View style={styles.projectArticleContainer}>
          <Text style={styles.projectTitle}>{projectTitle}</Text>
          <Paragraph style={styles.projectDescription}>
            {projectDescription}
          </Paragraph>
        </View>
      </View>
    </View>
  );
};

/**
 * This is a type checking for the props which we are passing to the ProjectCard component
 */
ProjectCard.propTypes = {
  projectImage: PropTypes.any.isRequired,
  projectTitle: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
};

export default ProjectCard;
