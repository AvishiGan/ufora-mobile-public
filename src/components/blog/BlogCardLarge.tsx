import React from "react";
import { View, TouchableOpacity, Image, Text, Dimensions } from "react-native";
import { COLORS, images } from "../../constants";
import { CardHeadingBold, NameSmallSemibold, RegularSmall, SmallerRegular } from "../../constants/fonts";
import { Circle } from "lucide-react-native";
import { UforaIcon, VerifiedIcon } from "../../../assets/svg";
import { profilePicture } from "../../../assets/images";
import styles from "./blogStyles.styles";

const BlogCardLarge = () => {

    const screenWidth = Dimensions.get('window').width;
  
    // Calculate the width for the blog card large to make it responsive
    const largeCardWidth = screenWidth - 26; // Subtract side margin values

    return (
        <TouchableOpacity style={{width: largeCardWidth}}>
            <View style={styles.blogCardLarge}>
                <Image
                    source={images.BioTechnology}
                    style={styles.blogCardLargeImage}
                />
                <View style={styles.blogCardLargeText}>
                    <View style={styles.blogCardLargeDescription}>
                        <CardHeadingBold><Text style={styles.blogCardLargeContent}>BioTechnology</Text></CardHeadingBold>
                        <View style={{ width: largeCardWidth-138}}>
                            <Text style={styles.blogCardLargeContent} numberOfLines={3} ellipsizeMode="tail">
                                <RegularSmall>Lorem ipsum dolor sit amet consectetur. Donec vestibulum quisque tortor nulla sodales integer mattis. Lorem ipsum dolor sit amet consectetur. Donec vestibulum quisque tortor nulla sodales integer mattis.</RegularSmall>
                            </Text>
                        </View>
                        <View style= {styles.blogCardSmallDescription}>
                                <RegularSmall fontColor={COLORS.brandGrey}><Text>Jul 21st, 2023</Text></RegularSmall>
                                <Circle color={COLORS.brandGrey} size={5} fill={COLORS.brandGrey} />
                                <RegularSmall fontColor={COLORS.brandGrey}><Text>7 mins read</Text></RegularSmall>
                        </View>
                    </View>
                    <View style={styles.blogCardLargeAuthor}>
                        <Image 
                            source={profilePicture}
                            style={styles.blogCardSmallProfile}
                        />
                        <View style={styles.blogCardLargeAuthorDetails}>
                            <View style={styles.blogCardLargeAuthorName}>
                                <NameSmallSemibold><Text>Hiruni Ovitigala</Text></NameSmallSemibold>
                                <VerifiedIcon size={12} fillColor={COLORS.brandBlue} strokeColor={COLORS.brandWhite} />
                                <UforaIcon size={12} fillColor={COLORS.brandBlack} strokeColor={COLORS.brandWhite} />
                            </View>
                            <View style={{ width: largeCardWidth-98}}>
                                <Text style={styles.bioInstitute} numberOfLines={1} ellipsizeMode="tail">
                                    <SmallerRegular>Undergrad at University of Colombo</SmallerRegular>
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default BlogCardLarge;