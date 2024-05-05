import * as React from "react";
import { Pressable, Text, StyleSheet, View, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const ReraNumber = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.reranumber, styles.iconLayout]}>
      <Pressable
        style={[styles.save, styles.savePosition]}
        onPress={() => navigation.navigate("SocietyInfo")}
      >
        <Text style={[styles.back, styles.backTypo]}>Back</Text>
      </Pressable>
      <View style={[styles.body, styles.bodyShadowBox]} />
      <TextInput
        style={[styles.subject, styles.bodyShadowBox]}
        placeholder="Subject"
        placeholderTextColor="#fff"
      />
      <Text style={[styles.addNewEvent, styles.addNewEventTypo]}>
        Add new event
      </Text>
      <View style={styles.header}>
        <Image
          style={styles.header}
          contentFit="cover"
          source={require("../assets/societyimg.png")}
        />
        <Text style={[styles.smartIndiaSociety, styles.societyPosition]}>
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
          source={require("../assets/drawer8.png")}
        />
      </Pressable>
      <Text style={[styles.inThisSociety, styles.societyPosition]}>
        In this society, every residential property is assigned a unique RERA
        (Real Estate Regulatory Authority) number, ensuring transparency and
        accountability in the real estate sector. The RERA number serves as a
        mark of authentication, providing potential buyers or tenants with
        essential information about the property's legality, ownership, and
        compliance with regulatory standards. This system safeguards consumers'
        interests, offering them confidence and peace of mind when investing in
        or renting residential properties. Additionally, the RERA number
        facilitates efficient dispute resolution mechanisms, promoting trust and
        reliability in the real estate market.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  savePosition: {
    backgroundColor: Color.colorOrange_200,
    left: "50%",
    top: "50%",
  },
  backTypo: {
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
  },
  bodyShadowBox: {
    width: 305,
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    position: "absolute",
  },
  addNewEventTypo: {
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  societyPosition: {
    fontSize: FontSize.size_xs,
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  back: {
    marginLeft: -18.5,
    top: 2,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_100,
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  save: {
    marginTop: 301.5,
    marginLeft: -57.5,
    width: 115,
    height: 28,
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorOrange_200,
    left: "50%",
    position: "absolute",
  },
  body: {
    top: 255,
    left: 33,
    backgroundColor: Color.white,
    height: 420,
  },
  subject: {
    marginTop: -192.5,
    marginLeft: -149.5,
    height: 30,
    justifyContent: "center",
    paddingHorizontal: Padding.p_43xl,
    paddingVertical: 0,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    fontSize: FontSize.size_sm,
    backgroundColor: Color.colorOrange_200,
    left: "50%",
    top: "50%",
    width: 305,
  },
  addNewEvent: {
    marginTop: -318.5,
    marginLeft: -66.5,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    lineHeight: 24,
    left: "50%",
    position: "absolute",
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
    marginLeft: -82,
    top: 22,
    color: Color.white,
    width: 169,
    textAlign: "center",
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
    left: "9.18%",
    top: "3.5%",
    right: "82.77%",
    bottom: "94.99%",
    width: "8.05%",
    height: "1.51%",
    position: "absolute",
  },
  inThisSociety: {
    marginTop: -133.5,
    marginLeft: -141.5,
    color: Color.colorDimgray,
    width: 289,
    height: 399,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    top: "50%",
  },
  reranumber: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 797,
  },
});

export default ReraNumber;
