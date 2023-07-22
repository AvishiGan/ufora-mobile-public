// /**
//  * This code is a common code for creating one single post card which we can use later to create multiple post cards
//  */

// import React from "react";
// import { View, Text, StyleSheet, Image } from "react-native";
// import { styles } from "./styles";
// import PropTypes from "prop-types";

// interface PostCardData {
//   postDescription: string;
//   postImage: any;
//   likedNames: string;
//   likedCount: number;
//   commentsCount: number;
// }

// const PostCard: React.FC<PostCardData> = ({
//   postDescription,
//   postImage,
//   likedNames,
//   likedCount,
//   commentsCount,
// }) => {
//   return (
//     <View style={styles.allPostsContainer}>
//       <View style={styles.singlePostContainer}></View>
//       <Text style={styles.postDescription}>
//         {postDescription}
//         <Text style={styles.seeMore}>... see more</Text>
//       </Text>
//       <Image style={styles.postImage} source={postImage} />
//       <View style={styles.feedbackContainer}>
//         <View style={styles.likesCommentsContainer}>
//           <View style={styles.likeButtonAndNamesContainer}>
//             {/* thumbsUpIcon or Like button comes here */}
//             <Text style={styles.likedNames}>{likedNames}</Text>
//             <Text style={styles.andOthers}>{`& ${likedCount} others`}</Text>
//           </View>
//           <View style={styles.commentsCountContainer}>
//             <Text
//               style={styles.commentsCountText}
//             >{`${commentsCount} comments`}</Text>
//           </View>
//         </View>
//         <View style={styles.likeShareCommentButtonContainer}>
//           {/* Each button comes here */}
//           <View style={styles.eachButtonContainer}>
//             <Text style={styles.eachButtonText}>Like</Text>
//           </View>
//           <View style={styles.eachButtonContainer}>
//             <Text style={styles.eachButtonText}>Comment</Text>
//           </View>
//           <View style={styles.eachButtonContainer}>
//             <Text style={styles.eachButtonText}>Share</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// /**
//  * This is a type checking for the props which we are passing to the PostCard component
//  */
// PostCard.propTypes = {
//   postDescription: PropTypes.string.isRequired,
//   postImage: PropTypes.any.isRequired,
//   likedNames: PropTypes.string.isRequired,
//   likedCount: PropTypes.number.isRequired,
//   commentsCount: PropTypes.number.isRequired,
// };

// export default PostCard;
