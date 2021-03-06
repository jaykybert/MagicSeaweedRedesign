/**
 * @file commonStyles.js
 * A file containing common styles used throughout the application.
 */

// React
import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardHeading: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  subHeading: {
    marginTop: -5,
    textAlign: "center",
    fontSize: 16,
    fontStyle: "italic",
  },
});

export default commonStyles;
