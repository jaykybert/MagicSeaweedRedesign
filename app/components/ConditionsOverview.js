// React
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Utilites
import commonStyles from "../static/commonStyles";

const HARD_CODED_OVERVIEW =
  "Despite the ideal wind speed, the direction is onshore. Also, the swell is small. Not a good day for surfing.";

/**
 * @function ConditionsOverview
 * HARD-CODED. This function (should) determine surf conditions based on data returned from
 * the API, and (should) return a short textual description suggesting whether the conditions
 * are good or bad enough for surf.
 */
const ConditionsOverview = () => {
  return (
    <View>
      <Text style={commonStyles.cardHeading}>Conditions</Text>
      <View style={styles.overview}>
        <Text>{HARD_CODED_OVERVIEW}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overview: {
    justifyContent: "flex-start",
  },
});

export default ConditionsOverview;
