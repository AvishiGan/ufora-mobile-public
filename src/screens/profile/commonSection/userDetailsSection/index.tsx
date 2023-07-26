import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import ProfileButton from "../../../../components/profile/buttons";
import { profileData } from "../data";

const UserDetailsContainer: React.FC = () => {
  /**
   * @function handleButtonPress
   * @returns void
   * @description Handles the button press event
   */
  const handleButtonPress = () => {
    console.log("Button pressed!");
  };

  return (
    <View style={styles.userDetailsContainer}>
      <View style={styles.profilePicNameUniContainer}>
        {/* Profile pic comes here */}
        <View style={styles.profileNameUniContainer}>
          <View style={styles.profileNameTwoIconsContainer}>
            <Text style={styles.profileName}>{profileData.name}</Text>
            <View style={styles.twoIconsContainer}>
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="20"
                  height="20"
                  rx="10"
                  fill="#2656FF"
                />
                <path
                  d="M13.5 8.5L9.375 12.5L7.5 10.6818"
                  stroke="#FEFEFE"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="20"
                  height="20"
                  rx="10"
                  fill="#111111"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.30191 10.9361C8.30191 11.3387 8.41279 11.701 8.63455 12.0231C8.85642 12.3452 9.14035 12.5778 9.48633 12.721V14.1569C9.12255 14.0764 8.78546 13.9355 8.47484 13.7342C8.16434 13.5329 7.89592 13.2891 7.66972 13.0028C7.44351 12.7165 7.26601 12.3989 7.13734 12.0499C7.00878 11.701 6.94444 11.3297 6.94444 10.9361V6.72223H8.30191V10.9361Z"
                  fill="#FEFEFE"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.7526 13.3303C12.6077 13.4599 12.4526 13.579 12.2872 13.6873C11.9324 13.9199 11.5468 14.0855 11.1293 14.1838V12.7344C11.5822 12.5556 11.9541 12.2625 12.2472 11.8555C12.5404 11.4484 12.6864 10.9809 12.6864 10.4531C12.6864 9.92519 12.5404 9.45771 12.2472 9.05062C11.9541 8.64353 11.5822 8.35055 11.1293 8.17168V6.72231C11.5468 6.82066 11.9324 6.98619 12.2872 7.21878C12.6419 7.45137 12.9499 7.73318 13.2123 8.06424C13.4735 8.39529 13.6777 8.76431 13.8237 9.1714C13.9709 9.57849 14.0439 10.0057 14.0439 10.4531C14.0439 10.6433 14.0701 10.8299 14.0439 11.0128V14.2778H12.7526V13.3303Z"
                  fill="#FEFEFE"
                />
              </svg>
            </View>
          </View>
          <Text style={styles.uniName}>{profileData.university}</Text>
        </View>
      </View>
      <View style={styles.statusContainer}>
        <View style={styles.individualStatusContainer}>
          <StatusCount count={profileData.friendsCount} name="Friends" />
          <StatusCount count={profileData.postsCount} name="Posts" />
          <StatusCount count={profileData.blogsCount} name="Blogs" />
          <StatusCount count={profileData.projectsCount} name="Projects" />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {/* Button icons come here */}
        <ProfileButton onPress={handleButtonPress} title="Edit Profile" />
        <ProfileButton onPress={handleButtonPress} title="Share Profile" />
      </View>
    </View>
  );
};

/**
 * @interface StatusCountProps
 * Defines the expected properties for the StatusCount component
 */
interface StatusCountProps {
  count: number;
  name: string;
}

/**
 *
 * @param param0 | StatusCountProps
 * @returns | JSX.Element
 * @description | Renders the count and name of a particular status
 */
const StatusCount: React.FC<StatusCountProps> = ({ count, name }) => {
  return (
    <Text style={styles.statusCount}>
      {count}
      <Text style={styles.statusName}> {name}</Text>
    </Text>
  );
};

export default UserDetailsContainer;
