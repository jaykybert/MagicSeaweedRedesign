/**
 * @file DailyForecastListItem.js
 * Contains the DailyForecastListItem component and relevant styles.
 */

// React
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
// Utilities
import HourlyForecastList from "./HourlyForecastList";

/**
 * @function DailyForecastListItem
 * Represents the forecast for a singular day. Found inside DailyForecastList.
 * Contains HourlyForecastList.
 *
 * @param {forecastData} - Forecast data for a singular day, contains an hourly breakdown.
 */
const DailyForecastListItem = ({ forecastData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowItem}>
        <Text style={styles.heading}>{forecastData["day"]}</Text>
      </View>

      <HourlyForecastList forecastData={forecastData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 5,
  },
  rowItem: {
    justifyContent: "center",
    backgroundColor: "#0527cb",
    borderRadius: 10,
    marginBottom: 3,
    paddingLeft: 10,
  },
  heading: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default DailyForecastListItem;
