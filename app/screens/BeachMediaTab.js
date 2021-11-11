/**
 * @file BeachMediaTab.js
 * Contains the BeachMediaTab component and relevant styles.
 */

// React & Navigation
import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

/**
 * @function BeachMediaTab
 * Displays media related to the beach - images, videos, beach webcam, etc.
 * This screen is purely a prototype - the beachcam is a static image.
 */
const BeachMediaTab = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.heading}>
          <Text style={styles.headingText}>Beachcam</Text>
        </View>
      </View>
      <Image source={require("../assets/video.jpg")} style={styles.video} />
      <View>
        <View style={styles.heading}>
          <Text style={styles.headingText}>Gallery</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    justifyContent: "center",
    backgroundColor: "#0527cb",
    padding: 3,
    marginTop: 3,
  },

  headingText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
  },
  video: {
    width: "100%",
    height: 200,
  },
});

export default BeachMediaTab;
