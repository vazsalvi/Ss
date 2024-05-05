import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize, Padding } from "../GlobalStyles";

const EmergencyPoision = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.emergencypoision, styles.iconLayout]}>
      <View style={[styles.home, styles.homePosition]}>
        <View style={[styles.homeChild, styles.homePosition]} />
        <Pressable
          style={styles.home1Position}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={[styles.home2, styles.home2Typo]}>Home</Text>
        </Pressable>
      </View>
      <Text style={[styles.emergencyNumber, styles.emergencyNumberTypo]}>
        Emergency number
      </Text>
      <View style={styles.header}>
        <Image
          style={styles.header}
          contentFit="cover"
          source={require("../assets/societyimg7.png")}
        />
        <Text style={[styles.smartIndiaSociety, styles.emergencyNumberTypo]}>
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
          source={require("../assets/drawer3.png")}
        />
      </Pressable>
      <Button
        style={[styles.english, styles.englishShadowBox]}
        mode="outlined"
        labelStyle={styles.englishImageBtn}
        contentStyle={styles.englishImageBtn1}
      >
        NO
      </Button>
      <Button
        style={[styles.english1, styles.englishShadowBox]}
        mode="contained"
        labelStyle={styles.englishImage1Btn}
        contentStyle={styles.englishImage1Btn1}
      >
        YES
      </Button>
      <View style={[styles.poisionControl, styles.homeShadowBox]}>
        <Text style={[styles.poisonControl123456789, styles.home2Typo]}>
          Poison Control: 123456789
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  englishImageBtn: {
    color: "#4f4f4f",
    fontSize: 32,
    fontWeight: "800",
    fontFamily: "Montserrat-ExtraBold",
  },
  englishImageBtn1: {
    height: 109,
    width: 98,
  },
  englishImage1Btn: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "800",
    fontFamily: "Montserrat-ExtraBold",
  },
  englishImage1Btn1: {
    height: 127,
    width: 77,
  },
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  homePosition: {
    height: 28,
    width: 115,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  home2Typo: {
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
  },
  emergencyNumberTypo: {
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  englishShadowBox: {
    elevation: 8.77,
    shadowRadius: 8.77,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    position: "absolute",
  },
  homeShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  homeChild: {
    marginTop: -14,
    marginLeft: -57.5,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorOrange_200,
  },
  home2: {
    marginTop: -12,
    marginLeft: -20.5,
    fontSize: FontSize.size_mini,
    color: Color.white,
  },
  home1Position: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  home: {
    marginTop: 322,
    marginLeft: -57,
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  emergencyNumber: {
    marginLeft: -87,
    top: 73,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  header: {
    top: 0,
    left: 0,
    width: 470,
    height: 60,
    position: "absolute",
  },
  smartIndiaSociety: {
    marginLeft: -121,
    top: 22,
    fontSize: FontSize.size_xs,
    color: Color.white,
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
  english: {
    top: 338,
    left: 46,
  },
  english1: {
    top: 329,
    left: 231,
  },
  poisonControl123456789: {
    fontSize: FontSize.size_sm,
    color: Color.colorGray_100,
    width: 223,
    height: 26,
  },
  poisionControl: {
    marginTop: -200,
    marginLeft: -154,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: Border.br_2xl,
    backgroundColor: Color.white,
    width: 308,
    height: 30,
    paddingHorizontal: Padding.p_20xl,
    paddingVertical: 2,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  emergencypoision: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 708,
  },
});

export default EmergencyPoision;
