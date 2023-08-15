import React from "react";
import { Text, View, TouchableOpacity, ImageBackground, Dimensions, Image } from "react-native";
import { COLORS } from "../../constants";
import { SemiboldBig, SmallMedium, SmallerRegular } from "../../constants/fonts";
import { Circle } from "lucide-react-native";
import { UforaIcon, VerifiedIcon } from "../../../assets/svg";
import styles from "./blogStyles.styles";

interface CarouselCardData {
    imageSource: any; 
    title: string;
    date: string;
    readTime: string;
    authorName: string;
    authorProfilePic: any; 
}

interface CarouselCardProps {
    data: CarouselCardData;
    navigation : any;
}

const BlogCarouselCard: React.FC<CarouselCardProps> = ({ data, navigation }) => {

    const screenWidth = Dimensions.get('window').width;

    const handleDisplayBlog = () => {
        navigation.navigate('BlogContent'); // Navigate to the 'AddBlog' screen when 'Add Blog' is clicked
      };
    
  
    // Calculate the width for the blog carousel card to make it responsive
    const cardWidth = screenWidth - 26; // Subtract side margin values

    return(
           <TouchableOpacity onPress={handleDisplayBlog}>
            <ImageBackground
                source={data.imageSource}
                style={{...styles.carouselCard, width: cardWidth}}
                imageStyle={styles.carouselCardImage}
            >
                <View style={styles.blogDetails}>
                    <SemiboldBig><Text style={styles.blogTitle}>{data.title}</Text></SemiboldBig>
                    <View style={styles.descriptionContainer}>
                        <SmallerRegular><Text style={styles.blogDescription}>{data.date}</Text></SmallerRegular>
                        <Circle color={COLORS.brandWhite} size={5} fill={COLORS.brandWhite} />
                        <SmallerRegular><Text style={styles.blogDescription}>{data.readTime}</Text></SmallerRegular>
                    </View>
                    <View style={styles.blogAuthor}>
                        <Image
                            source={data.authorProfilePic}
                            style={styles.profilePicture}
                        />
                        <View style={styles.authorName}>
                            <SmallMedium><Text style={styles.blogDescription}>{data.authorName}</Text></SmallMedium>
                            <VerifiedIcon size={12} fillColor={COLORS.brandBlue} strokeColor={COLORS.brandWhite} />
                            <UforaIcon size={12} fillColor={COLORS.brandWhite} strokeColor={COLORS.brandBlack} />
                        </View>
                    </View>
                </View>
            </ImageBackground>
           </TouchableOpacity>
    )
}

export default BlogCarouselCard;