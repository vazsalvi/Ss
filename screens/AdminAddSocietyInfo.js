import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const AdminAddSocietyInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.adminaddsocietyinfo}>
      <Pressable
        style={[styles.save, styles.savePosition]}
        onPress={() => navigation.navigate("AdminSocietyInfo")}
      >
        <Image
          style={[styles.saveChild, styles.savePosition]}
          contentFit="cover"
          source={require("../assets/rectangle-13.png")}
        />
        <Text style={styles.save1}>Save</Text>
      </Pressable>
      <Text style={[styles.societyInfo, styles.societyTypo]}>
        {" "}
        Society info
      </Text>
      <View style={styles.header}>
        <Image
          style={styles.header}
          contentFit="cover"
          source={require("../assets/societyimg20.png")}
        />
        <Text style={[styles.smartIndiaSociety, styles.societyTypo]}>
          Smart India Society
        </Text>
      </View>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("AdminMenu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <View style={[styles.location, styles.featurePosition]}>
        <Text style={styles.katemanivaliKalyanEast}>
          Katemanivali, Kalyan East, Beyond Thane, Mumbai
        </Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
      </View>
      <Pressable
        style={[styles.contactus, styles.featurePosition]}
        onPress={() => navigation.navigate("AdminAddContactsUs")}
      >
        <View style={[styles.contactusChild, styles.childShadowBox]} />
        <Text style={styles.contactsUs}>Contacts Us</Text>
      </Pressable>
      <Pressable
        style={[styles.feature, styles.featurePosition]}
        onPress={() => navigation.navigate("AdminAddFeature")}
      >
        <View style={[styles.featureChild, styles.childShadowBox]} />
        <Text style={[styles.feature1, styles.feature1Position]}>Feature</Text>
      </Pressable>
      <Pressable
        style={[styles.reranumber, styles.reranumberPosition]}
        onPress={() => navigation.navigate("AdminAddReraNumber")}
      >
        <View style={[styles.reranumberChild, styles.childShadowBox]} />
        <Text style={[styles.feature1, styles.feature1Position]}>{`Rera Number
`}</Text>
      </Pressable>
      <Pressable
        style={[styles.proximity, styles.featurePosition]}
        onPress={() => navigation.navigate("AdminAddProximity")}
      >
        <View style={styles.childPosition} />
        <Text style={[styles.proximity1, styles.feature1Position]}>{`Proximity 
`}</Text>
      </Pressable>
      <Pressable
        style={[styles.internalamenities, styles.featurePosition]}
        onPress={() => navigation.navigate("AdminAddInternalAmenities")}
      >
        <View style={styles.childPosition} />
        <Text
          style={[styles.internalAmenities, styles.amenitiesPosition]}
        >{`Internal Amenities  
`}</Text>
      </Pressable>
      <Pressable
        style={[styles.roofamenities, styles.reranumberPosition]}
        onPress={() => navigation.navigate("AdminAddRooftopAmenities")}
      >
        <View style={styles.childPosition} />
        <Text
          style={[styles.rooftopAmenities, styles.amenitiesPosition]}
        >{`Rooftop Amenities
`}</Text>
      </Pressable>
      <Pressable
        style={[styles.highlights, styles.featurePosition]}
        onPress={() => navigation.navigate("AdminAddSocietyHighlights")}
      >
        <View style={styles.childPosition} />
        <Text
          style={[styles.societyHighlights, styles.feature1Position]}
        >{`Society Highlights
`}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  savePosition: {
    height: 28,
    width: 115,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  societyTypo: {
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  featurePosition: {
    width: 308,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  childShadowBox: {
    borderRadius: Border.br_2xl,
    elevation: 4,
    shadowRadius: 4,
    marginLeft: -154,
    marginTop: -19,
    height: 30,
    width: 308,
    backgroundColor: Color.white,
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
  feature1Position: {
    marginLeft: -65,
    width: 128,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  reranumberPosition: {
    marginLeft: -159,
    width: 308,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  amenitiesPosition: {
    height: 23,
    marginTop: -10.6,
    marginLeft: -65,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  saveChild: {
    marginLeft: -57.5,
    borderRadius: Border.br_xs,
    marginTop: -14,
    height: 28,
    width: 115,
    left: "50%",
  },
  save1: {
    marginTop: -11.5,
    marginLeft: -18.5,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  save: {
    marginTop: 240,
    marginLeft: -58,
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
    left: "50%",
  },
  societyInfo: {
    marginTop: -331,
    marginLeft: -56,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    top: "50%",
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  header: {
    top: 0,
    left: 0,
    width: 437,
    height: 64,
    position: "absolute",
  },
  smartIndiaSociety: {
    marginLeft: -82.5,
    top: 18,
    fontSize: FontSize.size_xs,
    color: Color.white,
    width: 164,
  },
  icon: {
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vector: {
    left: "9.17%",
    top: "2.92%",
    right: "82.78%",
    bottom: "95.62%",
    width: "8.06%",
    height: "1.46%",
    position: "absolute",
  },
  katemanivaliKalyanEast: {
    top: 8,
    left: 38,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
    color: Color.colorDimgray,
    width: 252,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    position: "absolute",
  },
  vectorIcon: {
    height: "48.94%",
    width: "4.55%",
    top: "25.53%",
    right: "89.29%",
    bottom: "25.53%",
    left: "6.17%",
    position: "absolute",
  },
  location: {
    marginTop: -281,
    shadowRadius: 3.9,
    elevation: 3.9,
    borderRadius: 20,
    height: 47,
    backgroundColor: Color.white,
    width: 308,
    marginLeft: -155,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  contactusChild: {
    height: 30,
  },
  contactsUs: {
    marginTop: -13,
    marginLeft: -64,
    height: 32,
    width: 128,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  contactus: {
    marginTop: 161,
    marginLeft: -161,
    height: 38,
  },
  featureChild: {
    height: 30,
  },
  feature1: {
    height: 33,
    marginTop: -14,
  },
  feature: {
    marginTop: 100,
    marginLeft: -160,
    height: 38,
  },
  reranumberChild: {
    height: 30,
  },
  reranumber: {
    marginTop: 39,
    height: 38,
  },
  childPosition: {
    marginTop: -15,
    height: 30,
    borderRadius: Border.br_2xl,
    elevation: 4,
    shadowRadius: 4,
    marginLeft: -154,
    width: 308,
    backgroundColor: Color.white,
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
  proximity1: {
    marginTop: -11.2,
    height: 25,
  },
  proximity: {
    marginTop: -22,
    marginLeft: -158,
    height: 30,
  },
  internalAmenities: {
    width: 146,
  },
  internalamenities: {
    marginTop: -84,
    marginLeft: -157,
    height: 30,
  },
  rooftopAmenities: {
    width: 145,
  },
  roofamenities: {
    marginTop: -145,
    height: 30,
  },
  societyHighlights: {
    marginTop: -11.3,
    height: 24,
  },
  highlights: {
    marginTop: -206,
    height: 30,
    marginLeft: -155,
    width: 308,
  },
  adminaddsocietyinfo: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 822,
    overflow: "hidden",
    width: "100%",
  },
});

export default AdminAddSocietyInfo;
