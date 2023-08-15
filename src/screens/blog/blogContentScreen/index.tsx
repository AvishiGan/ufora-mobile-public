import React from "react";
import { Text, SafeAreaView, View, ScrollView, Image, Dimensions } from "react-native";
import styles from "../../../components/blog/blogStyles.styles";
import { images, COLORS, SIZES } from "../../../constants";
import { BoldHeading, CardHeadingBold, RegularNormal, RegularSmall, SubHeadingSemibold } from "../../../constants/fonts"
import { Circle } from "lucide-react-native";
import { profilePicture } from "../../../../assets";
import { BlogCardSmall, BlogCardLarge } from "../../../components";

const BlogContent = () => {

  const screenWidth = Dimensions.get('window').width;

  // Calculate the width for the blog carousel card to make it responsive
  const cardWidth = screenWidth - 26; // Subtract side margin values
  const smallCardWidth = (screenWidth - 60)/2;
  const largeCardWidth = screenWidth - 46;

  const smallCardData = {
    imageSource: images.CyberSecurity,
    title: "Cyber Security",
    date: "Jul 10th, 2023",
    readTime: "3 mins read",
    authorName: "Samadhi Smith",
    authorProfilePic: profilePicture,
    authorInstitute: "Undergrad at University of Colombo",
    smallCardWidth: smallCardWidth
  };
  
  const largeCardData = {
    imageSource: images.BioTechnology,
    title: "BioTechnology",
    content: "Lorem ipsum dolor sit amet consectetur. Donec vestibulum quisque tortor nulla sodales integer mattis. Lorem ipsum dolor sit amet consectetur. Donec vestibulum quisque tortor nulla sodales integer mattis.",
    date: "Jul 21st, 2023",
    readTime: "7 mins read",
    authorName: "Hiruni Ovitigala",
    authorProfilePic: profilePicture,
    authorInstitute: "Undergrad at University of Colombo",
    largeCardWidth: largeCardWidth
  };

  return (
    <SafeAreaView style = {{flex: 1, gap: 25}}>
      <ScrollView style={{marginHorizontal: SIZES.marginSide}} showsVerticalScrollIndicator={false}>
        <Image
          source={images.BlogCarouselCard}
          resizeMode="cover"
          style={{...styles.upperImage, width: cardWidth}}
        />
        <View style={{...styles.contentWrap, width: cardWidth}}>
          <View style={styles.contentDescription}>
            <View style={{flexDirection: "column"}}>
              <BoldHeading><Text style={{alignSelf: "stretch", color: COLORS.brandGrey}}>Marketing Essentials</Text></BoldHeading>
              <View style={styles.descriptionContainer}>
                <RegularSmall><Text style={{color: COLORS.brandGrey}}>Jul 20th, 2023</Text></RegularSmall>
                <Circle color={COLORS.brandGrey} size={5} fill={COLORS.brandGrey} />
                <RegularSmall><Text style={{color: COLORS.brandGrey}}>5 mins read</Text></RegularSmall>
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
            source={images.BlogContentImage}
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
        <View style={{...styles.relatedArticles, width: cardWidth-20}}>
          <CardHeadingBold><Text style={styles.featuredTitle}>Related Articles</Text></CardHeadingBold>
          <View style={{...styles.cardContainer }}>
            <View style={{ flexDirection: "row", gap: 14 }}>
              <BlogCardSmall data={smallCardData} />
              <BlogCardSmall data={smallCardData} />
            </View>
            <BlogCardLarge data={largeCardData} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );  
}

export default BlogContent;
