import { Text, View, Pressable, Alert, Linking } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { cartCheckOut, resetDataHandler } from "../redux/features/productApi";
import { useNavigation } from "@react-navigation/native";
import TabBar from "../components/TabBar";
import CartInfo from "../components/CartInfo";
import CartScreen from "../components/CartScreen";
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "../Style/Style";
import Spinner from "../components/Spinner";
import Loader from "../components/Loader";
import getEnvVars from "../config/enviroment";

const NotificationDetails = () => {
  const { notificationDetailsData } = useSelector((state) => ({
    ...state.products,
  }));
  const [notifications, setNotifications] = useState(notificationDetailsData);

  useEffect(() => {
    if (notifications.length > 0) {
      const sortedNotifications = [...notifications].sort(
        (a, b) => b.messageId - a.messageId
      );
      setNotifications(sortedNotifications);
    }
  }, []);

  return (
    <SafeAreaView
      style={{ backgroundColor: "#fff", flex: 1 }}
      edges={["right", "left"]}
    >
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {notifications?.length > 0 ? (
              <View>
                {notifications?.map((data) => {
                  return (
                    <View style={{ margin: 10 }} key={data.messageId}>
                      <View
                        style={{
                          backgroundColor: "#fafafa",
                          borderRadius: 5,
                          padding: 20,
                          width: "100%",
                        }}
                      >
                        <Text style={{ color: "#494c4c", fontSize: 15 }}>
                          {data?.message}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            ) : (
              <View
                style={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              >
                <View
                  style={{
                    borderRadius: 5,
                    padding: 20,
                    width: "100%",
                  }}
                >
                  <Text style={{ color: "#494c4c", fontSize: 15 }}>
                    No notifications yet.
                  </Text>
                </View>
              </View>
            )}
          </ScrollView>
        </View>

        <View style={{ left: 0, right: 0, bottom: 0 }}>
          <TabBar />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotificationDetails;
