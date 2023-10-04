import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Dimensions,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { COLORS, IMGS } from "../constants";

const { width } = Dimensions.get("screen");

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground
        source={IMGS.bgPattern}
        resizeMode="cover"
        style={styles.bgImage}
      >
        <Image source={IMGS.user} style={styles.userImg} />
      </ImageBackground>
      <View style={styles.drawerListWrapper}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userImg: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    position: "absolute",
    left: width / 2 - 120,
    bottom: -110 / 2,
    borderWidth: 4,
    borderColor: COLORS.white,
  },
  bgImage: {
    height: 140,
    justifyContent: "center",
  },
  drawerListWrapper: {
    marginTop: 65,
    textAlign: "right",
  },
});
