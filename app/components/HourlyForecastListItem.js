/**
 * @file HourlyForecastListItem.js
 * Contains the HourlyForecastListItem component and relevant styles.
 */

// React
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

/**
 * @function HourlyForecastListItem
 * Displays hourly forecast information inside a singular row.
 *
 * @param {forecastHour} - Forecast data (temp, wind, swell) for a specific hour of a specific day.
 */
const HourlyForecastListItem = ({ forecastHour }) => {
  return (
    <View style={styles.row}>
      <View style={styles.hour}>
        <Text>{forecastHour["hour"]}</Text>
      </View>

      <View style={styles.temperature}>
        <Text>{forecastHour["condition"]["temperature"]}</Text>
        <Text>°{forecastHour["condition"]["unit"].toUpperCase()}</Text>
      </View>

      <View style={styles.wind}>
        <MaterialCommunityIcons
          name="arrow-down-bold"
          size={40}
          color="#0527cb"
          style={{
            transform: [{ rotate: `${forecastHour["wind"]["direction"]}deg` }],
          }}
        />

        <Text>
          {forecastHour["wind"]["speed"]}
          {forecastHour["wind"]["unit"]}
        </Text>
      </View>

      <View style={styles.swell}>
        <MaterialCommunityIcons
          name="arrow-down-bold"
          size={40}
          color="#0527cb"
          style={{
            transform: [{ rotate: `${forecastHour["swell"]["direction"]}deg` }],
          }}
        />

        <Text>
          {forecastHour["swell"]["height"]}
          {forecastHour["swell"]["unit"]} @{forecastHour["swell"]["period"]}s
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    height: 50,
  },
  hour: {
    justifyContent: "center",
    flexDirection: "row",
    flex: 0.2,
    paddingLeft: 5,
  },
  temperature: {
    flexDirection: "row",
    flex: 0.15,
  },
  wind: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 0.3,
  },
  swell: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 0.6,
  },
});

export default HourlyForecastListItem;
