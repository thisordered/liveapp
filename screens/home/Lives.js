import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import { COLORS, IMGS } from "../../constants";
import { _t } from "../../locale/translate";
import { activityColor } from "../../utils/activities";
import { SCREEN_WIDTH } from "../../utils";
import Icon from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-paper";
import CustomText from "../../components/CustomText";

let activities = [
  {
    userName: "رضا کوهی",
    activityStatus: "is-live",
    activityType: _t("is live"),
    activityIcon: "videocam",
  },
];

const Lives = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={activities}
        renderItem={({ item }) => (
          <View style={styles.activityItem} key={item.userName}>
            <View style={styles.activityItemContent}>
              <View style={styles.activityItemContentInner}>
                {/* <Image source={IMGS.user} style={styles.userImg} /> */}
                <Avatar.Image
                  size={40}
                  source={IMGS.user}
                  style={styles.userImg}
                />

                <View style={styles.activityItemContentDetails}>
                  <CustomText style={styles.userName} variant="labelLarge">
                    {item.userName}
                  </CustomText>
                  <CustomText style={styles.activityType}>
                    {" "}
                    {item.activityType}
                  </CustomText>
                </View>
              </View>
              <Icon
                name={item.activityIcon}
                size={22}
                style={styles.activityItemContentIcon}
                color={activityColor(item.activityStatus)}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Lives;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: SCREEN_WIDTH,
    padding: 10,
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: COLORS.bgColor,
  },
  activityItem: {
    width: SCREEN_WIDTH - 15,
    padding: 10,
    backgroundColor: COLORS.white,
    marginBottom: 10,
    borderRadius: 4,
    height: 80,
  },
  activityItemContent: {
    width: "100%",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
  },
  activityItemContentInner: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  activityItemContentDetails: {
    flexDirection: "column",
    alignItems: "end",
  },
  activityItemContentIcon: {
    paddingHorizontal: 4,
  },
  userImg: {
    marginLeft: 10,
  },
  userName: {
    fontWeight: 900,
  },
  activityType: {
    marginRight: 4,
    marginTop: 4,
  },
});
