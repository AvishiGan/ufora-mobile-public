import React from "react";
import { View, TouchableOpacity, Image, Text, Dimensions } from "react-native";
import { COLORS } from "../../constants";
import { CardHeadingBold, NameSmallSemibold, RegularSmall, SmallerRegular } from "../../constants/fonts";
import { Circle } from "lucide-react-native";
import { UforaIcon, VerifiedIcon } from "../../../assets/svg";
import styles from "./blogStyles.styles";

interface BlogCardLargeData {
    imageSource: any; 
    title: string;
    content: string;
    date: string;
    readTime: string;
    authorName: string;
    authorProfilePic: any; 
    authorInstitute: string;
}

interface BlogCardLargeProps {
    data: BlogCardLargeData;
}

const BlogCardLarge: React.FC<BlogCardLargeProps> = ({ data }) => {

    const screenWidth = Dimensions.get('window').width;
  
    // Calculate the width for the blog card large to make it responsive
    const largeCardWidth = screenWidth - 26; // Subtract side margin values

    return (
        <TouchableOpacity style={{width: largeCardWidth}}>
            <View style={styles.blogCardLarge}>
                <Image
                    source={data.imageSource}
                    style={styles.blogCardLargeImage}
                />
                <View style={styles.blogCardLargeText}>
                    <View style={styles.blogCardLargeDescription}>
                        <CardHeadingBold><Text style={styles.blogCardLargeContent}>{data.title}</Text></CardHeadingBold>
                        <View style={{ width: largeCardWidth-138}}>
                            <Text style={styles.blogCardLargeContent} numberOfLines={3} ellipsizeMode="tail">
                                <RegularSmall>{data.content}</RegularSmall>
                            </Text>
                        </View>
                        <View style= {styles.blogCardSmallDescription}>
                                <RegularSmall fontColor={COLORS.brandGrey}><Text>{data.date}</Text></RegularSmall>
                                <Circle color={COLORS.brandGrey} size={5} fill={COLORS.brandGrey} />
                                <RegularSmall fontColor={COLORS.brandGrey}><Text>{data.readTime}</Text></RegularSmall>
                        </View>
                    </View>
                    <View style={styles.blogCardLargeAuthor}>
                        <Image 
                            source={data.authorProfilePic}
                            style={styles.blogCardSmallProfile}
                        />
                        <View style={styles.blogCardLargeAuthorDetails}>
                            <View style={styles.blogCardLargeAuthorName}>
                                <NameSmallSemibold><Text>{data.authorName}</Text></NameSmallSemibold>
                                <VerifiedIcon size={12} fillColor={COLORS.brandBlue} strokeColor={COLORS.brandWhite} />
                                <UforaIcon size={12} fillColor={COLORS.brandBlack} strokeColor={COLORS.brandWhite} />
                            </View>
                            <View style={{ width: largeCardWidth-98}}>
                                <Text style={styles.bioInstitute} numberOfLines={1} ellipsizeMode="tail">
                                    <SmallerRegular>{data.authorInstitute}</SmallerRegular>
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