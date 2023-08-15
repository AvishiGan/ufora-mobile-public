import React from 'react';
import { View, Dimensions } from 'react-native';
import projectStyles from './projectStyles.style'
import styles from '../blog/blogStyles.styles';
import { ProjectCardLarge, ProjectCardSmall }  from '../../components'
import { profilePicture } from '../../../assets/images';
import { images } from '../../constants';

interface ProjectsProps {
  navigation : any;
}

const Projects: React.FC<ProjectsProps> = ({navigation}) => {

  const largeCardData = {
    imageSource: images.UniversitySocialMediaApp,
    title: "University Social Media App",
    content: "Lorem ipsum dolor sit amet consectetur. Donec vestibulum quisque tortor nulla sodales integer mattis. Lorem ipsum dolor sit amet consectetur. Donec vestibulum quisque tortor nulla sodales integer mattis.",
    date: "Jul 21st, 2023",
    authorName: "Hiruni Ovitigala",
    authorProfilePic: profilePicture,
    authorInstitute: "Undergrad at University of Colombo",
  };

  const smallCardData = {
    imageSource: images.ProjectCardLargeImage,
    title: "University Social Media App",
    date: "Jul 20th, 2023",
    readTime: "3 mins read",
    authorName: "Samadhi Smith",
    authorProfilePic: profilePicture,
    authorInstitute: "Undergrad at University of Colombo",
  };

  const screenWidth = Dimensions.get('window').width;
  
  return (
    <View style={projectStyles.projectContainer}>
        <View style={styles.smallCardContainer}>
          <ProjectCardSmall data={smallCardData} navigation={navigation} />
          <ProjectCardSmall data={smallCardData} navigation={navigation} />
        </View>
        <ProjectCardLarge data={largeCardData}/>
        <View style={styles.smallCardContainer}>
          <ProjectCardSmall data={smallCardData} navigation={navigation} />
          <ProjectCardSmall data={smallCardData} navigation={navigation} />
        </View>
        <ProjectCardLarge data={largeCardData}/>
        <ProjectCardLarge data={largeCardData}/>
    </View>
  )
}

export default Projects;