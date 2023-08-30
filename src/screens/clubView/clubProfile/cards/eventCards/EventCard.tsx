/**
 * This code is a common code for creating one single project card which we can use later to create multiple project cards
 */

import React from "react";
import { View, Image } from "react-native";
import { styles } from "../../../../../components/profile/styles";
import PropTypes from "prop-types";
import  EventAuthorBioFooter  from "../../../../../components/clubsView/clubProfile/events/EventAuthorBioFooter";
import { profileData } from "../../data";
import { CardHeadingBold, RegularSmall, SmallerRegular } from "../../../../../constants";
import { CalendarDays } from "lucide-react-native";
import { Clock4 } from "lucide-react-native";
import { MapPin } from "lucide-react-native";

interface EventCardData {
  eventImage: any;
  eventTitle: string;
  eventDate: string;
  eventTime: string,
  eventLocation:string
  
}

const EventCard: React.FC<EventCardData> = ({
  eventImage,
  eventTitle,
  eventDate,
  eventTime,
  eventLocation

}) => {
  return (
    <View style={styles.singleProjectContainer}>
      <Image style={styles.projectImage} source={eventImage} />
      <View style={styles.projectContentContainer}>
        <View style={{flexDirection: "row", alignItems: "center", gap: 35}}>
            <View style={{flexDirection: "row", alignItems: "center", marginLeft: 10}}>
                <View style={{marginRight: 5}}>
                    <CalendarDays size={18} color={"black"}/>
                </View>
                <SmallerRegular>{eventDate}</SmallerRegular>
            </View>
            
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <View style={{marginRight: 5}}>
                    <Clock4 size={18} color={"black"}/>
                </View>
                <SmallerRegular>{eventTime}</SmallerRegular>
            </View>
            
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <View style={{marginRight: 5}}>
                    <MapPin size={18} color={"black"}/>
                </View>
                <SmallerRegular>{eventLocation}</SmallerRegular>
            </View>
            
        </View>
        
        <View style={styles.projectArticleContainer}>
          <CardHeadingBold>{eventTitle}</CardHeadingBold>
        </View>
        <View style={styles.projectArticleContainer}>
          <EventAuthorBioFooter data={profileData} />
        </View>
      </View>
      {/* PostAuthorBioFooter component */}
    </View>
  );
};

/**
 * This is a type checking for the props which we are passing tevent component
 */
EventCard.propTypes = {
  eventImage: PropTypes.any.isRequired,
  eventTitle: PropTypes.string.isRequired,
};

export default EventCard;
