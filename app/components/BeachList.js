/** @file BeachList.js
 *  Contains the BeachList component, BeachList styles, and the function
 *  call for getting the (dummy) location data.
 */

// React
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
// Components
import BeachListItem from "./BeachListItem";
// Utilities
import GetLocationData from "../scripts/locationData";

let beachData = GetLocationData();

/**
 * A FlatList of BeachListItems.
 *
 * @param {navigation} - Stack navigation for displaying the beach screen tabs.
 * @returns BeachList Component
 */
const BeachList = ({ navigation }) => {
  return (
    <View style={BeachListStyles.container}>
      <FlatList
        data={beachData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BeachListItem
            beachItem={item}
            onPress={() =>
              navigation.push("BeachScreenTabs", { beachData: item["name"] })
            }
          />
        )}
      />
    </View>
  );
};

const BeachListStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d4f2ff",
  },
});

export default BeachList;
