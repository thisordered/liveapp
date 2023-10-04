import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Platform, TouchableOpacity } from "react-native";
import { COLORS, ROUTES } from "../constants";
import { Home, Wallet, Notifications, Settings } from "../screens";
import Icon from "react-native-vector-icons/Ionicons";
import SettingsNavigator from "./SettingsNavigator";
import CustomTabBarButton from "../components/CustomTabBarButton";
import CustomTabBar from "../components/CustomTabBar";
import { useNavigation } from "@react-navigation/native";
import { _t } from "../locale/translate";
import Add from "../screens/home/Add";
import Lives from "../screens/home/Lives";
import Products from "../screens/home/Products";

const Tab = createBottomTabNavigator();

function HeaderMenu() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Icon
        name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
        size={30}
        color={COLORS.dark}
        style={{ marginLeft: 10 }}
      />
    </TouchableOpacity>
  );
}

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: COLORS.dark,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLORS.primary,

        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === ROUTES.ACTIVITIES) {
            iconName = focused ? "pulse" : "pulse-outline";
          } else if (route.name === ROUTES.SETTINGS_NAVIGATOR) {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === ROUTES.LIVES) {
            iconName = focused ? "videocam" : "videocam-outline";
          } else if (route.name === ROUTES.ADD) {
            iconName = focused ? "add-circle" : "add-circle-outline";
          } else if (route.name === ROUTES.PRODUCTS) {
            iconName = focused ? "pricetags" : "pricetags-outline";
          }

          return <Icon name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={ROUTES.ACTIVITIES}
        component={Home}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          tabBarLabelStyle: {
            fontFamily: "IRANSans",
          },
          tabBarButton: (props) => (
            <CustomTabBarButton route="home" {...props} />
          ),
          headerLeft: () => HeaderMenu(),
        }}
      />
      <Tab.Screen
        name={ROUTES.LIVES}
        component={Lives}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          tabBarLabelStyle: {
            fontFamily: "IRANSans",
          },
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          headerLeft: () => HeaderMenu(),
        }}
      />
      <Tab.Screen
        name={ROUTES.ADD}
        component={Add}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          tabBarLabelStyle: {
            fontFamily: "IRANSans",
          },
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} style={{ marginBottom: 10 }} />
          ),
          headerLeft: () => HeaderMenu(),
        }}
      />
      <Tab.Screen
        name={ROUTES.PRODUCTS}
        component={Products}
        options={{
          headerTitleAlign: "center",
          tabBarLabelStyle: {
            fontFamily: "IRANSans",
          },
          headerShown: true,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          headerLeft: () => HeaderMenu(),
        }}
      />
      <Tab.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingsNavigator}
        options={{
          headerTitleAlign: "center",
          tabBarLabelStyle: {
            fontFamily: "IRANSans",
          },
          headerShown: true,
          tabBarButton: (props) => (
            <CustomTabBarButton route="settings" {...props} />
          ),
          headerLeft: () => HeaderMenu(),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    fontFamily: "IRANSans",
    display: "flex",
    transform: "scaleX(-1)",
    backgroundColor: COLORS.transparent,
    borderTopWidth: 0,
    bottom: 0,
    right: 0,
    left: 0,
    height: 60,
    paddingBottom: 10,
  },
});
