import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Menu1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.adminlogout}>
      <View style={[styles.logoff, styles.logoffLayout]}>
        <View style={[styles.logoffChild, styles.logoffLayout]} />
        <Pressable
          style={[styles.noo, styles.noPosition]}
          onPress={() => navigation.navigate("AdminMenu")}
        >
          <Text style={[styles.no, styles.noFlexBox]}>NO</Text>
        </Pressable>
        <Pressable
          style={[styles.yes, styles.yesPosition]}
          onPress={() => navigation.navigate("AdminSignin")}
        >
          <Text style={[styles.yes1, styles.yesPosition]}>YES</Text>
        </Pressable>
        <Text style={[styles.doYouWant, styles.noFlexBox]}>
          Do you want to log out?
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoffLayout: {
    height: 126,
    width: 320,
    left: "50%",
    position: "absolute",
  },
  noPosition: {
    height: 11,
    width: 26,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  noFlexBox: {
    textAlign: "left",
    color: Color.colorDimgray,
  },
  yesPosition: {
    height: 10,
    width: 28,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  logoffChild: {
    marginLeft: -160,
    top: 0,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorPapayawhip,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderWidth: 1,
  },
  no: {
    marginTop: -5.5,
    marginLeft: -13,
    lineHeight: 8,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorDimgray,
    height: 11,
    width: 26,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  noo: {
    marginLeft: -101,
    shadowRadius: 6.87,
    elevation: 6.87,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1.373642921447754,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    marginTop: 13,
  },
  yes1: {
    marginTop: -5.15,
    marginLeft: -13.95,
    lineHeight: 10,
    textAlign: "left",
    color: Color.colorDimgray,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
  },
  yes: {
    marginLeft: 82.5,
    shadowRadius: 8.02,
    elevation: 8.02,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1.373642921447754,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    marginTop: 13,
  },
  doYouWant: {
    top: 26,
    left: 78,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.openSansRegular,
    textAlign: "left",
    color: Color.colorDimgray,
    position: "absolute",
  },
  logoff: {
    marginLeft: -161,
    top: 325,
  },
  adminlogout: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Menu1;
