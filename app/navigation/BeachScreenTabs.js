// React & Navigation
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// Components
import EmptyComponent from "../shared/EmptyComponent";
import BeachMediaTab from "../screens/BeachMediaTab";
import BeachTodayTab from "../screens/BeachTodayTab";
import BeachForecastTab from "../screens/BeachForecastTab";

const BeachTabs = createMaterialTopTabNavigator();

/**
 * @function BeachScreenTabs
 * A top tab navigator with 3 tabs:
 *      > Media (left) for video and images.
 *      > Overview (centre) for information about the beach today.
 *      > Forecast (right) for information about the beach for the next week.
 *
 * @param {route} - Used to pass the beach name.
 * @returns BeachScreenTabs Component
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
