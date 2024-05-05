import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Notice1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.viewcomplaints, styles.iconLayout]}>
      <View style={[styles.english, styles.englishShadowBox]}>
        <Text style={[styles.cleanliness, styles.cleanlinessLayout]}>
          Cleanliness
        </Text>
        <Text style={[styles.dearAdminPlease, styles.cleanlinessLayout]}>
          Dear Admin, please look into this ma...
        </Text>
      </View>
      <View style={[styles.english1, styles.englishShadowBox]}>
        <Text style={[styles.cleanliness, styles.cleanlinessLayout]}>
          Cleanliness
        </Text>
        <Text style={[styles.dearAdminPlease, styles.cleanlinessLayout]}>
          Dear Admin, please look into this ma...
        </Text>
      </View>
      <View style={[styles.english2, styles.englishShadowBox]}>
        <Text style={[styles.cleanliness, styles.cleanlinessLayout]}>
          Cleanliness
        </Text>
        <Text style={[styles.dearAdminPlease, styles.cleanlinessLayout]}>
          Dear Admin, please look into this ma...
        </Text>
      </View>
      <Text style={[styles.complaints, styles.complaintsTypo]}>Complaints</Text>
      <Pressable
        style={styles.backbutton}
        onPress={() => navigation.navigate("COMPLAINTS")}
      >
        <Text style={[styles.back, styles.backClr]}>Back</Text>
      </Pressable>
      <View style={styles.header}>
        <Image
          style={styles.header}
          contentFit="cover"
          source={require("../assets/societyimg.png")}
        />
        <Text style={[styles.smartIndiaSociety, styles.backClr]}>
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
          source={require("../assets/drawer3.png")}
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
  englishShadowBox: {
    paddingVertical: 15,
    paddingHorizontal: Padding.p_xl,
    height: 85,
    width: 315,
    backgroundColor: Color.white,
    marginLeft: -160,
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  cleanlinessLayout: {
    height: 22,
    color: Color.colorDimgray,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
  },
  complaintsTypo: {
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    left: "50%",
    position: "absolute",
  },
  backClr: {
    color: Color.white,
    lineHeight: 24,
  },
  cleanliness: {
    width: 149,
    fontSize: FontSize.size_base,
    height: 22,
    color: Color.colorDimgray,
  },
  dearAdminPlease: {
    fontSize: FontSize.size_sm,
    width: 278,
  },
  english: {
    marginTop: -169,
  },
  english1: {
    marginTop: -74,
  },
  english2: {
    marginTop: 21,
  },
  complaints: {
    marginTop: -258,
    marginLeft: -54,
    color: Color.colorBlack,
    lineHeight: 24,
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    fontSize: FontSize.size_base,
    top: "50%",
  },
  back: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    color: Color.white,
  },
  backbutton: {
    marginTop: -209,
    marginLeft: -134,
    backgroundColor: Color.colorOrange_200,
    width: 116,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
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
    width: 450,
    height: 65,
    position: "absolute",
  },
  smartIndiaSociety: {
    marginLeft: -123.7,
    top: 22,
    fontSize: FontSize.size_xs,
    width: 160,
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    left: "50%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  drawer: {
    left: "9.18%",
    top: "3.5%",
    right: "82.77%",
    bottom: "95%",
    width: "8.05%",
    height: "1.5%",
    position: "absolute",
  },
  viewcomplaints: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 708,
  },
});

export default Notice1;
