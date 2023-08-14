import React from "react";
import { View, Dimensions } from "react-native";
import { BlogCardSmall, BlogCardLarge } from "../../components"
import { images } from "../../constants";
import { profilePicture } from "../../../assets/images";
import styles from "./blogStyles.styles";

const BlogDisplay = () => {

    const screenWidth = Dimensions.get('window').width;
    // Calculate the width for the blog card small to make it responsive
    const smallCardWidth = (screenWidth - 40)/2; // Subtract side margin, gap values
    // Calculate the width for the blog card large to make it responsive
    const largeCardWidth = screenWidth - 26; // Subtract side margin values

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
    
    return (
        <View style={styles.blogDisplay}>
            <View style={styles.smallCardContainer}>
                <BlogCardSmall data={smallCardData} />
                <BlogCardSmall data={smallCardData} />
            </View>
            <BlogCardLarge data={largeCardData} />
            <View style={styles.smallCardContainer}>
                <BlogCardSmall data={smallCardData} />
                <BlogCardSmall data={smallCardData} />
            </View>
            <BlogCardLarge data={largeCardData} />
            <BlogCardLarge data={largeCardData} />
        </View>
    );
}

export default BlogDisplay;