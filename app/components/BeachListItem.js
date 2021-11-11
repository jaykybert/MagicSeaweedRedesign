/**
 * @file BeachListItem.js
 * Contains the BeachListItem component and relevant styles.
 */

// React
import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

/**
 * @function BeachListItem
 * Represents a single, clickable beach. Found inside BeachList.
 *
 * @param {beachItem} - (Dummy) Object relevant to a beach. Contains an id, name, and the distance to it.
 * @param {onPress}  - BeachList's onPress is passed as a prop to BeachListItem and called inside its onPress.
 */
const BeachListItem = ({ beachItem, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.rowItem}
        activeOpacity={0.4}
        underlayColor="#fff"
        onPress={onPress}
      >
        <View>
          <Text style={styles.heading}>{beachItem["name"].toUpperCase()}</Text>
          <Text style={styles.distance}>
            {beachItem["distanceMiles"]} miles
          </Text>

          <TouchableHighlight
            style={styles.pinIcon}
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

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 5,
  },
  rowItem: {
    justifyContent: "center",
    backgroundColor: "#fff",
    height: 85,
    paddingLeft: 10,
    borderRadius: 10,
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
