/**
 * @file TideChart.js
 * Contains the TideChart component and the
 * function call for getting the tide data from the MSW API.
 */

// React
import React from "react";
import { Text, View } from "react-native";
// Charts
import { VictoryArea, VictoryChart, VictoryAxis } from "victory-native";
// Utilities
import commonStyles from "../static/commonStyles";
import { GetTideData } from "../static/mswData";

const tideData = GetTideData();

let formattedTime = [3, 6, 9, 12, 15, 18, 21];

/**
 * @function TideChart
 * A chart for displaying the tide (metres) against time (hour) for the current day (using the MSW API data).
 */
const TideChart = () => {
  return (
    <View>
      <Text style={commonStyles.cardHeading}>Tide (metres)</Text>
      <VictoryChart
        height={225}
        style={{
          background: {
            fill: "#d4f2ff",
          },
        }}
      >
        <VictoryArea
          interpolation="natural"
          data={tideData}
          style={{ data: { fill: "#0527cb" } }}
        />

        <VictoryAxis dependentAxis />

        <VictoryAxis
          crossAxis
          scale={{ x: "time" }}
          fixLabelOverlap={true}
          standalone={false}
          label="Time (hour)"
          tickValues={formattedTime}
        />
      </VictoryChart>
    </View>
  );
};

export default TideChart;
