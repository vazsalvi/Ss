import * as React from "react";
import { Text, StyleSheet, Pressable, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Code = () => {
  return (
    <View style={styles.vcode}>
      <Text style={[styles.didntReceiveAContainer, styles.signInTypo]}>
        <Text style={styles.didntReceiveA}>Didn’t receive a code?</Text>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.sendAgain}>Send again</Text>
      </Text>
      <LinearGradient
        style={[styles.primaryButton, styles.youNeedToLayout]}
        locations={[0, 0.56, 1]}
        colors={["#e49700", "#e4ce00", "rgba(228, 110, 0, 0.78)"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={[styles.signIn, styles.signInTypo]}>Sign In</Text>
        </Pressable>
      </LinearGradient>
      <TextInput
        style={[styles.numberinput, styles.youNeedToLayout]}
        placeholder="Enter Otp Pin "
        keyboardType="number-pad"
        placeholderTextColor="#a6a6a6"
      />
      <View style={styles.titleguide}>
        <Text style={[styles.youNeedTo, styles.youNeedToTypo]}>
          You need to enter 4-digit code we sent to your registered mobile
          number
        </Text>
        <View style={[styles.heading, styles.headingPosition]}>
          <Text style={[styles.verificationCode, styles.headingPosition]}>
            Verification Code
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signInTypo: {
    textAlign: "center",
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_base,
  },
  youNeedToLayout: {
    width: 336,
    position: "absolute",
  },
  youNeedToTypo: {
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
  },
  headingPosition: {
    width: 264,
    left: 0,
    top: 0,
    position: "absolute",
  },
  didntReceiveA: {
    color: Color.greyPrimary,
  },
  text: {
    color: Color.blackPrimary,
  },
  sendAgain: {
    color: Color.colorOrange_300,
  },
  didntReceiveAContainer: {
    top: 559,
    left: 56,
    lineHeight: 32,
    position: "absolute",
  },
  signIn: {
    color: Color.white,
    width: 148,
    height: 20,
    lineHeight: 24,
  },
  pressable: {
    borderRadius: Border.br_xs,
    height: "100%",
    justifyContent: "center",
    backgroundColor: "transparent",
    alignItems: "center",
    width: "100%",
  },
  primaryButton: {
    left: 9,
    top: 421,
    height: 48,
  },
  numberinput: {
    marginLeft: -171,
    top: 291,
    left: "50%",
    height: 56,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_base,
    width: 336,
    overflow: "hidden",
  },
  youNeedTo: {
    top: 40,
    left: 1,
    fontSize: FontSize.size_mini,
    lineHeight: 24,
    width: 336,
    position: "absolute",
    color: Color.greyPrimary,
  },
  verificationCode: {
    fontSize: FontSize.size_5xl,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    alignItems: "center",
    color: Color.blackPrimary,
    lineHeight: 32,
  },
  heading: {
    height: 32,
  },
  titleguide: {
    top: 147,
    left: 15,
    width: 337,
    height: 88,
    position: "absolute",
  },
  vcode: {
    backgroundColor: Color.white,
    flex: 1,
    height: 708,
    overflow: "hidden",
    width: "100%",
  },
});

export default Code;
