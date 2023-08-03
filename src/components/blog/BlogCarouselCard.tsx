import React from "react";
import { Text, View, TouchableOpacity, ImageBackground, Dimensions, Image } from "react-native";
import styles from "./blogStyles.styles";
import { images, COLORS, SIZES } from "../../constants";
import { SemiBoldBig, SmallMedium, SmallerRegular } from "../../constants/fonts";
import { Circle, LucideChevronLeftCircle, LucideChevronRightCircle } from "lucide-react-native";
import { profilePicture } from "../../../assets/images";
import { UforaIcon, VerifiedIcon } from "../../../assets/svg";

const BlogCarouselCard = () => {

    const screenWidth = Dimensions.get('window').width;
  
    // Calculate the width for the blog carousel card to make it responsive
    const cardWidth = screenWidth - 26; // Subtract side margins values
    
    return(
           <TouchableOpacity>
            <ImageBackground
                source={images.BlogCarouselCard}
                style={{...styles.carouselCard, width: cardWidth}}
                imageStyle={styles.carouselCardImage}
            >
                <View style={styles.wrapContent}>
                    <View style={{...styles.sideButtons, gap: cardWidth-60}}>   
                        <TouchableOpacity>
                            <LucideChevronLeftCircle size={SIZES.iconSize} flexShrink={0} color={COLORS.brandGrey} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <LucideChevronRightCircle size={SIZES.iconSize} flexShrink={0} color={COLORS.placeHolder} />
                        </TouchableOpacity>
                    </View> 
                    <View style={styles.blogDetails}>
                        <SemiBoldBig><Text style={styles.blogTitle}>Marketing Essentials</Text></SemiBoldBig>
                        <View style={styles.descriptionContainer}>
                            <SmallerRegular><Text style={styles.blogDescription}>May 10th, 2023</Text></SmallerRegular>
                            <Circle color={COLORS.brandWhite} size={5} fill={COLORS.brandWhite} />
                            <SmallerRegular><Text style={styles.blogDescription}>5mins read</Text></SmallerRegular>
                        </View>
                        <View style={styles.blogAuthor}>
                            <Image
                            source={profilePicture}
                            style={styles.profilePicture}
                            />
                            <View style={styles.authorName}>
                                <SmallMedium><Text style={styles.blogDescription}>Isuru Ranawaka</Text></SmallMedium>
                                <VerifiedIcon size={12} fillColor={COLORS.brandBlue} strokeColor={COLORS.brandWhite} />
                                <UforaIcon size={12} fillColor={COLORS.brandWhite} strokeColor={COLORS.brandBlack} />
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
           </TouchableOpacity>
    )
}

export default BlogCarouselCard;