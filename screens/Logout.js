import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const Logout = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.logout}>
      <View style={[styles.signout, styles.signoutPosition]}>
        <View style={[styles.signoutChild, styles.signoutPosition]} />
        <Pressable
          style={[styles.nobutton, styles.noPosition]}
          onPress={() => navigation.navigate("Menu")}
        >
          <Text style={[styles.no, styles.noTypo]}>NO</Text>
        </Pressable>
        <Pressable
          style={[styles.yesbutton, styles.yesPosition]}
          onPress={() => navigation.navigate("Signin")}
        >
          <Text style={[styles.yes, styles.yesPosition]}>YES</Text>
        </Pressable>
        <Text style={styles.doYouWant}>Do you want to log out?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signoutPosition: {
    height: 126,
    width: 336,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  noPosition: {
    height: 11,
    width: 23,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  noTypo: {
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  yesPosition: {
    height: 10,
    width: 28,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  signoutChild: {
    marginTop: -63,
    marginLeft: -168.05,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorPapayawhip,
    borderStyle: "solid",
    borderColor: Color.colorDimgray,
    borderWidth: 1,
  },
  no: {
    marginTop: -5.5,
    marginLeft: -11.5,
    lineHeight: 8,
    color: Color.colorBlack,
    textAlign: "left",
    height: 11,
    width: 23,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  nobutton: {
    marginTop: 18,
    marginLeft: -117.55,
    shadowRadius: 6.87,
    elevation: 6.87,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1.373642921447754,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  yes: {
    marginTop: -5.15,
    marginLeft: -13.95,
    lineHeight: 10,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
  },
  yesbutton: {
    marginTop: 18.4,
    marginLeft: 90.55,
    shadowRadius: 8.02,
    elevation: 8.02,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1.373642921447754,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  doYouWant: {
    marginTop: -32,
    marginLeft: -93.15,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.openSansRegular,
    color: Color.colorDimgray,
    width: 186,
    textAlign: "left",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  signout: {
    marginTop: -77,
    marginLeft: -165.4,
  },
  logout: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 708,
    overflow: "hidden",
  },
});

export default Logout;
