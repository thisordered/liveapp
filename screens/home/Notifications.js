import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants";
import { _t } from "../../locale/translate";

const Notifications = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.bgColor,
      }}
    >
      <Text>{_t("There is no notification for now")}</Text>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({});
