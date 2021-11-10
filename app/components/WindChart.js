/** @file WindChart.js
 * Contains the WindChart component and the
 * function call for getting the (dummy) wind data.
 */

// React
import React from "react";
import { Text, View } from "react-native";
// Charts
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
} from "victory-native";
// Utilities
import commonStyles from "../static/styles";
import { GetWindData } from "../scripts/mswData";

const windData = GetWindData();
// Min and max wind speed used to better scale the chart.
const maxSpeed = Math.max(...windData.map((datum) => datum.y));
const minSpeed = Math.min(...windData.map((datum) => datum.y));

let formattedTime = [3, 6, 9, 12, 15, 18, 21];
/**
 * @function WindChart
 * A chart for displaying the temperature against time for the current day (using dummy data.)
 * @returns WindChart Component
 */
const WindChart = () => {
  return (
    <View>
      <Text style={commonStyles.cardHeading}>Wind Speed (mph)</Text>
      <VictoryChart
        height={250}
        theme={VictoryTheme.material}
        minDomain={{ y: minSpeed - 1 }}
        maxDomain={{ y: maxSpeed + 1 }}
      >
        <VictoryLine
          data={windData}
          style={{
            data: { stroke: "#242424" },
          }}
          interpolation="natural"
        />

        <VictoryAxis dependentAxis />

        <VictoryAxis
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

export default WindChart;
