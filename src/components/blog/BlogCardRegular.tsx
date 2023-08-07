import React from "react";
import { Text, View, TouchableOpacity, ImageBackground, Dimensions } from "react-native";
import styles from "./blogStyles.styles";
import { images,COLORS } from "../../constants";
import { SemiBoldBig, SmallerRegular } from "../../constants/fonts";
import { Check, Circle } from "lucide-react-native";

const BlogCardRegular = () => {

    const screenWidth = Dimensions.get('window').width;
  
    // Calculate the width and height for the featured card to make it responsive
    const cardWidth = screenWidth - 26; // Subtract side margins values
    const cardHeight = cardWidth * 0.494;
    const textMarginTop = (cardHeight/2) + 1;
    
    return(
           <TouchableOpacity>
            <ImageBackground
                source={images.BlogCarouselCard}
                style={{...styles.featuredCard, width: cardWidth, height: cardHeight}}
                imageStyle={styles.featuredImage}
            >
                <View style={{...styles.blogDetails, marginTop: textMarginTop}}>
                    <SemiBoldBig><Text style={styles.blogTitle}>Marketing Essentials</Text></SemiBoldBig>
                    <View style={styles.descriptionContainer}>
                        <SmallerRegular><Text style={styles.blogDescription}>May 10th, 2023</Text></SmallerRegular>
                        <Circle color={COLORS.brandWhite} size={5} fill={COLORS.brandWhite} />
                        <SmallerRegular><Text style={styles.blogDescription}>5mins read</Text></SmallerRegular>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text>Isuru Ranawaka</Text>
                        {/* <Check fill={COLORS.brandBlue} color={COLORS.brandWhite} size={12} /> */}
                    </View>
                </View>
            </ImageBackground>
           </TouchableOpacity>
    )
}

export default BlogCardRegular;