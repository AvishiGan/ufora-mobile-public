import React from "react";
import { View, TouchableOpacity, Image, Text, Dimensions } from "react-native";
import { COLORS, SIZES, images } from "../../constants";
import { CardHeadingBold, NameSmallSemibold, RegularSmall, SmallerRegular } from "../../constants/fonts";
import { Circle } from "lucide-react-native";
import { profilePicture } from "../../../assets/images";
import styles from "./blogStyles.styles";

const BlogCardSmall = () => {

    const screenWidth = Dimensions.get('window').width;
  
    // Calculate the width for the blog carousel card to make it responsive
    const smallCardWidth = (screenWidth - 40)/2; // Subtract side margins values

    return (
            <TouchableOpacity style={{...styles.blogCardSmall, width: smallCardWidth }}>
                <Image
                    source={images.CyberSecurity}
                    style={{...styles.blogCardSmallImage, width: smallCardWidth-10 }}    
                />
                <View style={styles.blogCardSmallText}>
                    <View style={styles.titleUpper}>
                        <CardHeadingBold><Text style={styles.blogCardSmallTitle}>Cyber Security</Text></CardHeadingBold>
                        <View style= {styles.blogCardSmallDescription}>
                                <RegularSmall fontColor={COLORS.brandGrey}><Text>Jul 10th, 2023</Text></RegularSmall>
                                <Circle color={COLORS.brandGrey} size={5} fill={COLORS.brandGrey} />
                                <View style={{ width: smallCardWidth-121}}>
                                    <Text numberOfLines={1} ellipsizeMode="tail">
                                        <RegularSmall fontColor={COLORS.brandGrey}>3 mins read</RegularSmall>
                                    </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.authorDetails}>
                        <Image
                            source={profilePicture}
                            style={styles.blogCardSmallProfile}
                        />
                        <View style={styles.authorBio}>
                            <NameSmallSemibold><Text style={styles.bioName}>Samadhi Smith</Text></NameSmallSemibold>
                            <View style={{ width: smallCardWidth-60}}>
                                <Text style={styles.bioInstitute} numberOfLines={1} ellipsizeMode="tail">
                                    <SmallerRegular>Undergrad at University of Colombo</SmallerRegular>
                                </Text>
                            </View>
                        </View>
                    </View> 
                </View>
            </TouchableOpacity>
    )
}

export default BlogCardSmall;