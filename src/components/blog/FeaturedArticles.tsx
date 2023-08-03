import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { CardHeadingBold } from '../../constants/fonts';
import { BlogCarouselCard, BlogDisplay } from '../../components';
import { images, COLORS, SIZES } from "../../constants";
import { Circle } from "lucide-react-native";
import styles from './blogStyles.styles';

const blogArticle = [1,2,3,4];

const FeaturedArticles = () => {
  return (
    <View style={styles.featuredContainer}>
        <CardHeadingBold><Text style={styles.featuredTitle}>Featured Articles</Text></CardHeadingBold>
        <FlatList 
          showsHorizontalScrollIndicator={false}
          data={blogArticle}
          style={styles.carouselCardContainer}
          renderItem={() => (
          <BlogCarouselCard />
          )
          }
          // keyExtractor={item => item}
          contentContainerStyle={{columnGap: 10}}
          horizontal
        />
        <View style={styles.carouselIcons}>
          <Circle color={COLORS.brandBlue} size={5} fill={COLORS.brandBlue} />
          <Circle color={COLORS.placeHolder} size={5} fill={COLORS.placeHolder} />
          <Circle color={COLORS.placeHolder} size={5} fill={COLORS.placeHolder} />
          <Circle color={COLORS.placeHolder} size={5} fill={COLORS.placeHolder} />
        </View>

        <BlogDisplay />
        
    </View>
  )
}

export default FeaturedArticles;