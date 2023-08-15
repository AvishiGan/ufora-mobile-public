import React, { useRef, useState } from 'react';
import { View, Text, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { CardHeadingBold } from '../../constants/fonts';
import { BlogCarouselCard, BlogDisplay } from '../../components';
import { images, COLORS, SIZES } from "../../constants";
import { Circle, LucideChevronRightCircle, LucideChevronLeftCircle } from "lucide-react-native";
import { profilePicture } from "../../../assets/images";
import styles from './blogStyles.styles';

const blogArticle = [1,2,3,4];

interface BlogArticleProps {
  navigation : any;
}

const BlogArticles: React.FC<BlogArticleProps> = ({navigation}) => {

  const screenWidth = Dimensions.get('window').width;
  const cardWidth = screenWidth - 26;

  const [activeCardIndex, setActiveCardIndex] = useState(0); // State to keep track of the active card index

  const carouselCardData = {
    imageSource: images.BlogCarouselCard,
    title: "Marketing Essentials",
    date: "May 10th, 2023",
    readTime: "5 mins read",
    authorName: "Isuru Ranawaka",
    authorProfilePic: profilePicture,
  };

  const flatListRef = useRef<FlatList<any>>(null);

  const scrollToIndex = (index: number) => {
    if (flatListRef.current) {
      const offset = index * (screenWidth - 16);
      flatListRef.current.scrollToOffset({ animated: true, offset });
    }
  };

  const onForwardButtonPress = () => {
    const nextIndex = activeCardIndex + 1;
    if (nextIndex < blogArticle.length) {
      scrollToIndex(nextIndex);
      //setActiveCardIndex(nextIndex);
    }
  };

  const onBackButtonPress = () => {
    const prevIndex = activeCardIndex - 1;
    if (prevIndex >= 0) {
      scrollToIndex(prevIndex);
      //setActiveCardIndex(prevIndex);
    }
  };

  // Function to calculate the index of the visible item based on the scroll position
  const calculateVisibleIndex = (event: { nativeEvent: { contentOffset: { x: number; }; }; }) => {
    const viewableIndex = Math.floor(event.nativeEvent.contentOffset.x / (screenWidth-26));
    setActiveCardIndex(viewableIndex);
  };

  const renderSideButtons = () => (
    <View style={{...styles.sideButtons, gap: cardWidth-60,}}>   
      <TouchableOpacity onPress={onBackButtonPress}>
        <LucideChevronLeftCircle size={SIZES.iconSize} flexShrink={0} color={COLORS.brandGrey} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onForwardButtonPress}>
        <LucideChevronRightCircle size={SIZES.iconSize} flexShrink={0} color={COLORS.placeHolder} />
      </TouchableOpacity>
    </View> 
  );
  
  return (
    <View style={styles.blogArticlesContainer}>
        <CardHeadingBold><Text style={styles.featuredTitle}>Featured Articles</Text></CardHeadingBold>
        <FlatList 
          ref={flatListRef} // Set the ref for the FlatList
          snapToOffsets={[0, screenWidth-16, 2*(screenWidth-16), 3*(screenWidth-16)]} // Offset positions for each card
          decelerationRate="fast" // Optional: Controls the speed of scrolling
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={blogArticle}
          style={styles.carouselCardContainer}
          renderItem={({item, index}) => (
            <BlogCarouselCard 
              data={carouselCardData} 
              navigation={navigation}
            />
          )}
          //keyExtractor={(item, index) => index.toString()} // Use keyExtractor directly as a prop
          contentContainerStyle={{columnGap: 10}}
          horizontal
          onScroll={calculateVisibleIndex} // Call the custom function onScroll to calculate the visible index
        />
        {renderSideButtons()}
        <View style={styles.carouselIcons}>
          <Circle color={activeCardIndex === 0 ? COLORS.brandBlue : COLORS.placeHolder} size={5} fill={activeCardIndex === 0 ? COLORS.brandBlue : COLORS.placeHolder} />
          <Circle color={activeCardIndex === 1 ? COLORS.brandBlue : COLORS.placeHolder} size={5} fill={activeCardIndex === 1 ? COLORS.brandBlue : COLORS.placeHolder} />
          <Circle color={activeCardIndex === 2 ? COLORS.brandBlue : COLORS.placeHolder} size={5} fill={activeCardIndex === 2 ? COLORS.brandBlue : COLORS.placeHolder} />
          <Circle color={activeCardIndex === 3 ? COLORS.brandBlue : COLORS.placeHolder} size={5} fill={activeCardIndex === 3 ? COLORS.brandBlue : COLORS.placeHolder} />
        </View>

        <BlogDisplay />
        
    </View>
  )
}

export default BlogArticles;