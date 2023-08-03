import React from "react";
import { View } from "react-native";
import BlogCardSmall from "./BlogCardSmall";
import styles from "./blogStyles.styles";

const BlogDisplay = () => {
    return (
        <View style={styles.blogDisplay}>
            <View style={styles.smallCardContainer}>
                <BlogCardSmall />
            </View>
            
        </View>
    )
}

export default BlogDisplay;