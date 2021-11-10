/** @file ForecastListItem.js
 *  Contains the ForecastListItem component and relevant styles.
 */

// React
import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

/**
 * Represents a forecast for a particular day. Found inside BeachForecastTab.
 *
 *
 * @returns ForecastListItem Component
 */
const ForecastListItem = ({ forecastData, onPress }) => {
  return <View style={Styles.container}></View>;
};

function onPinPress() {
  alert("Beach Pinned!\n(Not Implemented)");
}

const Styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 5,
  },
  rowItem: {
    justifyContent: "center",
    backgroundColor: "#fff",
    height: 85,
    paddingLeft: 10,
  },
  heading: {
    color: "#262727",
    fontSize: 22,
    fontWeight: "500",
  },
  distance: {
    fontStyle: "italic",
  },
  pinIcon: {
    backgroundColor: "#fff",
    flexDirection: "row-reverse",
  },
});

export default ForecastListItem;
