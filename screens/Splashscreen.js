import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Splashscreen = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.splashscreen}
      onPress={() => navigation.navigate("OwnerSignin")}
    >
      <Text style={styles.smartIndiaSociety}>Smart India Society</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  smartIndiaSociety: {
    position: "absolute",
    marginTop: -12,
    marginLeft: -125,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_5xl,
    lineHeight: 24,
    textTransform: "uppercase",
    fontFamily: FontFamily.anonymousProRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 249,
    height: 24,
  },
  splashscreen: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Splashscreen;
