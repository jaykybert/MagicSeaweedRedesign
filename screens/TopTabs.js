// React & Navigation
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// Components
import BeachList from "../components/BeachList"
import EmptyComponent from "../components/EmptyComponent"

const Tabs = createMaterialTopTabNavigator();


/** 
 * @function TopTabs
 * JSX Element nested within BottomTabs.
 * Contains 3 screens: BeachesMap, BeachList, and BeachList.
 * 
 * @returns TopTabs Component
 */
function TopTabs() {
  return (
    <Tabs.Navigator initialRouteName="Nearby">
      <Tabs.Screen name="Map" component={EmptyComponent}   />
      <Tabs.Screen name="Nearby" component={BeachList} />
      <Tabs.Screen name="Pinned" component={BeachList} />
    </Tabs.Navigator>
  );
}

export default TopTabs;
