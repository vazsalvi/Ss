import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Theme = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.theme}>
      <View style={[styles.themeswitch, styles.themeswitchPosition]}>
        <View style={[styles.themeswitchChild, styles.themeswitchPosition]} />
        <Pressable
          style={[styles.light, styles.darkShadowBox]}
          onPress={() => navigation.navigate("Menu")}
        >
          <Text style={[styles.light1, styles.dark1Position]}>Light</Text>
        </Pressable>
        <View style={[styles.dark, styles.darkShadowBox]}>
          <Text style={[styles.dark1, styles.dark1Position]}>Dark</Text>
        </View>
        <Text style={[styles.switchTheme, styles.dark1Position]}>
          Switch theme?
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  themeswitchPosition: {
    height: 126,
    width: 310,
    left: "50%",
    top: "50%",
    marginLeft: -155,
    position: "absolute",
  },
  darkShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1.373642921447754,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  dark1Position: {
    textAlign: "left",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  themeswitchChild: {
    marginTop: -63,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorPapayawhip,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderWidth: 1,
  },
  light1: {
    marginTop: -4.5,
    marginLeft: -33,
    fontSize: FontSize.size_5xl,
    lineHeight: 8,
    color: Color.white,
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textAlign: "left",
    width: 66,
  },
  light: {
    marginTop: 17,
    marginLeft: -104,
    shadowRadius: 6.87,
    elevation: 6.87,
    height: 9,
    width: 66,
  },
  dark1: {
    marginTop: -5,
    marginLeft: -29,
    fontSize: FontSize.size_4xl,
    lineHeight: 10,
    color: Color.colorBlack,
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textAlign: "left",
  },
  dark: {
    marginTop: 16.5,
    marginLeft: 58.9,
    shadowRadius: 8.02,
    elevation: 8.02,
    width: 58,
    height: 10,
  },
  switchTheme: {
    marginTop: -35,
    marginLeft: -50.7,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
    color: Color.colorDimgray,
    width: 118,
  },
  themeswitch: {
    marginTop: -72,
  },
  theme: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 708,
    overflow: "hidden",
  },
});

export default Theme;
