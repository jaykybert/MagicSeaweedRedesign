// React & Navigation
import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import Video from "react-native-video";

/**
 * @function BeachMediaTab
 * Screen for displaying media related to the beach - images, videos, beach webcam, etc.
 * @returns BeachMediaTab Component
 */
const BeachMediaTab = () => {
  return (
    <View style={BeachMediaTabStyles.container}>
      <View>
        <View style={BeachMediaTabStyles.heading}>
          <Text style={BeachMediaTabStyles.headingText}>Beachcam</Text>
        </View>
      </View>
      <Image
        source={require("../assets/video.jpg")}
        style={BeachMediaTabStyles.video}
      />
      <View>
        <View style={BeachMediaTabStyles.heading}>
          <Text style={BeachMediaTabStyles.headingText}>Gallery</Text>
        </View>
      </View>
    </View>
  );
};

const BeachMediaTabStyles = StyleSheet.create({
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
