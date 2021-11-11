// React & Navigation
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// Components
import BeachList from "../components/BeachList";
import EmptyComponent from "../shared/EmptyComponent";

const Tabs = createMaterialTopTabNavigator();

/**
 * @function TopTabs
 * Navigation component nested within BottomTabs.
 * Displays the same BeachList component for both Nearby and Pinned tabs.
 * Contains 3 screens:
 *    > BeachesMap (left) - using EmptyComponent
 *    > BeachList (centre)
 *    > BeachList (right)
 *
 */
const TopTabs = () => {
  return (
    <Tabs.Navigator initialRouteName="Nearby">
      <Tabs.Screen name="Map" component={EmptyComponent} />
      <Tabs.Screen name="Nearby" component={BeachList} />
      <Tabs.Screen name="Pinned" component={BeachList} />
    </Tabs.Navigator>
  );
};

export default TopTabs;
