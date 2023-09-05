/**
 * This file contains all the projects information
 */
import React from "react";
import { View, ScrollView } from "react-native";
import { styles } from "../../../components/profile/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import EventCard from "./cards/eventCards/EventCard";
import AddEvent from "../../../components/clubsView/clubProfile/events/AddEvent";
import event1 from "../../../../assets/images/clubView/event1.png"
import event2 from "../../../../assets/images/clubView/event2.png"
import event3 from "../../../../assets/images/clubView/event3.png"
import event4 from "../../../../assets/images/clubView/event4.png"
import event5 from "../../../../assets/images/clubView/event5.png"

const AllClubEvents = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <ScrollView> */}
        <View style={styles.projectActionContainer}>
          <AddEvent title="Create a new Event" />
          <EventCard
            eventImage={event1}
            eventTitle="Creative Fridays"
            eventDate="Aug 10th, 2023"
            eventTime="9.00 AM"
            eventLocation="UCSC Premises"
          />

          <EventCard
            eventImage={event2}
            eventTitle="Beyond the Sky"
            eventDate="Aug 10th, 2023"
            eventTime="9.00 AM"
            eventLocation="UCSC Premises"
          />

          <EventCard
            eventImage={event3}
            eventTitle="Study Abroad"
            eventDate="Aug 10th, 2023"
            eventTime="9.00 AM"
            eventLocation="UCSC Premises"
          />

        <EventCard
            eventImage={event4}
            eventTitle="SNAPFLIX"
            eventDate="Aug 10th, 2023"
            eventTime="9.00 AM"
            eventLocation="UCSC Premises"
          />

        <EventCard
            eventImage={event5}
            eventTitle="Unlocked"
            eventDate="Aug 10th, 2023"
            eventTime="9.00 AM"
            eventLocation="UCSC Premises"
          />
        </View>
        {/* </ScrollView> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllClubEvents;
