// React & Navigation
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// Components
import HomescreenStack from "./app/navigation/HomescreenStack";

/**
 * @function App
 * Entry point of application.
 * Display the HomeScreenStack component.
 */
export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <HomescreenStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
