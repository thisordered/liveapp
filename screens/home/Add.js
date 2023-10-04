import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import { _t } from "../../locale/translate";

const Add = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.bgColor,
      }}
    >
      <Text>{_t("Add")}</Text>
    </View>
  );
};

export default Add;
