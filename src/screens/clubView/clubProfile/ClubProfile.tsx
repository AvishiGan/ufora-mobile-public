import React from "react";
import MiddleTabNavigator from "../../../navigation/navigator/middleTabNavigator/MiddleTabNavigatorClubs";
import ProfileCommonSection from "../../../components/clubsView/clubProfile/CommonSection";

const ClubProfile: React.FC = () => {
  return (
    <React.Fragment>
      <ProfileCommonSection />
      <MiddleTabNavigator />
    </React.Fragment>
  );
};

export default ClubProfile;