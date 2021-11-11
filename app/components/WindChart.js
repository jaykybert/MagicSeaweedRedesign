/**
 * @file WindChart.js
 * Contains the WindChart component and the
 * function call for getting the wind data from the MSW API.
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
import commonStyles from "../static/commonStyles";
import { GetWindData } from "../static/mswData";

const windData = GetWindData();
// Min and max wind speed used to better scale the chart.
const maxSpeed = Math.max(...windData.map((datum) => datum.y));
const minSpeed = Math.min(...windData.map((datum) => datum.y));

let formattedTime = [3, 6, 9, 12, 15, 18, 21];

/**
 * @function WindChart
 * A chart for displaying the wind speed (mph) against time (hour) for the current day (using the MSW API data).
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
        style={{
          background: { fill: "#d4f2ff" },
        }}
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
