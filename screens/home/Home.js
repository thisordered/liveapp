import { FlatList, StyleSheet, View } from "react-native";
import { COLORS, IMGS } from "../../constants";
import { Dimensions, Image } from "react-native";
import { _t } from "../../locale/translate";
import Icon from "react-native-vector-icons/Ionicons";
import { activityColor } from "../../utils/activities";
import CustomText from "../../components/CustomText";
import { Avatar } from "react-native-paper";

const { width } = Dimensions.get("screen");

let timer = {};

timer.addHour = (hour) => {
  let dt = new Date();
  dt.setHours(dt.getHours() + hour);
  return dt.toLocaleTimeString();
};

let activities = [
  {
    userName: "احمدرضا رهنورد",
    activityStatus: "file-created",
    activityType: _t("Created a new file"),
    activityIcon: "document",
  },
  {
    userName: "علی پرهام",
    activityStatus: "live-scheduled",
    activityType:
      _t(`scheduled a live for`) +
      " " +
      timer.addHour(Math.floor(Math.random() * (9 - 1 + 1))),
    activityIcon: "alarm",
  },
  {
    userName: "رضا کوهی",
    activityStatus: "is-live",
    activityType: _t("is live"),
    activityIcon: "videocam",
  },
  {
    userName: "راضیه تهرانچی",
    activityStatus: "article-created",
    activityType: _t("posted a new article"),
    activityIcon: "newspaper",
  },
];

const Home = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={activities}
        renderItem={({ item }) => (
          <View style={styles.activityItem} key={item.userName}>
            <View style={styles.activityItemContent}>
              <View style={styles.activityItemContentInner}>
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

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: width,
    padding: 10,
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: COLORS.bgColor,
  },
  activityItem: {
    width: width - 15,
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
