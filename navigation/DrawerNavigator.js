import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { COLORS, ROUTES } from "../constants";
import { Wallet, Notifications } from "../screens";
import BottomTabNavigator from "./BottomTabNavigator";
import Icon from "react-native-vector-icons/Ionicons";
import CustomDrawer from "../components/CustomDrawer";
import { StyleSheet } from "react-native";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: COLORS.white,
      }}
    >
      <Drawer.Screen
        name={ROUTES.HOME_DRAWER}
        component={BottomTabNavigator}
        options={{
          title: ROUTES.HOME,
          headerTitleAlign: "center",
          drawerLabelStyle: styles.drawerLabel,
          drawerContentStyle: {
            flexDirection: "row-reverse",
          },
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="home-sharp" size={18} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={ROUTES.WALLET_DRAWER}
        component={Wallet}
        options={{
          title: ROUTES.WALLET,
          headerShown: true,
          headerTitleAlign: "center",
          drawerLabelStyle: styles.drawerLabel,

          drawerIcon: ({ focused, color, size }) => (
            <Icon name="wallet" size={18} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={ROUTES.NOTIFICATIONS_DRAWER}
        component={Notifications}
        options={{
          title: ROUTES.NOTIFICATIONS,
          headerShown: true,
          headerTitleAlign: "center",
          drawerLabelStyle: styles.drawerLabel,

          drawerIcon: ({ focused, color, size }) => (
            <Icon name="notifications" size={18} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;

const styles = StyleSheet.create({
  drawerLabel: {
    textAlign: "right",
    fontFamily: "IRANSans",
  },
});
