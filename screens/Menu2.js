import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const Menu2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.admintheme}>
      <View style={[styles.theme, styles.themeLayout]}>
        <View style={[styles.themeChild, styles.light1Position]} />
        <Pressable
          style={[styles.light, styles.darkShadowBox]}
          onPress={() => navigation.navigate("AdminMenu")}
        >
          <Text style={[styles.light1, styles.dark1Typo]}>Light</Text>
        </Pressable>
        <View style={[styles.dark, styles.darkPosition]}>
          <Text style={[styles.dark1, styles.darkPosition]}>Dark</Text>
        </View>
        <Text style={[styles.switchTheme, styles.darkPosition]}>
          Switch theme?
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  themeLayout: {
    height: 126,
    width: 316,
  },
  light1Position: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  darkShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1.373642921447754,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  dark1Typo: {
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textAlign: "left",
  },
  darkPosition: {
    left: "50%",
    position: "absolute",
  },
  themeChild: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorPapayawhip,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderWidth: 1,
    height: 126,
    width: 316,
  },
  light1: {
    fontSize: FontSize.size_5xl,
    lineHeight: 8,
    color: Color.white,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  light: {
    top: 91,
    left: 22,
    shadowRadius: 6.87,
    elevation: 6.87,
    width: 64,
    height: 9,
    position: "absolute",
  },
  dark1: {
    marginTop: -5,
    marginLeft: -29,
    fontSize: FontSize.size_4xl,
    lineHeight: 10,
    color: Color.colorBlack,
    top: "50%",
    left: "50%",
    textAlign: "left",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
  },
  dark: {
    marginTop: 27.5,
    marginLeft: 77,
    shadowRadius: 8.02,
    elevation: 8.02,
    width: 58,
    height: 10,
    top: "50%",
    left: "50%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1.373642921447754,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  switchTheme: {
    marginLeft: -56,
    top: 39,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.colorDimgray,
    width: 119,
    textAlign: "left",
  },
  theme: {
    top: 317,
    left: 25,
    position: "absolute",
  },
  admintheme: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Menu2;
