import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { COLORS } from "../constants";

const CustomTabBarButton = (props) => {
  const { children, accessibilityState, onPress } = props;

  if (accessibilityState.selected) {
    return (
      <View style={styles.buttonnWrapper}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={onPress}
          style={[styles.activeButton]}
        >
          <Text>{children}</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        style={[styles.inactiveButton]}
      >
        <Text>{children}</Text>
      </TouchableOpacity>
    );
  }
};

export default CustomTabBarButton;

const styles = StyleSheet.create({
  buttonnWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  inactiveButton: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    transform: "scaleX(-1)",
  },
  activeButton: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    transform: "scaleX(-1)",
  },
});
