import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, ForgotPassword, Register } from "../screens";
import { COLORS, ROUTES } from "../constants";
import DrawerNavigator from "./DrawerNavigator";
import MobileLogin from "../screens/auth/MobileLogin";

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName={ROUTES.MOBILE_LOGIN}>
      <Stack.Screen
        name={ROUTES.MOBILE_LOGIN}
        component={MobileLogin}
        options={({ route }) => ({
          headerTintColor: COLORS.white,
          headerShown: false,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        })}
      />
      <Stack.Screen
        name={ROUTES.FORGOT_PASSWORD}
        component={ForgotPassword}
        options={({ route }) => ({
          headerTintColor: COLORS.white,
          // headerBackTitle: 'Back',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          title: route.params.userId,
        })}
      />
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
      <Stack.Screen
        name={ROUTES.HOME}
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
