// React & Navigation
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// Components
import TopTabs from "./TopTabs.js";
import EmptyComponent from "../shared/EmptyComponent.js";

const Root = createMaterialBottomTabNavigator();

/**
 * @function BottomTabs
 * Navigation component nested within HomescreenStack. Contains 3 screens:
 *    > News (left) using EmptyComponent
 *    > TopTabs (centre) for displaying the beaches.
 *    > Account (right) using EmptyComponent
 */
const BottomTabs = () => {
  return (
    <Root.Navigator
      initialRouteName="Beaches"
      activeColor="#ffffff"
      inactiveColor="#1f1f1f"
      shifting={true}
      backBehaviour="none"
      barStyle={{ backgroundColor: "#67aaee" }}
    >
      <Root.Screen
        name="News"
        component={EmptyComponent}
        options={{
          tabBarColor: "#3d94ee",
          tabBarLabel: "News",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="text-box-multiple"
              color={color}
              size={24}
            />
          ),
        }}
      />

      <Root.Screen
        name="Beaches"
        component={TopTabs}
        options={{
          tabBarColor: "#1370d1",
          tabBarLabel: "Beaches",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="waves" color={color} size={24} />
          ),
        }}
      />

      <Root.Screen
        name="Account"
        component={EmptyComponent}
        backgroundColor="#be7474"
        options={{
          tabBarColor: "#0b529c",
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={24} />
          ),
        }}
      />
    </Root.Navigator>
  );
};

export default BottomTabs;
