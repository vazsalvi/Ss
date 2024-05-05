import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const AdminSocietyInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.adminsocietyinfo}>
      <Pressable
        style={[styles.back, styles.backPosition]}
        onPress={() => navigation.navigate("AdminAddSocietyInfo")}
      >
        <Pressable
          style={[styles.wrapper, styles.backPosition]}
          onPress={() => navigation.navigate("AdminAddSocietyInfo")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/rectangle-13.png")}
          />
        </Pressable>
        <Text style={styles.edit}>Edit</Text>
      </Pressable>
      <Text style={[styles.societyInfo, styles.societyTypo]}>
        {" "}
        Society info
      </Text>
      <View style={styles.location}>
        <Text style={styles.katemanivaliKalyanEast}>
          Katemanivali, Kalyan East, Beyond Thane, Mumbai
        </Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
      </View>
      <View style={styles.header}>
        <Image
          style={styles.header}
          contentFit="cover"
          source={require("../assets/societyimg19.png")}
        />
        <Text style={[styles.smartIndiaSociety, styles.societyTypo]}>
          Smart India Society
        </Text>
      </View>
      <Pressable
        style={styles.drawer}
        onPress={() => navigation.navigate("AdminMenu")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.contactus, styles.featurePosition]}
        onPress={() => navigation.navigate("AdminContactsUs")}
      >
        <View style={[styles.contactusChild, styles.childPosition1]} />
        <Text style={[styles.contactsUs, styles.feature1Position]}>{`Contacts Us
`}</Text>
      </Pressable>
      <Pressable
        style={[styles.feature, styles.featurePosition]}
        onPress={() => navigation.navigate("AdminReraNumber")}
      >
        <View style={[styles.featureChild, styles.childPosition1]} />
        <Text style={[styles.feature1, styles.feature1Position]}>Feature</Text>
      </Pressable>
      <Pressable
        style={[styles.reranumber, styles.featurePosition]}
        onPress={() => navigation.navigate("AdminReraNumber")}
      >
        <View style={[styles.reranumberChild, styles.childPosition1]} />
        <Text style={[styles.feature1, styles.feature1Position]}>{`Rera Number
`}</Text>
      </Pressable>
      <Pressable
        style={[styles.proximity, styles.childPosition1]}
        onPress={() => navigation.navigate("AdminProximity")}
      >
        <View style={styles.childPosition} />
        <Text style={[styles.proximity1, styles.feature1Position]}>{`Proximity 
`}</Text>
      </Pressable>
      <Pressable
        style={[styles.internalamenities, styles.childPosition1]}
        onPress={() => navigation.navigate("AdminRooftopAmenities")}
      >
        <View style={styles.childPosition} />
        <Text
          style={[styles.internalAmenities, styles.amenitiesPosition]}
        >{`Internal Amenities  
`}</Text>
      </Pressable>
      <Pressable
        style={[styles.roofamenities, styles.childPosition1]}
        onPress={() => navigation.navigate("AdminRooftopAmenities")}
      >
        <View style={styles.childPosition} />
        <Text
          style={[styles.rooftopAmenities, styles.amenitiesPosition]}
        >{`Rooftop Amenities
`}</Text>
      </Pressable>
      <Pressable
        style={[styles.highlights, styles.childPosition1]}
        onPress={() => navigation.navigate("AdminSocietyHighlights")}
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
  backPosition: {
    height: 28,
    width: 115,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
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
    height: 38,
    marginLeft: -155,
    width: 308,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  childPosition1: {
    height: 30,
    width: 308,
    left: "50%",
    top: "50%",
    position: "absolute",
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
  amenitiesPosition: {
    height: 23,
    marginTop: -10.6,
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
  icon: {
    marginLeft: -57.5,
    borderRadius: Border.br_xs,
    marginTop: -14,
  },
  wrapper: {
    height: 28,
    width: 115,
    left: "50%",
  },
  edit: {
    marginTop: -12,
    marginLeft: -16.5,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    color: Color.white,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  back: {
    marginTop: 232,
    marginLeft: -55,
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
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    top: "50%",
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
    width: 308,
    backgroundColor: Color.white,
    marginLeft: -154,
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
  header: {
    top: 0,
    left: 0,
    width: 460,
    height: 64,
    position: "absolute",
  },
  smartIndiaSociety: {
    marginLeft: -86.9,
    top: 18,
    fontSize: FontSize.size_xs,
    width: 173,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  drawer: {
    left: "9.17%",
    top: "2.92%",
    right: "82.78%",
    bottom: "95.62%",
    width: "8.06%",
    height: "1.46%",
    position: "absolute",
  },
  contactusChild: {
    borderRadius: Border.br_2xl,
    elevation: 4,
    shadowRadius: 4,
    marginTop: -19,
    height: 30,
    backgroundColor: Color.white,
    marginLeft: -154,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  contactsUs: {
    marginTop: -13,
    height: 32,
  },
  contactus: {
    marginTop: 161,
  },
  featureChild: {
    borderRadius: Border.br_2xl,
    elevation: 4,
    shadowRadius: 4,
    marginTop: -19,
    height: 30,
    backgroundColor: Color.white,
    marginLeft: -154,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  feature1: {
    height: 33,
    marginTop: -14,
  },
  feature: {
    marginTop: 100,
  },
  reranumberChild: {
    borderRadius: Border.br_2xl,
    elevation: 4,
    shadowRadius: 4,
    marginTop: -19,
    height: 30,
    backgroundColor: Color.white,
    marginLeft: -154,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  reranumber: {
    marginTop: 39,
  },
  childPosition: {
    marginTop: -15,
    height: 30,
    borderRadius: Border.br_2xl,
    elevation: 4,
    shadowRadius: 4,
    width: 308,
    backgroundColor: Color.white,
    marginLeft: -154,
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
    marginLeft: -155,
    height: 30,
  },
  internalAmenities: {
    width: 146,
  },
  internalamenities: {
    marginTop: -84,
    marginLeft: -155,
    height: 30,
  },
  rooftopAmenities: {
    width: 145,
  },
  roofamenities: {
    marginTop: -145,
    marginLeft: -155,
    height: 30,
  },
  societyHighlights: {
    marginTop: -11.3,
    height: 24,
  },
  highlights: {
    marginTop: -206,
    marginLeft: -155,
    height: 30,
  },
  adminsocietyinfo: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 822,
    overflow: "hidden",
    width: "100%",
  },
});

export default AdminSocietyInfo;
