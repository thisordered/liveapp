import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import CustomText from "../../components/CustomText";
import { _t } from "../../locale/translate";

const Register = () => {
  return (
    <SafeAreaView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CustomText>{_t("Register")}</CustomText>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({});
