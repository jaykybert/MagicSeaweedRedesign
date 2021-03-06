// React
import React from "react";
import { Image, View } from "react-native";

/**
 * @function Header
 * A custom header for the application that contains the Magicseaweed logo.
 */
const Header = () => {
  return (
    <View>
      <Image
        source={require("../assets/logo.bmp")}
        style={{ width: 75, height: 40 }}
      />
    </View>
  );
};

export default Header;
