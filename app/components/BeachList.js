/**
 * @file BeachList.js
 * Contains the BeachList component, relevant styles, and the function
 * call for getting the (dummy) location data.
 */

// React
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
// Components
import BeachListItem from "./BeachListItem";
// Utilities
import GetLocationData from "../static/locationData";

let beachData = GetLocationData();

/**
 * @function BeachList
 * Displays a FlatList of BeachListItems using the (dummy) location data.
 *
 * @param {navigation} - Stack navigation for displaying the beach screen tabs.
 */
const BeachList = ({ navigation }) => {
  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d4f2ff",
  },
});

export default BeachList;
