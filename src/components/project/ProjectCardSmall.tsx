import React from "react";
import { View, TouchableOpacity, Image, Text, Dimensions } from "react-native";
import { COLORS } from "../../constants";
import { CardHeadingBold, NameSmallSemibold, SmallerRegular } from "../../constants/fonts";
import projectStyles from "./projectStyles.style";
import styles from "../blog/blogStyles.styles";

interface ProjectCardSmallData {
    imageSource: any; 
    title: string;
    date: string;
    readTime: string;
    authorName: string;
    authorProfilePic: any; 
    authorInstitute: string;
}

interface ProjectCardSmallProps {
    data: ProjectCardSmallData;
    navigation : any;
}

const ProjectCardSmall: React.FC<ProjectCardSmallProps> = ({ data, navigation }) => {

    const screenWidth = Dimensions.get('window').width;
    // Calculate the width for the blog card small to make it responsive
    const smallCardWidth = (screenWidth - 40)/2; // Subtract side margin, gap values

    const handleDisplayProject = () => {
        navigation.navigate('ProjectContent'); // Navigate to the 'AddBlog' screen when 'Add Blog' is clicked
    };

    return (
            <TouchableOpacity style={{...styles.blogCardSmall, width: smallCardWidth }} onPress={handleDisplayProject}>
                <Image
                    source={data.imageSource}
                    style={{...projectStyles.projectCardSmallImage, width: smallCardWidth-10 }}    
                />
                <View style={projectStyles.projectCardSmallText}>
                    <View style={styles.titleUpper}>
                        <CardHeadingBold><Text style={styles.blogCardSmallTitle}>{data.title}</Text></CardHeadingBold>
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
                    <SmallerRegular><Text style={{color: COLORS.brandGrey}}>{data.date}</Text></SmallerRegular>
                </View>
            </TouchableOpacity>
    )
}

export default ProjectCardSmall;