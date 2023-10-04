import { TextInput } from "react-native";
import { COLORS } from "../constants";

export default function CustomTextInput(props) {
  return (
    <TextInput
      {...props}
      style={{
        textAlign: "right",
        fontFamily: "IRANSans",
        borderWidth: 1,
        borderColor: COLORS.grayLight,
        padding: 15,
        marginVertical: 10,
        borderRadius: 5,
        height: 55,
        paddingVertical: 0,
        ...props.style,
      }}
    />
  );
}

// const styles = StyleSheet.create({
//   input: {
//     borderWidth: 1,
//     borderColor: COLORS.grayLight,
//     padding: 15,
//     marginVertical: 10,
//     borderRadius: 5,
//     height: 55,
//     paddingVertical: 0,
//   },
// });
