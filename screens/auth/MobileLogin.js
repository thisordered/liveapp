import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { COLORS, ROUTES } from "../../constants";
import { useNavigation } from "@react-navigation/native";

import { _t } from "../../locale/translate";
import CustomText from "../../components/CustomText";
import CustomTextInput from "../../components/CustomTextInput";
import {
  CustomOutlinedButton,
  CustomPrimaryButton,
} from "../../components/CustomPrimaryButton";

const MobileLogin = (props) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.wFull}>
          <View style={styles.row}>
            <CustomText style={styles.brandName}>لایو‌اپ</CustomText>
          </View>

          {/* <Text style={styles.loginContinueTxt}> {i18n.t("welcome")}</Text> */}
          <CustomTextInput
            style={styles.input}
            placeholder={_t("Mobile number")}
          />

          <View style={styles.loginBtnWrapper}>
            <CustomPrimaryButton
              onPress={() => navigation.navigate(ROUTES.HOME)}
              label={_t("Continue")}
            />
          </View>
          <View style={styles.loginBtnWrapper}>
            <CustomOutlinedButton
              onPress={() => navigation.navigate(ROUTES.LOGIN)}
              label={_t("Loging in with email")}
            />
          </View>

          {/***************** FORGOT PASSWORD BUTTON *****************/}
          <TouchableOpacity
            onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD)}
            style={styles.forgotPassBtn}
          >
            <CustomText style={styles.forgotPassText}>
              {_t("Forgot Password?")}
            </CustomText>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <CustomText style={styles.footerText}>
            {_t("Don't have an account?")}
          </CustomText>
          <CustomText style={styles.footerText}> </CustomText>
          {/******************** REGISTER BUTTON *********************/}
          <TouchableOpacity
            onPress={() => navigation.navigate(ROUTES.REGISTER)}
          >
            <CustomText style={styles.signupBtn}>{_t("Signup")}</CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MobileLogin;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  container: {
    padding: 15,
    width: "100%",
    position: "relative",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  brandName: {
    fontSize: 42,
    textAlign: "center",
    fontWeight: "bold",
    color: COLORS.primary,
    opacity: 0.9,
  },
  loginContinueTxt: {
    fontSize: 21,
    textAlign: "center",
    color: COLORS.gray,
    marginBottom: 16,
    fontWeight: "bold",
  },
  input: {
    marginVertical: 10,
  },
  // Login Btn Styles
  loginBtnWrapper: {
    height: 55,
    marginTop: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  linearGradient: {
    width: "100%",
    borderRadius: 50,
  },
  loginBtn: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 55,
  },
  loginText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "400",
  },
  forgotPassText: {
    color: COLORS.primary,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 15,
  },
  // footer
  footer: {
    position: "absolute",
    bottom: 20,
    textAlign: "center",
    flexDirection: "row-reverse",
  },
  footerText: {
    color: COLORS.gray,
    fontWeight: "bold",
  },
  signupBtn: {
    color: COLORS.primary,
    fontWeight: "bold",
  },
  forgotPassBtn: {
    color: COLORS.primary,
    fontWeight: "bold",
  },
  // utils
  wFull: {
    width: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  mr7: {
    marginRight: 7,
  },
});
