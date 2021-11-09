/** @file TemperatureChart.js
 * Contains the Temperature component and the
 * function call for getting the (dummy) temperature data.
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
import { GetTemperatureData } from "../scripts/mswData";

const temperatureData = GetTemperatureData();
const maxTemp = Math.max(...temperatureData.map((datum) => datum.y));
const minTemp = Math.min(...temperatureData.map((datum) => datum.y));

let formattedTime = [3, 6, 9, 12, 15, 18, 21];
/**
 * @function TemperatureChart
 * A chart for displaying the temperature against time for the current day (using dummy data.)
 * @returns TemperatureChart Component
 */
const TemperatureChart = () => {
  return (
    <View>
      <Text style={commonStyles.cardHeading}>Temperature (°C)</Text>
      <VictoryChart
        height={250}
        theme={VictoryTheme.material}
        minDomain={{ y: minTemp - 1 }}
        maxDomain={{ y: maxTemp + 1 }}
      >
        <VictoryLine
          data={temperatureData}
          style={{
            data: { stroke: "#c43a31" },
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

export default TemperatureChart;
