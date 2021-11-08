// React
import React from "react";
import { Text, StyleSheet, View } from "react-native";

/**
 * @function EmptyComponent
 * An empty placeholder component used to flesh out navigation.
 *
 * @return EmptyComponent Component
 */
function EmptyComponent() {
  return (
    <View style={EmptyComponentStyles.Empty}>
      <Text>...</Text>
    </View>
  );
}

const EmptyComponentStyles = StyleSheet.create({
  Empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EmptyComponent;
