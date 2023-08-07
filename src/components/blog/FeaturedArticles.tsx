import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { CardHeadingBold } from '../../constants/fonts';
import { BlogCardRegular } from '../../components';

import styles from './blogStyles.styles';

const blogArticle = [1,2,3,4];

const FeaturedArticles = () => {
  return (
    <View style={styles.featuredContainer}>
        <CardHeadingBold><Text style={styles.featuredTitle}>Featured Articles</Text></CardHeadingBold>
          <FlatList 
            showsHorizontalScrollIndicator={false}
            data={blogArticle}
            style={styles.featuredCardContainer}
            renderItem={() => (
            <BlogCardRegular />
            )
          }
          // keyExtractor={item => item}
          contentContainerStyle={{columnGap: 10}}
          horizontal
          
          />
    </View>
  )
}

export default FeaturedArticles;