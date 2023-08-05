import React from "react";
import { View, TouchableOpacity, Image, Text, Dimensions } from "react-native";
import { COLORS } from "../../constants";
import { CardHeadingBold, NameSmallSemibold, RegularSmall, SmallerRegular } from "../../constants/fonts";
import { Circle } from "lucide-react-native";
import styles from "./blogStyles.styles";

interface BlogCardSmallData {
    imageSource: any; 
    title: string;
    date: string;
    readTime: string;
    authorName: string;
    authorProfilePic: any; 
    authorInstitute: string;
}

interface BlogCardSmallProps {
    data: BlogCardSmallData;
}

const BlogCardSmall: React.FC<BlogCardSmallProps> = ({ data }) => {

    const screenWidth = Dimensions.get('window').width;
  
    // Calculate the width for the blog card small to make it responsive
    const smallCardWidth = (screenWidth - 40)/2; // Subtract side margin, gap values

    return (
            <TouchableOpacity style={{...styles.blogCardSmall, width: smallCardWidth }}>
                <Image
                    source={data.imageSource}
                    style={{...styles.blogCardSmallImage, width: smallCardWidth-10 }}    
                />
                <View style={styles.blogCardSmallText}>
                    <View style={styles.titleUpper}>
                        <CardHeadingBold><Text style={styles.blogCardSmallTitle}>{data.title}</Text></CardHeadingBold>
                        <View style= {styles.blogCardSmallDescription}>
                                <RegularSmall fontColor={COLORS.brandGrey}><Text>{data.date}</Text></RegularSmall>
                                <Circle color={COLORS.brandGrey} size={5} fill={COLORS.brandGrey} />
                                <View style={{ width: smallCardWidth-121}}>
                                    <Text numberOfLines={1} ellipsizeMode="tail">
                                        <RegularSmall fontColor={COLORS.brandGrey}>{data.readTime}</RegularSmall>
                                    </Text>
                                </View>
                        </View>
                    </View>
                    <View style={styles.authorDetails}>
                        <Image
                            source={data.authorProfilePic}
                            style={styles.blogCardSmallProfile}
                        />
                        <View style={styles.authorBio}>
                            <NameSmallSemibold><Text style={styles.bioName}>{data.authorName}</Text></NameSmallSemibold>
                            <View style={{ width: smallCardWidth-60}}>
                                <Text style={styles.bioInstitute} numberOfLines={1} ellipsizeMode="tail">
                                    <SmallerRegular>{data.authorInstitute}</SmallerRegular>
                                </Text>
                            </View>
                        </View>
                    </View> 
                </View>
            </TouchableOpacity>
    )
}

export default BlogCardSmall;