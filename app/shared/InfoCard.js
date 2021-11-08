// React
import React from "react";
import { StyleSheet, View } from "react-native";

/**
 * @function InfoCard
 * A styled card component that displays child content.
 * Used inside BeachTodayTab.
 *
 * @param {children} - The content to be nested inside of the InfoCard component.
 * @returns InfoCard Component.
 */
const InfoCard = ({ children }) => {
  return (
    <View style={InfoCardStyles.card}>
      <View>{children}</View>
    </View>
  );
};

const InfoCardStyles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 6,
    shadowColor: "#333",
    shadowRadius: 8,
    marginHorizontal: 8,
    marginVertical: 8,
    padding: 5,
  },
});

export default InfoCard;
