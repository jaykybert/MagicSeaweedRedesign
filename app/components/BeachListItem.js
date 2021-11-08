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
    <View>
      <TouchableHighlight
        style={BeachListItemStyle.rowItem}
        activeOpacity={0.4}
        underlayColor="#FFFFFF"
        onPress={onPress}
      >
        <View>
          <Text style={BeachListItemStyle.heading}>
            {beachItem["name"].toUpperCase()}
          </Text>
          <Text style={BeachListItemStyle.subHeading}>
            {beachItem["distanceMiles"]} miles
          </Text>

          <TouchableHighlight
            style={BeachListItemStyle.pinIcon}
            onPress={testPress}
          >
            <MaterialCommunityIcons name="pin" size={20} />
          </TouchableHighlight>
        </View>
      </TouchableHighlight>
    </View>
  );
};

function testPress() {
  alert("pin press");
}

const BeachListItemStyle = StyleSheet.create({
  rowItem: {
    marginBottom: 5,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    width: "100%",
    height: 90,
  },
  heading: {
    color: "#262727",
    fontSize: 22,
  },
  subHeading: {
    fontStyle: "italic",
  },
  pinIcon: {
    flexDirection: "row",
    backgroundColor: "#fff",
  },
});

export default BeachListItem;
