import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const SocietyInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.societyinfo}>
      <View style={styles.menureturnbutton}>
        <Pressable
          style={styles.english}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={[styles.englishChild, styles.headerPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-13.png")}
          />
          <Text style={styles.menu}>Menu</Text>
        </Pressable>
      </View>
      <Pressable
        style={[styles.contactus, styles.featurePosition]}
        onPress={() => navigation.navigate("ContactsUs")}
      >
        <View style={[styles.contactusChild, styles.childShadowBox]} />
        <Text style={[styles.contactsUs, styles.feature1Position]}>{`Contacts Us
`}</Text>
      </Pressable>
      <Pressable
        style={[styles.feature, styles.featurePosition]}
        onPress={() => navigation.navigate("Feature")}
      >
        <View style={[styles.featureChild, styles.childShadowBox]} />
        <Text style={[styles.feature1, styles.feature1Position]}>Feature</Text>
      </Pressable>
      <Pressable
        style={[styles.reranumber, styles.reranumberPosition]}
        onPress={() => navigation.navigate("ReraNumber")}
      >
        <View style={[styles.reranumberChild, styles.childShadowBox]} />
        <Text style={[styles.feature1, styles.feature1Position]}>{`Rera Number
`}</Text>
      </Pressable>
      <Pressable
        style={[styles.proximity, styles.featurePosition]}
        onPress={() => navigation.navigate("Proximity")}
      >
        <View style={styles.childPosition} />
        <Text style={[styles.proximity1, styles.feature1Position]}>{`Proximity 
`}</Text>
      </Pressable>
      <Pressable
        style={[styles.internalamenities, styles.featurePosition]}
        onPress={() => navigation.navigate("InternalAmenities")}
      >
        <View style={styles.childPosition} />
        <Text
          style={[styles.internalAmenities, styles.amenitiesPosition]}
        >{`Internal Amenities  
`}</Text>
      </Pressable>
      <Pressable
        style={[styles.roofamenities, styles.reranumberPosition]}
        onPress={() => navigation.navigate("RooftopAmenities")}
      >
        <View style={styles.childPosition} />
        <Text
          style={[styles.rooftopAmenities, styles.amenitiesPosition]}
        >{`Rooftop Amenities
`}</Text>
      </Pressable>
      <Pressable
        style={[styles.highlights, styles.locationPosition]}
        onPress={() => navigation.navigate("SocietyHighlights")}
      >
        <View style={styles.childPosition} />
        <Text
          style={[styles.societyHighlights, styles.feature1Position]}
        >{`Society Highlights
`}</Text>
      </Pressable>
      <Text style={[styles.societyInfo, styles.societyFlexBox]}>
        {" "}
        Society info
      </Text>
      <View style={[styles.location, styles.locationPosition]}>
        <Text style={[styles.katemanivaliKalyanEast, styles.societyFlexBox]}>
          Katemanivali, Kalyan East, Beyond Thane, Thane
        </Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <Image
          style={[styles.header, styles.headerPosition]}
          contentFit="cover"
          source={require("../assets/societyimg2.png")}
        />
        <Text style={[styles.smartIndiaSociety, styles.societyFlexBox]}>
          Smart India Society
        </Text>
      </View>
      <Pressable
        style={styles.drawer}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/drawer.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    top: 0,
    position: "absolute",
  },
  featurePosition: {
    width: 308,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  childShadowBox: {
    backgroundColor: Color.white,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  feature1Position: {
    width: 128,
    color: Color.colorGray_100,
    marginLeft: -65,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  reranumberPosition: {
    marginLeft: -160,
    width: 308,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  amenitiesPosition: {
    height: 23,
    marginTop: -10.6,
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
    marginLeft: -65,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  locationPosition: {
    marginLeft: -156,
    width: 308,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  societyFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  englishChild: {
    borderRadius: Border.br_xs,
    marginLeft: -57.5,
    top: 0,
    height: 28,
    width: 115,
    left: "50%",
  },
  menu: {
    marginLeft: -22.5,
    top: 2,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    color: Color.white,
    left: "50%",
    position: "absolute",
  },
  english: {
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    top: 0,
    marginLeft: -57.5,
    height: 28,
    width: 115,
    left: "50%",
    position: "absolute",
  },
  menureturnbutton: {
    marginTop: 322,
    marginLeft: -57,
    height: 28,
    width: 115,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  contactusChild: {
    height: 30,
    borderRadius: Border.br_2xl,
    elevation: 4,
    shadowRadius: 4,
    marginLeft: -154,
    marginTop: -19,
    backgroundColor: Color.white,
    width: 308,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  contactsUs: {
    marginTop: -13,
    height: 32,
  },
  contactus: {
    marginTop: 259,
    marginLeft: -162,
    height: 38,
  },
  featureChild: {
    height: 30,
    borderRadius: Border.br_2xl,
    elevation: 4,
    shadowRadius: 4,
    marginLeft: -154,
    marginTop: -19,
    backgroundColor: Color.white,
    width: 308,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  feature1: {
    marginTop: -14,
    height: 33,
  },
  feature: {
    marginTop: 198,
    marginLeft: -161,
    height: 38,
  },
  reranumberChild: {
    height: 30,
    borderRadius: Border.br_2xl,
    elevation: 4,
    shadowRadius: 4,
    marginLeft: -154,
    marginTop: -19,
    backgroundColor: Color.white,
    width: 308,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  reranumber: {
    marginTop: 137,
    height: 38,
  },
  childPosition: {
    marginTop: -15,
    height: 30,
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
    elevation: 4,
    shadowRadius: 4,
    marginLeft: -154,
    width: 308,
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
    marginTop: 76,
    marginLeft: -159,
    height: 30,
  },
  internalAmenities: {
    width: 146,
  },
  internalamenities: {
    marginTop: 14,
    marginLeft: -158,
    height: 30,
  },
  rooftopAmenities: {
    width: 145,
  },
  roofamenities: {
    marginTop: -47,
    height: 30,
  },
  societyHighlights: {
    marginTop: -11.3,
    height: 24,
  },
  highlights: {
    marginTop: -108,
    height: 30,
  },
  societyInfo: {
    marginLeft: -70,
    top: 94,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    width: 138,
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    textAlign: "center",
    lineHeight: 24,
    left: "50%",
  },
  katemanivaliKalyanEast: {
    top: 8,
    left: 38,
    lineHeight: 16,
    color: Color.colorDimgray,
    width: 252,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSansRegular,
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
    marginTop: -203,
    shadowRadius: 3.9,
    elevation: 3.9,
    borderRadius: 20,
    height: 47,
    backgroundColor: Color.white,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  header: {
    left: 0,
    width: 450,
    height: 64,
  },
  smartIndiaSociety: {
    marginLeft: -111,
    top: 22,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    textAlign: "center",
    lineHeight: 24,
    left: "50%",
    color: Color.white,
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  drawer: {
    left: "9.18%",
    top: "3.4%",
    right: "82.77%",
    bottom: "95.14%",
    width: "8.05%",
    height: "1.45%",
    position: "absolute",
  },
  societyinfo: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 708,
    overflow: "hidden",
    width: "100%",
  },
});

export default SocietyInfo;
