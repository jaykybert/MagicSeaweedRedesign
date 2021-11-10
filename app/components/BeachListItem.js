/** @file BeachListItem.js
 *  Contains the BeachListItem component and relevant styles.
 */

// React
import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

/**
 * Represents a single, clickable beach. Found inside BeachListItem.
 *
 * @param {beachItem} - (Dummy) Object relevant to a beach. Contains an id, name, and relative distance.
 * @param {onPress}  - BeachList's onPress is called through BeachListItem's onPress.
 *
 * @returns BeachListItem Component
 */
const BeachListItem = ({ beachItem, onPress }) => {
  return (
    <View style={Styles.container}>
      <TouchableHighlight
        style={Styles.rowItem}
        activeOpacity={0.4}
        underlayColor="#fff"
        onPress={onPress}
      >
        <View>
          <Text style={Styles.heading}>{beachItem["name"].toUpperCase()}</Text>
          <Text style={Styles.distance}>
            {beachItem["distanceMiles"]} miles
          </Text>

          <TouchableHighlight
            style={Styles.pinIcon}
            activeOpacity={0.4}
            underlayColor="#fff"
            onPress={onPinPress}
          >
            <MaterialCommunityIcons name="pin" size={20} />
          </TouchableHighlight>
        </View>
      </TouchableHighlight>
    </View>
  );
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

export default BeachListItem;
