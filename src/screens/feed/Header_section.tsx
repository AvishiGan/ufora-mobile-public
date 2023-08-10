import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Search, MessagesSquare } from "lucide-react-native";

// UFORA LOGO
import Logo from "../../../assets/logo.svg";

const Header_section = () => {
  return (
    <View className="h-12  flex-row items-center">
      <View className="h-9 flex-1 ">
        <View className="w-24 h-9bg-green-300 items-center">
          <Logo width={85} height={30} style={{ color: "#ccc" }} />
        </View>
      </View>
      <View className="flex-row space-x-4">
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

export default Header_section;
