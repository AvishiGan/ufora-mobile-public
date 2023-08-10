import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";

// dummy data
// const imageLink: string = "../../assets/profileLo.jpg";

const Story_section = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <TouchableOpacity style={styles.story}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/images/myProfile/common/profile-picture.png")}
              style={styles.image}
            />
          </View>
          <Text numberOfLines={1}>Pasan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.story}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/images/myProfile/common/profile-picture.png")}
              style={styles.image}
            />
          </View>
          <Text numberOfLines={1}>Pasan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.story}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/images/myProfile/common/profile-picture.png")}
              style={styles.image}
            />
          </View>
          <Text numberOfLines={1}>Pasan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.story}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/images/myProfile/common/profile-picture.png")}
              style={styles.image}
            />
          </View>
          <Text numberOfLines={1}>Pasan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.story}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/images/myProfile/common/profile-picture.png")}
              style={styles.image}
            />
          </View>
          <Text numberOfLines={1}>Pasan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.story}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/images/myProfile/common/profile-picture.png")}
              style={styles.image}
            />
          </View>
          <Text numberOfLines={1}>Pasan</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
  },
  story: {
    alignItems: "center",
    width: 64,
    marginHorizontal: 4,
  },
  imageContainer: {
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 9999,
  },
});

export default Story_section;
