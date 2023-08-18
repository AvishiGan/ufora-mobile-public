import React from "react";
import { View, TouchableOpacity, Image, Text, Dimensions } from "react-native";
import { COLORS } from "../../constants";
import { CardHeadingBold, NameSmallSemibold, RegularSmall, SmallerRegular } from "../../constants/fonts";
import { UforaIcon, VerifiedIcon } from "../../../assets/svg";
import projectStyles from "./projectStyles.style";
import styles from "../blog/blogStyles.styles";

interface ProjectCardLargeData {
    imageSource: any; 
    title: string;
    content: string;
    date: string;
    authorName: string;
    authorProfilePic: any; 
    authorInstitute: string;
}

interface ProjectCardLargeProps {
    data: ProjectCardLargeData;
}

const ProjectCardLarge: React.FC<ProjectCardLargeProps> = ({ data }) => {

    const screenWidth = Dimensions.get('window').width;
    // Calculate the width for the project card large to make it responsive
    const largeCardWidth = screenWidth - 26; // Subtract side margin values

    return (
        <TouchableOpacity style={{width: largeCardWidth}}>
            <View style={projectStyles.projectCardLarge}>
                <Image
                    source={data.imageSource}
                    style={{...projectStyles.projectCardLargeImage, width: largeCardWidth-10}}
                />
                <View style={projectStyles.projectCardLargeText}>
                    <View style={styles.blogCardLargeDescription}>
                        <CardHeadingBold><Text style={styles.blogCardLargeContent}>{data.title}</Text></CardHeadingBold>
                        <View style={{ width: largeCardWidth-20}}>
                            <Text style={styles.blogCardLargeContent} numberOfLines={2} ellipsizeMode="tail">
                                <RegularSmall>{data.content}</RegularSmall>
                            </Text>
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
                            <View style={{ width: largeCardWidth-133}}>
                                <Text style={styles.bioInstitute} numberOfLines={1} ellipsizeMode="tail">
                                    <SmallerRegular>{data.authorInstitute}</SmallerRegular>
                                </Text>
                            </View>
                        </View>
                        <SmallerRegular><Text style={{color: COLORS.brandGrey}}>{data.date}</Text></SmallerRegular>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProjectCardLarge;