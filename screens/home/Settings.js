import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { COLORS, ROUTES } from "../../constants";
import { _t } from "../../locale/translate";
import CustomText from "../../components/CustomText";
const { width } = Dimensions.get("screen");

const Settings = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 10,
        justifyContent: "start",
        alignItems: "stretch",
        backgroundColor: COLORS.bgColor,
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate(ROUTES.SETTINGS_DETAIL)}
        style={styles.button}
        activeOpacity={0.8}
      >
        <CustomText style={styles.buttonText}>
          {_t("Notification settings")}
        </CustomText>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate(ROUTES.MOBILE_LOGIN)}
        style={styles.link}
        activeOpacity={0.8}
      >
        <CustomText style={styles.linkText}>{_t("Log out")}</CustomText>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    padding: 17,
    marginBottom: 10,
    borderRadius: 5,
    fontSize: 18,
  },
  link: {
    padding: 17,
    marginBottom: 10,
    borderRadius: 5,
    fontSize: 18,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  linkText: {
    color: COLORS.primary,
    fontWeight: "bold",
    textAlign: "center",
  },
});
