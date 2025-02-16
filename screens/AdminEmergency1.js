import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const AdminEmergency1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.adminemergency, styles.iconLayout]}>
      <Pressable
        style={[styles.done, styles.donePosition]}
        onPress={() => navigation.navigate("AdminEmergency")}
      >
        <View style={[styles.doneChild, styles.donePosition]} />
        <Text style={styles.edit}>Edit</Text>
      </Pressable>
      <Pressable
        style={[styles.done1, styles.donePosition]}
        onPress={() => navigation.navigate("Adminhome")}
      >
        <View style={[styles.doneChild, styles.donePosition]} />
        <Text style={styles.edit}>Done</Text>
      </Pressable>
      <Text style={[styles.clickOnTheContainer, styles.clickContainerPosition]}>
        {`Click on the number `}
        <Text style={styles.forQuickDial}> FOR QUICK DIAL</Text>
      </Text>
      <Text
        style={[styles.clickOnTheContainer1, styles.clickContainerPosition]}
      >
        {`Click on the Location `}
        <Text style={styles.forQuickDial}> FOR Near by facilities</Text>
      </Text>
      <Text style={[styles.emergencyNumber, styles.emergencyNumberTypo]}>
        Emergency number
      </Text>
      <View style={styles.header}>
        <Image
          style={styles.header}
          contentFit="cover"
          source={require("../assets/societyimg1.png")}
        />
        <Text style={[styles.smartIndiaSociety, styles.emergencyNumberTypo]}>
          Smart India Society
        </Text>
      </View>
      <Pressable
        style={styles.drawer}
        onPress={() => navigation.navigate("AdminMenu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <View style={[styles.poisionControl, styles.policeShadowBox]}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={[styles.callLogoIcon, styles.callIconLayout]}
          contentFit="cover"
          source={require("../assets/call-logo.png")}
        />
        <Text
          style={[styles.poisonControl, styles.textTypo]}
        >{`Poison Control: `}</Text>
        <Text style={[styles.text, styles.textLayout1]}>123456789</Text>
      </View>
      <View style={[styles.animalContrl, styles.policeShadowBox]}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={[styles.callLogoIcon1, styles.callIconPosition1]}
          contentFit="cover"
          source={require("../assets/call-logo1.png")}
        />
        <Text
          style={[styles.poisonControl, styles.textTypo]}
        >{`Animal Control: `}</Text>
        <Text style={[styles.text1, styles.textLayout1]}>123456789</Text>
      </View>
      <View style={[styles.fireDepartment, styles.electricityShadowBox]}>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={[styles.callLogoIcon2, styles.callIconPosition1]}
          contentFit="cover"
          source={require("../assets/call-logo1.png")}
        />
        <Text
          style={[styles.fireDepartment1, styles.textTypo]}
        >{`Fire Department: `}</Text>
        <Text style={[styles.text2, styles.textTypo]}>123456789</Text>
      </View>
      <View style={[styles.police, styles.policeShadowBox]}>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={[styles.callLogoIcon3, styles.callIconLayout]}
          contentFit="cover"
          source={require("../assets/call-logo2.png")}
        />
        <Text style={[styles.police1, styles.textTypo]}>Police:</Text>
        <Text style={[styles.text3, styles.textTypo]}>123456789</Text>
      </View>
      <View style={[styles.localHospital, styles.waterShadowBox]}>
        <Text
          style={[styles.localHospital1, styles.waterCompanyPosition]}
        >{`Local Hospital: `}</Text>
        <Image
          style={[styles.vectorIcon4, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={[styles.callLogoIcon4, styles.callIconPosition]}
          contentFit="cover"
          source={require("../assets/call-logo3.png")}
        />
        <Text style={[styles.text4, styles.textTypo]}>123456789</Text>
      </View>
      <View style={[styles.water, styles.waterShadowBox]}>
        <Image
          style={[styles.vectorIcon5, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={[styles.callLogoIcon5, styles.callIconPosition]}
          contentFit="cover"
          source={require("../assets/call-logo3.png")}
        />
        <Text
          style={[styles.waterCompany, styles.waterCompanyPosition]}
        >{`Water Company: `}</Text>
        <Text style={[styles.text5, styles.textLayout]}>123456789</Text>
      </View>
      <View style={[styles.electricity, styles.electricityShadowBox]}>
        <Image
          style={[styles.vectorIcon6, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={[styles.callLogoIcon3, styles.callIconLayout]}
          contentFit="cover"
          source={require("../assets/call-logo4.png")}
        />
        <Text
          style={[styles.electricityCompany, styles.companyPosition]}
        >{`Electricity Company: `}</Text>
        <Text style={[styles.text6, styles.textTypo]}>123456789</Text>
      </View>
      <View style={[styles.gasCompany, styles.secretoryShadowBox]}>
        <Image
          style={[styles.vectorIcon7, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={[styles.callLogoIcon5, styles.callIconPosition]}
          contentFit="cover"
          source={require("../assets/call-logo3.png")}
        />
        <Text
          style={[styles.gasCompany1, styles.text7Typo]}
        >{`Gas Company: `}</Text>
        <Text style={[styles.text7, styles.text7Typo]}>123456789</Text>
      </View>
      <View style={[styles.secretory, styles.secretoryShadowBox]}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={[styles.callLogoIcon8, styles.callIconLayout]}
          contentFit="cover"
          source={require("../assets/call-logo1.png")}
        />
        <Text
          style={[styles.secretory1, styles.companyPosition]}
        >{`Secretory: `}</Text>
        <Text style={[styles.text8, styles.textLayout]}>123456789</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  donePosition: {
    height: 28,
    left: "50%",
    width: 115,
    top: "50%",
    position: "absolute",
  },
  clickContainerPosition: {
    width: 280,
    textAlign: "center",
    color: Color.colorDimgray,
    lineHeight: 16,
    fontSize: FontSize.size_sm,
    marginLeft: -132,
    fontFamily: FontFamily.openSansRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  emergencyNumberTypo: {
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    textAlign: "center",
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  policeShadowBox: {
    paddingVertical: 2,
    height: 30,
    width: 308,
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
    elevation: 4,
    shadowRadius: 4,
    marginLeft: -156,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  vectorIconLayout: {
    height: 23,
    width: 14,
    zIndex: 0,
    position: "absolute",
  },
  callIconLayout: {
    height: 19,
    width: 17,
    zIndex: 1,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    height: 26,
    color: Color.colorGray_100,
    top: 2,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    position: "absolute",
  },
  textLayout1: {
    width: 81,
    zIndex: 3,
    height: 26,
    color: Color.colorGray_100,
    top: 2,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    position: "absolute",
  },
  callIconPosition1: {
    left: 17,
    zIndex: 1,
    height: 19,
    width: 17,
    position: "absolute",
    overflow: "hidden",
  },
  electricityShadowBox: {
    alignItems: "flex-end",
    paddingVertical: 2,
    height: 30,
    width: 308,
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  waterShadowBox: {
    paddingHorizontal: Padding.p_16xl,
    marginLeft: -152,
    paddingVertical: 2,
    height: 30,
    width: 308,
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  waterCompanyPosition: {
    left: 35,
    height: 26,
    color: Color.colorGray_100,
    top: 2,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    position: "absolute",
  },
  vectorIconPosition: {
    left: 267,
    height: 23,
    width: 14,
    position: "absolute",
  },
  callIconPosition: {
    left: 14,
    height: 19,
    width: 17,
    position: "absolute",
    overflow: "hidden",
  },
  textLayout: {
    width: 77,
    zIndex: 3,
    height: 26,
    color: Color.colorGray_100,
    top: 3,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    position: "absolute",
  },
  companyPosition: {
    left: 37,
    zIndex: 2,
  },
  secretoryShadowBox: {
    paddingHorizontal: Padding.p_18xl,
    paddingVertical: 2,
    height: 30,
    width: 308,
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  text7Typo: {
    fontFamily: FontFamily.montserratRegular,
    height: 26,
    color: Color.colorGray_100,
    top: 2,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    lineHeight: 24,
    position: "absolute",
  },
  doneChild: {
    marginTop: -14,
    marginLeft: -57.5,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorOrange_200,
    height: 28,
    left: "50%",
  },
  edit: {
    marginTop: -12,
    marginLeft: -20.5,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    color: Color.white,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  done: {
    marginLeft: -137,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    marginTop: 300,
    height: 28,
    left: "50%",
  },
  done1: {
    marginLeft: 27,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    marginTop: 300,
    height: 28,
    left: "50%",
  },
  forQuickDial: {
    textTransform: "lowercase",
  },
  clickOnTheContainer: {
    marginTop: -256,
  },
  clickOnTheContainer1: {
    marginTop: -240,
  },
  emergencyNumber: {
    marginTop: -295,
    marginLeft: -87,
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
    height: 60,
    position: "absolute",
  },
  smartIndiaSociety: {
    marginLeft: -85,
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
  drawer: {
    left: "9.17%",
    top: "3.5%",
    right: "82.78%",
    bottom: "95%",
    width: "8.06%",
    height: "1.5%",
    position: "absolute",
  },
  vectorIcon: {
    zIndex: 0,
    left: 271,
    height: 23,
    width: 14,
    top: 3,
  },
  callLogoIcon: {
    left: 19,
    zIndex: 1,
    top: 7,
  },
  poisonControl: {
    zIndex: 2,
    width: 106,
    left: 39,
    color: Color.colorGray_100,
    top: 2,
  },
  text: {
    left: 142,
    zIndex: 3,
  },
  poisionControl: {
    marginTop: 176,
    paddingHorizontal: Padding.p_20xl,
    paddingVertical: 2,
    height: 30,
    width: 308,
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
    elevation: 4,
    shadowRadius: 4,
  },
  callLogoIcon1: {
    top: 7,
  },
  text1: {
    left: 141,
    zIndex: 3,
  },
  animalContrl: {
    marginTop: 125,
    paddingHorizontal: Padding.p_20xl,
    paddingVertical: 2,
    height: 30,
    width: 308,
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
    elevation: 4,
    shadowRadius: 4,
  },
  vectorIcon2: {
    top: 5,
    zIndex: 0,
    left: 271,
    height: 23,
    width: 14,
  },
  callLogoIcon2: {
    top: 5,
  },
  fireDepartment1: {
    zIndex: 2,
    left: 39,
    color: Color.colorGray_100,
    top: 2,
    width: 115,
  },
  text2: {
    left: 153,
    width: 242,
    zIndex: 3,
    color: Color.colorGray_100,
    top: 2,
  },
  fireDepartment: {
    marginTop: 74,
    paddingHorizontal: Padding.p_8xl,
    marginLeft: -156,
    alignItems: "flex-end",
  },
  callLogoIcon3: {
    left: 16,
    top: 5,
    zIndex: 1,
  },
  police1: {
    left: 36,
    width: 47,
    zIndex: 2,
    color: Color.colorGray_100,
    top: 2,
  },
  text3: {
    left: 85,
    width: 84,
    zIndex: 3,
    color: Color.colorGray_100,
    top: 2,
  },
  police: {
    marginTop: 28,
    paddingHorizontal: Padding.p_17xl,
    paddingVertical: 2,
    height: 30,
    width: 308,
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
    elevation: 4,
    shadowRadius: 4,
  },
  localHospital1: {
    width: 99,
    zIndex: 0,
  },
  vectorIcon4: {
    top: 5,
    zIndex: 1,
  },
  callLogoIcon4: {
    top: 5,
    zIndex: 2,
  },
  text4: {
    left: 137,
    width: 78,
    zIndex: 3,
    color: Color.colorGray_100,
    top: 2,
  },
  localHospital: {
    marginTop: -23,
  },
  vectorIcon5: {
    top: 5,
    zIndex: 0,
  },
  callLogoIcon5: {
    zIndex: 1,
    top: 7,
  },
  waterCompany: {
    width: 112,
    zIndex: 2,
  },
  text5: {
    left: 146,
  },
  water: {
    marginTop: -69,
  },
  vectorIcon6: {
    zIndex: 0,
    top: 3,
  },
  electricityCompany: {
    width: 134,
    height: 26,
    color: Color.colorGray_100,
    top: 2,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    position: "absolute",
  },
  text6: {
    left: 175,
    width: 82,
    zIndex: 3,
    color: Color.colorGray_100,
    top: 2,
  },
  electricity: {
    marginTop: -115,
    paddingHorizontal: Padding.p_9xs,
    marginLeft: -152,
  },
  vectorIcon7: {
    left: 270,
    zIndex: 0,
    top: 3,
  },
  gasCompany1: {
    left: 37,
    zIndex: 2,
    width: 106,
  },
  text7: {
    left: 145,
    width: 79,
    zIndex: 3,
  },
  gasCompany: {
    marginTop: -161,
    marginLeft: -152,
  },
  callLogoIcon8: {
    left: 15,
    top: 5,
    zIndex: 1,
  },
  secretory1: {
    width: 69,
    height: 26,
    color: Color.colorGray_100,
    top: 2,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    position: "absolute",
  },
  text8: {
    left: 131,
  },
  secretory: {
    marginTop: -206,
    marginLeft: -154,
  },
  adminemergency: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 800,
  },
});

export default AdminEmergency1;
