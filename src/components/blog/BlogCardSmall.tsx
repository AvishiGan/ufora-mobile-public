import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { COLORS, SIZES, images } from "../../constants";
import { CardHeadingBold } from "../../constants/fonts";
import styles from "./blogStyles.styles";

const BlogCardSmall = () => {
    return (
            <TouchableOpacity style={styles.blogCardSmall}>
                <Image
                    source={images.CyberSecurity}
                    style={styles.blogCardSmallImage}    
                />
                <View style={styles.blogCardSmallText}>
                    <CardHeadingBold><Text style={styles.blogCardSmallTitle}>Cyber Security</Text></CardHeadingBold>
                </View>
            </TouchableOpacity>
    )
}

export default BlogCardSmall;