// React & Navigation
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// Components
import BeachMediaTab from "../screens/BeachMediaTab";
import BeachTodayTab from "../screens/BeachTodayTab";
import BeachForecastTab from "../screens/BeachForecastTab";

const BeachTabs = createMaterialTopTabNavigator();

/**
 * @function BeachScreenTabs
 * A top tab navigator accessed from HomescreenStack with 3 tabs:
 *      > BeachMediaTab (left) for video and images.
 *      > BeachTodayTab (centre) for information about the beach today.
 *      > BeachForecastTab (right) for information about the beach for the next several days.
 *
 * @param {route} - Used to pass the beach name.
 */
const BeachScreenTabs = ({ route }) => {
  return (
    <BeachTabs.Navigator initialRouteName="Today">
      <BeachTabs.Screen
        name="Media"
        children={() => <BeachMediaTab beachName={route.params.beachData} />}
      />
      <BeachTabs.Screen
        name="Today"
        children={() => <BeachTodayTab beachName={route.params.beachData} />}
      />
      <BeachTabs.Screen
        name="Forecast"
        children={() => <BeachForecastTab beachName={route.params.beachData} />}
      />
    </BeachTabs.Navigator>
  );
};

export default BeachScreenTabs;
