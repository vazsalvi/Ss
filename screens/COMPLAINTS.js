import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const COMPLAINTS = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.complaints, styles.iconLayout]}>
      <Pressable
        style={[styles.raisecomplains, styles.viewcomplainsShadowBox]}
        onPress={() => navigation.navigate("Complaints1")}
      >
        <Text style={styles.homeTypo}>Raise Complaint</Text>
      </Pressable>
      <View style={[styles.menureturnbutton, styles.menureturnbuttonPosition]}>
        <View
          style={[
            styles.menureturnbuttonChild,
            styles.menureturnbuttonPosition,
          ]}
        />
        <Pressable
          style={styles.submit}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        </Pressable>
      </View>
      <Pressable
        style={[styles.viewcomplains, styles.viewcomplainsShadowBox]}
        onPress={() => navigation.navigate("Notice1")}
      >
        <Text style={styles.viewYourComplaints}>View your complaints</Text>
      </Pressable>
      <Text style={styles.pleaseNoteAll}>
        Please note all complaints can only be viewed by the admin.
      </Text>
      <Text style={[styles.complaints1, styles.complaints1Typo]}>
        Complaints
      </Text>
      <View style={styles.header}>
        <Image
          style={styles.header}
          contentFit="cover"
          source={require("../assets/societyimg.png")}
        />
        <Text style={[styles.smartIndiaSociety, styles.complaints1Typo]}>
          Smart India Society
        </Text>
      </View>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/drawer2.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  viewcomplainsShadowBox: {
    justifyContent: "center",
    height: 50,
    width: 207,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    marginLeft: -101.5,
    borderRadius: Border.br_xs,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  menureturnbuttonPosition: {
    height: 28,
    width: 115,
    marginLeft: -57.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  homeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    color: Color.white,
  },
  complaints1Typo: {
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    textAlign: "center",
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  raisecomplains: {
    marginTop: -23,
    alignItems: "center",
    backgroundColor: Color.colorOrange_200,
  },
  menureturnbuttonChild: {
    marginTop: -14,
    backgroundColor: Color.colorOrange_200,
    borderRadius: Border.br_xs,
    height: 28,
    width: 115,
    marginLeft: -57.5,
  },
  home: {
    marginTop: -12,
    marginLeft: -20.5,
  },
  submit: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  menureturnbutton: {
    marginTop: 309,
  },
  viewYourComplaints: {
    color: Color.colorDimgray,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    fontSize: FontSize.size_mini,
  },
  viewcomplains: {
    marginTop: 44,
    backgroundColor: Color.white,
    alignItems: "flex-end",
    paddingHorizontal: 17,
    paddingVertical: 0,
  },
  pleaseNoteAll: {
    marginTop: -213,
    marginLeft: -146.5,
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    width: 304,
    textAlign: "center",
    color: Color.colorDimgray,
    fontFamily: FontFamily.openSansRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  complaints1: {
    marginTop: -267,
    marginLeft: -48.5,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    top: "50%",
  },
  header: {
    top: 0,
    left: 0,
    width: 450,
    height: 65,
    position: "absolute",
  },
  smartIndiaSociety: {
    marginLeft: -116.4,
    top: 22,
    fontSize: FontSize.size_xs,
    width: 169,
    color: Color.white,
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  vector: {
    left: "9.18%",
    top: "3.5%",
    right: "82.77%",
    bottom: "95%",
    width: "8.05%",
    height: "1.5%",
    position: "absolute",
  },
  complaints: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 708,
  },
});

export default COMPLAINTS;
