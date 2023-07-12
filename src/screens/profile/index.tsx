import React from "react";
import { View, StyleSheet } from "react-native";
import ProfileButton from "../../components/buttons/profile";

const MyScreen: React.FC = () => {
  const handleButtonPress = () => {
    console.log("Button pressed!");
  };

  return (
    <View style={styles.container}>
      <ProfileButton onPress={handleButtonPress} title="Press me" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MyScreen;
