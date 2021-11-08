// React & Navigation
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Components
import BottomTabs from "./BottomTabs";
import BeachScreenTabs from "./BeachScreenTabs";
import Header from "../shared/Header";

const homeStack = createNativeStackNavigator();

/**
 * @function HomescreenStack
 * Outermost navigation component.
 * Contains two screens:
 *      > BottomTabs - nested navigation used for beach lists.
 *      > BeachScreenTabs - used for displaying specific beach information.
 *
 * @returns HomescreenStack Component
 */
const HomescreenStack = () => {
  return (
    <homeStack.Navigator
      screenOptions={{
        headerTitle: () => <Header />,
      }}
    >
      <homeStack.Screen name="MSW" component={BottomTabs} />
      <homeStack.Screen name="BeachScreenTabs" component={BeachScreenTabs} />
    </homeStack.Navigator>
  );
};

export default HomescreenStack;
