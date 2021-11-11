/**
 * @file HourlyForecastList.js
 * Contains the HourlyForecastList component.
 */

// React
import React from "react";
import { FlatList, View } from "react-native";
// Components
import HourlyForecastListItem from "./HourlyForecastListItem";

/**
 * @function HourlyForecastList
 * Displays a FlatList of HourlyForecastListItems which represent forecast data for a specific hour.
 *
 * @param {forecastData} - Forecast data for a singular day, contains an hourly breakdown.
 */
const HourlyForecastList = ({ forecastData }) => {
  return (
    <View>
      <FlatList
        data={forecastData["forecast"]}
        keyExtractor={(item) => item.hour}
        renderItem={({ item }) => (
          <HourlyForecastListItem forecastHour={item} />
        )}
      />
    </View>
  );
};

export default HourlyForecastList;
