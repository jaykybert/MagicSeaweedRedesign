/**
 * @file BeachForecastTab
 * Contains the BeachForecastTab component and relevant styles.
 */

// React
import React from "react";
import { StyleSheet, Text, View } from "react-native";
// Components
import DailyForecastList from "../components/DailyForecastList";
// Utilities
import commonStyles from "../static/commonStyles";

/**
 * @function BeachForecastTab
 * Displays a table header and the DailyForecastList component.
 */
const BeachForecastTab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tableHeading}>
        <View style={styles.hourHeading}>
          <Text style={styles.tableHeadingText}>Hour</Text>
        </View>

        <View style={styles.temperatureHeading}>
          <Text style={styles.tableHeadingText}>Temp</Text>
        </View>

        <View style={styles.windHeading}>
          <Text style={styles.tableHeadingText}>Wind</Text>
        </View>

        <View style={styles.swellHeading}>
          <Text style={styles.tableHeadingText}>Swell</Text>
        </View>
      </View>

      <DailyForecastList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tableHeading: {
    height: 30,
    backgroundColor: "#0527cb",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
    marginTop: 5,
  },
  tableHeadingText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  hourHeading: {
    paddingLeft: 25,
    flex: 0.15,
    color: "#fff",
  },
  temperatureHeading: {
    flex: 0.15,
  },
  windHeading: {
    flex: 0.35,
  },
  swellHeading: {
    flex: 0.45,
  },
});

export default BeachForecastTab;
