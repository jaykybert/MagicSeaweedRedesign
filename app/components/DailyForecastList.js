/**
 * @file DailyForecastList.js
 * Contains the DailyForecastList component, relevant styles, and the function
 * call for getting the forecast data from the MSW API.
 */

// React
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
// Components
import DailyForecastListItem from "./DailyForecastListItem";
// Utilities
import { GetForecastData } from "../static/mswData";

const forecastData = GetForecastData();

/**
 * @function DailyForecastList
 * Displays a FlatList of DailyForecastListItems, which represent daily forecasts.
 *
 * @param {navigation} - Stack navigation for displaying the beach screen tabs.
 */
const DailyForecastList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={forecastData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DailyForecastListItem forecastData={item} />}
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

export default DailyForecastList;
