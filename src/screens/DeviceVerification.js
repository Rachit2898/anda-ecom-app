//This screen has UI and functionality of veriy email which comes under the alert box on dashboard

import {
  Text,
  View,
  Pressable,
  TextInput,
  Image,
  Alert,
  Linking,
  ScrollView,
  Button,
} from "react-native";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Recaptcha from "react-native-recaptcha-that-works";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import getEnvVars from "../config/enviroment";
import {
  updateDeviceValidation,
  userInfo,
  cartInfo,
  verifyDeviceToken,
} from "../redux/features/productApi";
import { removeUrls, authTokenChanged } from "../redux/features/authUser";
import { styles } from "../Style/Style";
import TabBar from "../components/TabBar";
import { update } from "lodash";

const DeviceVerification = () => {
  const dispatch = useDispatch();
  const { userInfoData, loading, verifyDeviceTokenData } = useSelector(
    (state) => ({
      ...state.products,
    })
  );
  const { ERROR_ALERT_IMAGE, apiUrl } = getEnvVars();
  const $recaptcha = useRef();
  const size = "normal";
  const navigation = useNavigation();
  const [open, setOpen] = useState(true);
  const [email, setEmail] = useState(userInfoData?.emailAddress);
  const [code, setCode] = useState();
  const [validEmail, setValidEmail] = useState(true);
  const [verifyTokenError, setVerifyTokenError] = useState(false);
  const [codeRequiredError, setCodeRequiredError] = useState(false);
  const [verifyToken, setVerifyToken] = useState(false);

  const openHandler = () => {
    setOpen((pre) => !pre);
  };

  async function setRedirectUrl() {
    await AsyncStorage.setItem("redirectUrl", "/account/home");
  }

  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  const onChangeText = (value) => {
    setEmail(value);
    setValidEmail(emailIsValid(value));
  };

  const handleClosePress = useCallback(() => {
    $recaptcha.current.close();
  }, []);

  const handleOpenPress = useCallback(() => {
    $recaptcha.current.open();
  }, []);
  const onChangeCode = (value) => {
    setCode(value);
    setVerifyToken(true);
    setCodeRequiredError(false);
    setVerifyTokenError(false);
  };

  async function setToken(token) {
    await AsyncStorage.setItem("token", token);
  }

  const requestCodeHandler = async () => {
    handleOpenPress();
  };

  const submitApiHandler = async (token) => {
    if (token) {
      if (verifyToken) {
        const response = await dispatch(
          verifyDeviceToken({ token: code, recaptcha: token })
        );
        if (response?.payload?.token) {
          dispatch(authTokenChanged(response?.payload?.token));
          setToken(response?.payload?.token);
        }
      } else {
        const response = await dispatch(
          updateDeviceValidation({ email: email, recaptcha: token })
        );
        if (response?.meta?.requestStatus === "fulfilled") {
          AlertMessage();
        }
      }
    }
  };
  const verifyCodeHandler = async () => {
    if (!code?.length) {
      setCodeRequiredError(true);
      return;
    }
    requestCodeHandler();
  };

  useEffect(() => {
    dispatch(userInfo());
    dispatch(cartInfo());
  }, []);

  useEffect(() => {
    if (open) {
      setEmail(userInfoData?.emailAddress);
    }
  }, [open]);
  async function AlertMessage() {
    Alert.alert(
      "",
      "Verification code has been sent to your registered email address",
      [{ text: "OK", onPress: () => null }]
    );
  }

  const okHandler = () => {
    setRedirectUrl();
    dispatch(removeUrls());
  };

  useEffect(() => {
    if (verifyDeviceTokenData === "error") {
      setVerifyTokenError(true);
      return;
    }
    if (!!verifyDeviceTokenData?.token) {
      Alert.alert("", "Verification code successfully verified", [
        { text: "OK", onPress: () => okHandler() },
      ]);
    }
  }, [verifyDeviceTokenData]);

  return (
    <SafeAreaView style={styles.safeAreaView} edges={["right", "left"]}>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              marginTop: 15,
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                color: "#494c4c",
                textAlign: "center",
              }}
            >
              Account Security: Device Verification
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
              justifyContent: "center",
              alignSelf: "center",
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                color: "#494c4c",
                textAlign: "center",
              }}
            >
              You are required to complete this two-step verification process
              before you can access your account.
            </Text>
          </View>
          <View
            style={{
              margin: 10,
              borderColor: "#ececec",
              borderWidth: 1,
              padding: 10,
            }}
          >
            <Text style={{ color: "#006ba6", fontWeight: "700" }}>
              1. REQUEST VERIFICATION CODE
            </Text>
            <Text style={{ color: "#494c4c", paddingVertical: 10 }}>
              Click on the button below to send a verification code to the email
              address we have on file:
            </Text>
            <Text style={{ fontWeight: "700", color: "#494c4c" }}>
              {userInfoData?.emailAddress}
            </Text>
            <Text style={{ color: "#494c4c", paddingVertical: 10 }}>
              A verification code will be sent to this address from
              <Text style={{ fontWeight: "700" }}> info@andanet.com.</Text> This
              code will expire within 30 minutes.
            </Text>
            {open ? (
              <View>
                <View style={{ flexDirection: "row" }}>
                  <Pressable
                    style={{
                      backgroundColor: "#006ba6",
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      borderRadius: 3,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onPress={() => {
                      requestCodeHandler();
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#fff",
                        fontWeight: "bold",
                      }}
                    >
                      REQUEST CODE
                    </Text>
                  </Pressable>
                </View>
                <Pressable
                  style={{ paddingTop: 10 }}
                  onPress={() => openHandler()}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#006ba6",
                    }}
                  >
                    Use a different email address
                  </Text>
                </Pressable>
              </View>
            ) : (
              <View>
                <View>
                  <Text style={{ color: "#494c4c" }}>EMAIL ADDRESS*</Text>
                </View>
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.TextInput}
                    placeholderTextColor="#9d9b9b"
                    onChangeText={(value) => onChangeText(value)}
                  />
                </View>
                {!validEmail ? (
                  <View style={styles.errorView}>
                    <Image
                      style={{ height: 19, width: 18 }}
                      source={ERROR_ALERT_IMAGE}
                    />
                    <Text style={{ color: "#990909", marginHorizontal: 10 }}>
                      Email address is not valid.
                    </Text>
                  </View>
                ) : null}
                <View style={{ flexDirection: "row" }}>
                  <Pressable
                    style={styles.blueButton}
                    onPress={() => {
                      requestCodeHandler();
                    }}
                    disabled={!validEmail}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#fff",
                        fontWeight: "bold",
                      }}
                    >
                      REQUEST CODE
                    </Text>
                  </Pressable>
                </View>
                <Pressable
                  style={{ paddingTop: 10 }}
                  onPress={() => openHandler()}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#006ba6",
                    }}
                  >
                    Use existing email address.
                  </Text>
                </Pressable>
              </View>
            )}
          </View>
          <View
            style={{
              margin: 10,
              borderColor: "#ececec",
              borderWidth: 1,
              padding: 10,
            }}
          >
            <Text style={{ color: "#006ba6", fontWeight: "700" }}>
              2. ENTER VERIFICATION CODE
            </Text>
            <View style={{ marginTop: 10 }}>
              <View style={{ marginBottom: 10 }}>
                <Text style={{ color: "#494c4c" }}>VERIFICATION CODE*</Text>
              </View>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.TextInput}
                  placeholderTextColor="#9d9b9b"
                  onChangeText={(value) => onChangeCode(value)}
                />
              </View>
              {codeRequiredError ? (
                <View style={styles.errorView}>
                  <Image
                    style={{ height: 19, width: 18 }}
                    source={ERROR_ALERT_IMAGE}
                  />
                  <Text style={{ color: "#990909", marginHorizontal: 10 }}>
                    Verification Code is required.
                  </Text>
                </View>
              ) : null}
              {verifyTokenError ? (
                <View style={styles.errorView}>
                  <Image
                    style={{ height: 19, width: 18 }}
                    source={ERROR_ALERT_IMAGE}
                  />
                  <Text style={{ color: "#990909", marginHorizontal: 5 }}>
                    Verification Code is invalid. Please try again.
                  </Text>
                </View>
              ) : null}
            </View>
            <View style={{ flexDirection: "row" }}>
              <Pressable
                style={styles.blueButton}
                onPress={() => verifyCodeHandler()}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  VERIFY CODE
                </Text>
              </Pressable>
            </View>
            <Text style={{ color: "#494c4c", paddingVertical: 10 }}>
              <Text style={{ fontWeight: "700", color: "#494c4c" }}>
                Expired Code?
              </Text>{" "}
              Click the "Request Code" button again.
            </Text>
          </View>
          <View
            style={{
              margin: 10,
              borderColor: "#ececec",
              borderWidth: 1,
              padding: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "700",
                color: "#494c4c",
                paddingVertical: 10,
              }}
            >
              Have questions?
            </Text>
            <Text
              style={{ fontWeight: "700", color: "#494c4c", paddingTop: 10 }}
            >
              Tech Support
            </Text>
            <Text
              onPress={() => Linking.openURL(`tel:${18772632638}`)}
              style={{ fontWeight: "700", color: "#006ba6" }}
            >
              1-877-263-2638
            </Text>
            <Text
              style={{ fontWeight: "700", color: "#494c4c", paddingTop: 10 }}
            >
              Monday - Friday
            </Text>
            <Text style={{ color: "#494c4c" }}>8:30 a.m. to 9:00 p.m. ET</Text>
            <Text
              style={{ fontWeight: "700", color: "#494c4c", paddingTop: 10 }}
            >
              Saturdays
            </Text>
            <Text style={{ color: "#494c4c" }}>10:00 a.m. to 3:00 p.m. ET</Text>
          </View>
          <Recaptcha
            ref={$recaptcha}
            lang="en"
            headerComponent={
              <Button title="Close" onPress={handleClosePress} />
            }
            siteKey="6LeFpDsUAAAAAEH42hEfizz1r977dUTyqdr55tPj"
            baseUrl={apiUrl}
            size={size}
            theme="light"
            onError={(err) => {
              console.warn("error", err);
            }}
            onVerify={(token) => {
              submitApiHandler(token);
            }}
          />
        </ScrollView>
        <View style={{ left: 0, right: 0, bottom: 0 }}>
          <TabBar />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DeviceVerification;
