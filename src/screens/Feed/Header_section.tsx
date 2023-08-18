import { TouchableOpacity, View, StyleSheet } from "react-native";
import React from "react";

import Logo from "../../../assets/logo.svg";
import { Search, MessagesSquare } from "lucide-react-native";

const Header_section = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Logo width={85} height={30} style={{ color: "#ccc" }} />
        </View>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity>
          <Search color="#4F4E4E" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MessagesSquare color="#4F4E4E" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
    marginTop:20,
    marginBottom:10
  },
  logoContainer: {
    height: 36,
    flex: 1,
  },
  logo: {
    width: 96,
    height: 36,
    // backgroundColor: "#00FF7F",
    alignItems: "center",
  },
  icons: {
    flexDirection: "row",
    gap: 10,
    width: 48,

  },
});

export default Header_section;
