/**
 * This code is a common code for creating one single project card which we can use later to create multiple project cards
 */

import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";
import PropTypes from "prop-types";
import { PostAuthorBioFooter } from "../..";
import { profileData } from "../../../screens/profile/data";
import { CardHeadingBold, RegularSmall } from "../../../constants";

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
          <CardHeadingBold>{projectTitle}</CardHeadingBold>
          <RegularSmall>{projectDescription}</RegularSmall>
        </View>
      </View>
      {/* PostAuthorBioFooter component */}
      <PostAuthorBioFooter data={profileData} />
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
