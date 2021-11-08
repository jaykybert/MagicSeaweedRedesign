// React & Navigation
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// Components
import HomescreenStack from "./app/navigation/HomescreenStack";

// TODO: MSW Logo - return to homescreen (custom header).
// TODO: BeachListItem pin - style it.

/**
 *  @function App
 *  Entry point of application.
 *  @return a HomescreenStack inside a NavigationContainer.
 */
export default function App() {
  return (
    <NavigationContainer style={AppStyles.container}>
      <HomescreenStack />
    </NavigationContainer>
  );
}

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
