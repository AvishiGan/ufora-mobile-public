import React from "react";
import { Text, SafeAreaView, View, ScrollView, Image, Dimensions } from "react-native";
import styles from "../../../components/blog/blogStyles.styles";
import { images, COLORS, SIZES } from "../../../constants";
import { BoldHeading, RegularNormal, RegularSmall, SubHeadingSemibold } from "../../../constants/fonts"
import { profilePicture } from "../../../../assets";

const ProjectContent = () => {

  const screenWidth = Dimensions.get('window').width;

  // Calculate the width for the blog carousel card to make it responsive
  const cardWidth = screenWidth - 26; // Subtract side margin values

  return (
    <SafeAreaView style = {{flex: 1, gap: 25}}>
      <ScrollView style={{marginHorizontal: SIZES.marginSide}} showsVerticalScrollIndicator={false}>
        <Image
          source={images.ProjectCardLargeImage}
          resizeMode="cover"
          style={{...styles.upperImage, width: cardWidth}}
        />
        <View style={{...styles.contentWrap, width: cardWidth}}>
          <View style={styles.contentDescription}>
            <View style={{flexDirection: "column"}}>
              <BoldHeading><Text style={{alignSelf: "stretch", color: COLORS.brandGrey}}>University Social Media App</Text></BoldHeading>
              <View style={styles.descriptionContainer}>
                <RegularSmall><Text style={{color: COLORS.brandGrey}}>Jul 20th, 2023</Text></RegularSmall>
              </View>
            </View>
            <View style={styles.authorDetails}>
              <Image
                source={profilePicture}
                style={styles.contentProfile}
              />
              <View style={{...styles.authorBio, width: cardWidth-106}}>
                <SubHeadingSemibold><Text style={styles.bioName}>Pasan Phelps</Text></SubHeadingSemibold>
                  <View>
                      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.bioInstitute}>
                        <RegularNormal>Undergrad at University of Colombo</RegularNormal>
                      </Text>
                  </View>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.blogBodyText}>
             <RegularNormal>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere enim quis sapien commodo ullamcorper. Vestibulum mollis felis eget magna cursus aliquam. Quisque condimentum lobortis placerat.</RegularNormal>
            </Text>
          </View>
          <View>
            <Text style={styles.blogBodyText}>
             <RegularNormal>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere enim quis sapien commodo ullamcorper. Vestibulum mollis felis eget magna cursus aliquam. Quisque condimentum lobortis placerat.</RegularNormal>
            </Text>
          </View>
          <Image
            source={images.ProjectContentImage}
            resizeMode="cover"
            style={{...styles.blogBodyImage, width: cardWidth-20}}
          />
          <View>
            <Text style={styles.blogBodyText}>
             <RegularNormal>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere enim quis sapien commodo ullamcorper. Vestibulum mollis felis eget magna cursus aliquam. Quisque condimentum lobortis placerat.</RegularNormal>
            </Text>
          </View>
          <View>
            <Text style={styles.blogBodyText}>
             <RegularNormal>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere enim quis sapien commodo ullamcorper. Vestibulum mollis felis eget magna cursus aliquam. Quisque condimentum lobortis placerat.</RegularNormal>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );  
}

export default ProjectContent;
