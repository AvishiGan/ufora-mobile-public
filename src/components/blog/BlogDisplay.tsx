import React from "react";
import { View, Dimensions } from "react-native";
import BlogCardSmall from "./BlogCardSmall";
import styles from "./blogStyles.styles";
import BlogCard from "../../screens/profile/blogs/blogCard";
import { marketing } from "../../../assets/images";

const BlogDisplay = () => {
    return (
        <View style={styles.blogDisplay}>
            <View style={styles.smallCardContainer}>
                <BlogCardSmall />
                <BlogCardSmall />
            </View>
        </View>
    )
}

export default BlogDisplay;