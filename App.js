import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./navigation/AuthNavigator";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native-web";

export default function App() {
  const [fontsLoaded] = useFonts({
    IRANSans: require("./assets/fonts/IRANSansWeb.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={{ flex: 1, fontFamily: "IRANSans" }}>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </View>
  );
}
