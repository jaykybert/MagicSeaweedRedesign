// React
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const HourlyForecastListItem = ({ forecastHour }) => {
  return (
    <View style={Styles.row}>
      <View style={Styles.hour}>
        <Text>{forecastHour["hour"]}</Text>
      </View>

      <View style={Styles.temperature}>
        <Text>{forecastHour["condition"]["temperature"]}</Text>
        <Text>°{forecastHour["condition"]["unit"].toUpperCase()}</Text>
      </View>

      <View style={Styles.wind}>
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

      <View style={Styles.swell}>
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

const Styles = StyleSheet.create({
  row: {
    borderRadius: 5,
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
    flex: 0.1,
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
    flex: 0.35,
  },
  swell: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 0.7,
  },
});

export default HourlyForecastListItem;
