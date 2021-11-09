/** @file TideChart.js
 * Contains the TideChart component, relevant styles, and the
 * function call for getting the (dummy) tide data.
 */

// React
import React from "react";
import { StyleSheet, View } from "react-native";
// Charts
import { VictoryChart, VictoryAxis, VictoryArea } from "victory-native";
// Utilities
import { GetTideData } from "../scripts/api";

const tideData = GetTideData();

/**
 * @function TideChart
 * A chart for displaying the tide against time for the current day (using dummy data.)
 * @returns TideChart Component
 */
const TideChart = () => {
  return (
    <View style={TideChartStyles.chart}>
      <VictoryChart>
        <VictoryArea
          interpolation="natural"
          data={tideData}
          style={{ data: { fill: "#0527cb" } }}
        />

        <VictoryAxis dependentAxis label="Tide (m)" />

        <VictoryAxis
          scale={{ x: "time" }}
          fixLabelOverlap={true}
          standalone={false}
          label="Time"
        />
      </VictoryChart>
    </View>
  );
};

const TideChartStyles = StyleSheet.create({
  chart: {
    marginLeft: 50,
    justifyContent: "center",
  },
  bigText: {
    fontSize: 25,
  },
});

export default TideChart;
