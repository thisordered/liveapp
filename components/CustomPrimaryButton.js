import { StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../constants";
import CustomText from "./CustomText";

export function CustomPrimaryButton(props) {
  return (
    <TouchableOpacity {...props} style={styles.button} activeOpacity={0.8}>
      <CustomText style={styles.buttonText}>{props.label}</CustomText>
    </TouchableOpacity>
  );
}

export function CustomOutlinedButton(props) {
  return (
    <TouchableOpacity
      {...props}
      style={styles.buttonOutlined}
      activeOpacity={0.8}
    >
      <CustomText style={styles.buttonOutlinedText}>{props.label}</CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    padding: 17,
    marginBottom: 10,
    borderRadius: 5,
    fontSize: 18,
  },
  buttonOutlined: {
    borderWidth: 2,
    borderColor: COLORS.primary,
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
  buttonOutlinedText: {
    color: COLORS.primary,
    fontWeight: "bold",
    textAlign: "center",
  },
});
