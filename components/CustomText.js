import { Text } from "react-native-paper";

export default function CustomText(props) {
  return (
    <Text {...props} style={{ fontFamily: "IRANSans", ...props.style }}>
      {props.children}
    </Text>
  );
}
