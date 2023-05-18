//This is SearchBar Components Which comes on various Screens

import { Text, View, Pressable, TextInput, Image, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import {
  searchItems,
  searchProducts,
  paginationValue,
} from "../redux/features/productApi";
import { searchValues } from "../redux/features/authUser.js";
import _ from "lodash";
import getEnvVars from "../config/enviroment";
import { styles } from "../Style/Style";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [item, setItem] = useState();
  const isFocused = useIsFocused();
  const [unreadNotificationsCount, setUnreadNotificationsCount] = useState(0);
  const [openSearch, setOpenSearch] = useState(false);
  const [searchValue, setSearchValue] = useState();
  const { searchItem } = useSelector((state) => ({
    ...state.products,
  }));
  const { notificationDetailsData } = useSelector((state) => ({
    ...state.products,
  }));

  useEffect(() => {
    if (notificationDetailsData.length > 0) {
      const unreadNotifications = notificationDetailsData?.filter(
        (notification) => !notification.read
      );
      setUnreadNotificationsCount(unreadNotifications?.length);
    } else {
      setUnreadNotificationsCount(0);
    }
  }, [notificationDetailsData]);

  const { CLOSE_IMAGE, SEARCH_BLUE_IMAGE, SEARCH_IMAGE, BARCODE_IAMGE } =
    getEnvVars();
  const searchItemHandler = async (item) => {
    setSearchValue(item);
    setOpenSearch(true);
    dispatch(searchItems(item));
  };
  const searchProductHandler = async (item) => {
    if (item.length >= 3) {
      try {
        setItem(item);
        dispatch(searchProducts({ searchedValue: item, currentPage: 1 }));
        dispatch(searchValues(item));
        dispatch(paginationValue(1));
        setOpenSearch(false);
        navigation.navigate("SearchProduct");
      } catch (e) {
        Alert.alert(e.message);
      }
    }
  };

  const BarCodeHandler = () => {
    navigation.navigate("Barcode");
  };

  useEffect(() => {
    searchItemHandler("");
  }, [isFocused]);
  const cleanSearchHandler = () => {
    setSearchValue("");
    setOpenSearch(false);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
      }}
    >
      <View style={{ width: "90%" }}>
        <View style={styles.searchBox}>
          <Pressable
            onPress={() => searchProductHandler(searchValue)}
            style={styles.searchIcon}
          >
            {searchValue?.length >= 3 ? (
              <Image
                source={SEARCH_BLUE_IMAGE}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            ) : (
              <Image
                source={SEARCH_IMAGE}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            )}
          </Pressable>

          <TextInput
            style={styles.input}
            placeholder="Search by number, name or keyword"
            onChangeText={(value) => searchItemHandler(value)}
            onClear={(value) => searchItemHandler("")}
            returnKeyType="search"
            onSubmitEditing={() => searchProductHandler(searchValue)}
            value={searchValue}
          />
          <View
            style={{
              justifyContent: "center",
              width: "10%",
              alignItems: "center",
            }}
          >
            {searchValue?.length ? (
              <Pressable onPress={() => cleanSearchHandler()}>
                <Image
                  source={CLOSE_IMAGE}
                  style={{
                    width: 15,
                    height: 15,
                  }}
                />
              </Pressable>
            ) : null}
          </View>

          <Pressable
            style={{
              justifyContent: "center",
            }}
            onPress={() => BarCodeHandler()}
          >
            <Image
              source={BARCODE_IAMGE}
              style={{
                width: 30,
                height: 30,
              }}
            />
          </Pressable>
        </View>
        {searchItem.length > 0 && openSearch ? (
          <View
            style={{
              borderBottomWidth: 0.3,
              borderColor: "#9b9b9b",
              width: "110%",
            }}
          >
            {searchItem?.map((item, i) => {
              let title = _.split(
                _.toLower(item),
                _.toLower(_.trim(searchValue))
              );
              title = _.flatMap(title, (t, i) => [
                _.toUpper(t),
                <Text
                  style={{ fontWeight: "bold", color: "#494c4c" }}
                  key={"1" + i}
                >
                  {_.toUpper(searchValue)}
                </Text>,
              ]);
              title.pop();
              return (
                <View key={item}>
                  {searchValue.length > 0 && (
                    <Pressable
                      style={styles.searchItemList}
                      android_ripple={{ color: "#ccc" }}
                      onPress={() => searchProductHandler(item)}
                    >
                      <Text
                        numberOfLines={2}
                        ellipsizeMode="tail"
                        style={styles.search}
                      >
                        {title}
                      </Text>
                    </Pressable>
                  )}
                </View>
              );
            })}
          </View>
        ) : null}
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate("NotificationDetails");
        }}
        style={{ top: 10 }}
      >
        <Ionicons name="notifications-outline" size={24} color="black" />
        {unreadNotificationsCount > 0 && (
          <View
            style={{
              position: "absolute",
              top: -8,
              right: -5,
              backgroundColor: "#2089dc",
              borderRadius: 10,
              minWidth: 20,
              minHeight: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 12 }}>
              {unreadNotificationsCount}
            </Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default Navbar;
