import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tabs = createMaterialTopTabNavigator();

function ScreenOne() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Nearby" component={Tab1} />
      <Tabs.Screen name="Pinned" component={Tab2} />
    </Tabs.Navigator>
  );
}

function Tab1() {
  return (
    <View style={styles.screen}>
      <Text>Tab 1</Text>
    </View>
  );
}

function Tab2() {
  return (
    <View style={styles.screen}>
      <Text>Tab 2</Text>
    </View>
  );
}




const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default ScreenOne;
