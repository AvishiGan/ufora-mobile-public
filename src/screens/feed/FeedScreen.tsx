import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

// SECTIONS
import Header_section from "./Header_section";
import Search_and_Profile_section from "./Search_and_Profile_section";
import Chart_section from "./Chart_section";
// import Story_section from "./Story_section";
// import Post_section from "./Post_section";

const FeedScreen = () => {
  return (
    <SafeAreaView className="flex-1 mx-4 ">
      {/* SECTION : header */}
      <Header_section />

      <ScrollView>
        {/* SECTION : search and profile */}
        <Search_and_Profile_section />

        {/* SECTION : chart  */}
        <Chart_section />

        {/* SECTION : stories */}
        <Story_section />

        {/* SECTION : post */}
        <Post_section />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FeedScreen;
