/** @file ForecastListItem.js
 *  Contains the ForecastListItem component and relevant styles.
 */

// React
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// Utilities
import HourlyForecastListItem from "./HourlyForecastListItem";

/**
 * Represents a forecast for a particular day. Found inside BeachForecastTab.
 *
 *
 * @returns ForecastListItem Component
 */
const ForecastListItem = ({ forecastData, onPress }) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.rowItem}>
        <Text style={Styles.heading}>{forecastData["day"]}</Text>
      </View>

      <View>
        <FlatList
          data={forecastData["forecast"]}
          keyExtractor={(item) => item.hour}
          renderItem={({ item }) => (
            <HourlyForecastListItem
              forecastHour={item}
              onPress={() => alert("pressed")}
            />
          )}
        />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 5,
  },
  rowItem: {
    justifyContent: "center",
    backgroundColor: "#0527cb",

    paddingLeft: 10,
  },
  heading: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "500",
  },
  distance: {
    fontStyle: "italic",
  },
});

export default ForecastListItem;
