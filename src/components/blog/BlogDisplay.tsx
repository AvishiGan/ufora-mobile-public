import React from "react";
import { View } from "react-native";
import { BlogCardSmall, BlogCardLarge } from "../../components"
import styles from "./blogStyles.styles";

const BlogDisplay = () => {
    return (
        <View style={styles.blogDisplay}>
            <View style={styles.smallCardContainer}>
                <BlogCardSmall />
                <BlogCardSmall />
            </View>
            <BlogCardLarge />
            <View style={styles.smallCardContainer}>
                <BlogCardSmall />
                <BlogCardSmall />
            </View>
            <BlogCardLarge />
            <BlogCardLarge />
        </View>
    )
}

export default BlogDisplay;