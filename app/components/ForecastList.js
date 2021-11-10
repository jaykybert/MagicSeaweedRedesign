/** @file ForecastList.js
 *  Contains the ForecastList component, ForecastList styles, and the function
 *  call for getting the (dummy) location data.
 */

// React
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
// Components
import ForecastListItem from "./ForecastListItem";
// Utilities
import { GetForecastData } from "../scripts/mswData";

const forecastData = GetForecastData();

/**
 * A FlatList of ForecastListItems.
 *
 * @param {navigation} - Stack navigation for displaying the beach screen tabs.
 * @returns BeachList Component
 */
const ForecastList = ({ navigation }) => {
  return (
    <View style={BeachListStyles.container}>
      <FlatList
        data={forecastData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ForecastListItem
            forecastData={item}
            onPress={() => alert("pressed")}
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

export default ForecastList;
