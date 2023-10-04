import React from "react";
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { COLORS, ROUTES } from "../../constants";
import { _t } from "../../locale/translate";

const Settings = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 10,
        justifyContent: "start",
        alignItems: "end",
        backgroundColor: COLORS.bgColor,
      }}
    >
      <Text>{_t("Notification settings")}</Text>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    padding: 17,
    margin: 10,
    borderRadius: 5,
    fontSize: 18,
    width: 180,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
