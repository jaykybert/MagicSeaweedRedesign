/** @file TideChart.js
 * Contains the TideChart component and the
 * function call for getting the (dummy) tide data.
 */

// React
import React from "react";
import { Text, View } from "react-native";
// Charts
import { VictoryArea, VictoryAxis, VictoryChart } from "victory-native";
// Utilities
import commonStyles from "../static/styles";
import { GetTideData } from "../scripts/mswData";

const tideData = GetTideData();

let formattedTime = [3, 6, 9, 12, 15, 18, 21];
/**
 * @function TideChart
 * A chart for displaying the tide against time for the current day (using dummy data.)
 * @returns TideChart Component
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
