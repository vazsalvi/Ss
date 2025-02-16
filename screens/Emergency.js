import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, Padding, FontFamily } from "../GlobalStyles";

const Emergency = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.emergency, styles.iconLayout1]}>
      <View style={[styles.home, styles.homePosition]}>
        <View style={[styles.homeChild, styles.homePosition]} />
        <Pressable
          style={styles.home1}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.home2}>Home</Text>
        </Pressable>
      </View>
      <Pressable
        style={[styles.poisionControl, styles.policeShadowBox]}
        onPress={() => navigation.navigate("EmergencyPoision")}
      >
        <Text style={[styles.poisonControl123456789, styles.companyLayout]}>
          Poison Control: 123456789
        </Text>
        <Image
          style={[styles.nearbypoisiocontrollocationIcon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={[styles.callLogoIcon, styles.callIconPosition2]}
          contentFit="cover"
          source={require("../assets/call-logo.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.animalContrl, styles.policeShadowBox]}
        onPress={() => navigation.navigate("EmergencyAnimal")}
      >
        <Text style={[styles.animalControl123456789, styles.companyLayout]}>
          Animal Control: 123456789
        </Text>
        <Image
          style={[styles.nearbypoisiocontrollocationIcon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={[styles.callLogoIcon1, styles.callIconPosition1]}
          contentFit="cover"
          source={require("../assets/call-logo1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.fireDepartment}
        onPress={() => navigation.navigate("EmergencyFire")}
      >
        <Text style={[styles.fireDepartment123456789, styles.companyLayout]}>
          Fire Department: 123456789
        </Text>
        <Image
          style={[
            styles.nearbyfirsdepartmentlocationIcon,
            styles.iconPosition1,
          ]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={[styles.callLogoIcon2, styles.callIconPosition1]}
          contentFit="cover"
          source={require("../assets/call-logo1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.police, styles.policeShadowBox]}
        onPress={() => navigation.navigate("EmergencyPolice")}
      >
        <Text style={[styles.police123456789, styles.companyLayout]}>
          Police:123456789
        </Text>
        <Image
          style={[
            styles.nearbyfirsdepartmentlocationIcon,
            styles.iconPosition1,
          ]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={[styles.callLogoIcon3, styles.callIconPosition2]}
          contentFit="cover"
          source={require("../assets/call-logo2.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.localHospital, styles.waterShadowBox]}
        onPress={() => navigation.navigate("EmergencyHospital")}
      >
        <Text
          style={[styles.localHospital123456789, styles.companyLayout]}
        >{`Local Hospital:123456789 `}</Text>
        <Image
          style={[styles.nearbyhospitallocationIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={[styles.callLogoIcon4, styles.callIconPosition]}
          contentFit="cover"
          source={require("../assets/call-logo3.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.water, styles.waterShadowBox]}
        onPress={() => navigation.navigate("EmergencyWater")}
      >
        <Text style={[styles.waterCompany123456789, styles.companyLayout]}>
          Water Company: 123456789
        </Text>
        <Image
          style={[styles.nearbyhospitallocationIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={[styles.callLogoIcon5, styles.callIconPosition]}
          contentFit="cover"
          source={require("../assets/call-logo3.png")}
        />
      </Pressable>
      <Pressable
        style={styles.electricity}
        onPress={() => navigation.navigate("EmergencyElectricity")}
      >
        <Text
          style={[styles.electricityCompany123456789, styles.companyLayout]}
        >
          Electricity Company: 123456789
        </Text>
        <Image
          style={[
            styles.nearbyelectricitycompanylocatiIcon,
            styles.iconPosition,
          ]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={[styles.callLogoIcon3, styles.callIconPosition2]}
          contentFit="cover"
          source={require("../assets/call-logo4.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.gasCompany, styles.secretoryShadowBox]}
        onPress={() => navigation.navigate("EmergencyGas")}
      >
        <Text style={[styles.gasCompany123456789, styles.companyLayout]}>
          Gas Company: 123456789
        </Text>
        <Image
          style={[styles.nearbygascompanylocationIcon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={[styles.callLogoIcon5, styles.callIconPosition]}
          contentFit="cover"
          source={require("../assets/call-logo3.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.secretory, styles.secretoryShadowBox]}
        onPress={() => navigation.navigate("EmergencySecretory")}
      >
        <Text style={[styles.secretory123456789, styles.companyLayout]}>
          Secretory: 123456789
        </Text>
        <Image
          style={[styles.nearbypoisiocontrollocationIcon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={[styles.callLogoIcon8, styles.callIconPosition2]}
          contentFit="cover"
          source={require("../assets/call-logo1.png")}
        />
      </Pressable>
      <Text style={[styles.clickOnTheContainer, styles.clickContainerTypo]}>
        {`Click on the number `}
        <Text style={styles.forQuickDial}> FOR QUICK DIAL</Text>
      </Text>
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
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/drawer3.png")}
        />
      </Pressable>
      <Text style={[styles.clickOnTheContainer1, styles.clickContainerTypo]}>
        {`Click on the Location `}
        <Text style={styles.forQuickDial}> FOR Near by facilities</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
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
  policeShadowBox: {
    paddingVertical: 2,
    height: 30,
    width: 308,
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
    elevation: 4,
    shadowRadius: 4,
    marginLeft: -158,
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
  companyLayout: {
    zIndex: 0,
    height: 26,
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    lineHeight: 24,
  },
  iconPosition1: {
    zIndex: 1,
    height: 23,
    width: 14,
    position: "absolute",
  },
  callIconPosition2: {
    zIndex: 2,
    height: 19,
    width: 17,
    position: "absolute",
    overflow: "hidden",
  },
  callIconPosition1: {
    left: 17,
    zIndex: 2,
    height: 19,
    width: 17,
    position: "absolute",
    overflow: "hidden",
  },
  waterShadowBox: {
    paddingHorizontal: Padding.p_16xl,
    marginLeft: -154,
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
  iconPosition: {
    left: 267,
    zIndex: 1,
    height: 23,
    width: 14,
    position: "absolute",
  },
  callIconPosition: {
    left: 14,
    zIndex: 2,
    height: 19,
    width: 17,
    position: "absolute",
    overflow: "hidden",
  },
  secretoryShadowBox: {
    paddingHorizontal: Padding.p_18xl,
    marginLeft: -154,
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
  clickContainerTypo: {
    width: 280,
    textAlign: "center",
    color: Color.colorDimgray,
    lineHeight: 16,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSansRegular,
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
    textAlign: "left",
    lineHeight: 24,
    color: Color.white,
    fontFamily: FontFamily.openSansRegular,
  },
  home1: {
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
    height: 28,
    width: 115,
  },
  poisonControl123456789: {
    width: 223,
    fontFamily: FontFamily.openSansRegular,
    height: 26,
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
  },
  nearbypoisiocontrollocationIcon: {
    left: 271,
    height: 23,
    width: 14,
    top: 3,
  },
  callLogoIcon: {
    left: 19,
    top: 7,
  },
  poisionControl: {
    marginTop: 182,
    paddingHorizontal: Padding.p_20xl,
    paddingVertical: 2,
    height: 30,
    width: 308,
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
    elevation: 4,
    shadowRadius: 4,
    marginLeft: -158,
  },
  animalControl123456789: {
    width: 224,
    fontFamily: FontFamily.openSansRegular,
    height: 26,
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
  },
  callLogoIcon1: {
    top: 7,
  },
  animalContrl: {
    marginTop: 131,
    paddingHorizontal: Padding.p_20xl,
    paddingVertical: 2,
    height: 30,
    width: 308,
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
    elevation: 4,
    shadowRadius: 4,
    marginLeft: -158,
  },
  fireDepartment123456789: {
    width: 242,
    fontFamily: FontFamily.openSansRegular,
    height: 26,
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
  },
  nearbyfirsdepartmentlocationIcon: {
    top: 5,
    left: 271,
    height: 23,
    width: 14,
  },
  callLogoIcon2: {
    top: 5,
  },
  fireDepartment: {
    marginTop: 80,
    paddingHorizontal: Padding.p_8xl,
    alignItems: "flex-end",
    paddingVertical: 2,
    height: 30,
    width: 308,
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
    elevation: 4,
    shadowRadius: 4,
    marginLeft: -158,
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
  police123456789: {
    width: 148,
    fontFamily: FontFamily.openSansRegular,
    height: 26,
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
  },
  callLogoIcon3: {
    left: 16,
    top: 5,
  },
  police: {
    marginTop: 34,
    paddingHorizontal: Padding.p_17xl,
    paddingVertical: 2,
    height: 30,
    width: 308,
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
    elevation: 4,
    shadowRadius: 4,
    marginLeft: -158,
  },
  localHospital123456789: {
    top: 2,
    left: 35,
    width: 215,
    fontFamily: FontFamily.openSansRegular,
    height: 26,
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  nearbyhospitallocationIcon: {
    top: 5,
  },
  callLogoIcon4: {
    top: 5,
  },
  localHospital: {
    marginTop: -17,
  },
  waterCompany123456789: {
    width: 232,
    fontFamily: FontFamily.openSansRegular,
    height: 26,
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
  },
  callLogoIcon5: {
    top: 7,
  },
  water: {
    marginTop: -63,
  },
  electricityCompany123456789: {
    width: 267,
    fontFamily: FontFamily.openSansRegular,
    height: 26,
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
  },
  nearbyelectricitycompanylocatiIcon: {
    top: 3,
  },
  electricity: {
    marginTop: -109,
    paddingHorizontal: Padding.p_9xs,
    marginLeft: -154,
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
  gasCompany123456789: {
    fontFamily: FontFamily.montserratRegular,
    width: 216,
  },
  nearbygascompanylocationIcon: {
    left: 270,
    top: 3,
  },
  gasCompany: {
    marginTop: -155,
  },
  secretory123456789: {
    width: 144,
    fontFamily: FontFamily.openSansRegular,
    height: 26,
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
  },
  callLogoIcon8: {
    left: 15,
    top: 5,
  },
  secretory: {
    marginTop: -200,
  },
  forQuickDial: {
    textTransform: "lowercase",
  },
  clickOnTheContainer: {
    marginLeft: -140,
    top: 110,
    left: "50%",
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
  clickOnTheContainer1: {
    top: 127,
    left: 38,
  },
  emergency: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 708,
  },
});

export default Emergency;
