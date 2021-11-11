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
          <Text style={commonStyles.cardHeading}>Hour</Text>
        </View>

        <View style={styles.temperatureHeading}>
          <Text style={commonStyles.cardHeading}>Temp</Text>
        </View>

        <View style={styles.windHeading}>
          <Text style={commonStyles.cardHeading}>Wind</Text>
        </View>

        <View style={styles.swellHeading}>
          <Text style={commonStyles.cardHeading}>Swell</Text>
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
    backgroundColor: "#d4f2ff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#0527cb",
    borderBottomWidth: 2,
  },
  hourHeading: {
    paddingLeft: 25,
    flex: 0.15,
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
