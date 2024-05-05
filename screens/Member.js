import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const Member = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.admindevelopers, styles.iconLayout]}>
      <Pressable
        style={[styles.back, styles.backPosition]}
        onPress={() => navigation.navigate("AdminMenu")}
      >
        <Image
          style={[styles.backChild, styles.backPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-13.png")}
        />
        <Text style={styles.back1}>Back</Text>
      </Pressable>
      <Text style={styles.thankYou}>Thank you</Text>
      <Text style={[styles.developers, styles.developersTypo]}>Developers</Text>
      <View style={[styles.header, styles.headerPosition]}>
        <Image
          style={[styles.header, styles.headerPosition]}
          contentFit="cover"
          source={require("../assets/societyimg31.png")}
        />
        <Text style={[styles.smartIndiaSociety, styles.developersTypo]}>
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
      <View style={[styles.dev3, styles.devLayout]}>
        <Image
          style={[styles.dev3Child, styles.devLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-53.png")}
        />
        <Text style={[styles.salviVaz, styles.salviVazPosition]}>
          Salvi Vaz
        </Text>
        <Text style={[styles.brysongmailcom, styles.salviVazPosition]}>
          Bryson@gmail.com
        </Text>
      </View>
      <View style={[styles.dev2, styles.devLayout]}>
        <Image
          style={[styles.dev3Child, styles.devLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-53.png")}
        />
        <Text
          style={[styles.salviVaz, styles.salviVazPosition]}
        >{`Bryson D’souza `}</Text>
        <Text style={[styles.brysongmailcom, styles.salviVazPosition]}>
          salvivaz@gmail.com
        </Text>
      </View>
      <View style={[styles.dev1, styles.devLayout]}>
        <Image
          style={[styles.dev3Child, styles.devLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-53.png")}
        />
        <Text style={[styles.salviVaz, styles.salviVazPosition]}>
          Peter Bose
        </Text>
        <Text style={[styles.brysongmailcom, styles.salviVazPosition]}>
          peter@gmail.com
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  backPosition: {
    height: 28,
    width: 115,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  developersTypo: {
    textTransform: "uppercase",
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  headerPosition: {
    left: 0,
    top: 0,
  },
  devLayout: {
    height: 48,
    position: "absolute",
  },
  salviVazPosition: {
    left: 64,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    position: "absolute",
  },
  backChild: {
    marginTop: -14,
    marginLeft: -57.5,
    borderRadius: Border.br_xs,
  },
  back1: {
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
    marginTop: 246,
    marginLeft: -58,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
  },
  thankYou: {
    marginTop: 40,
    marginLeft: -54,
    fontSize: FontSize.size_xl,
    lineHeight: 32,
    color: Color.colorOrange_100,
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  developers: {
    marginTop: -320,
    marginLeft: -51,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textTransform: "uppercase",
    top: "50%",
  },
  header: {
    width: 436,
    height: 65,
    position: "absolute",
  },
  smartIndiaSociety: {
    marginLeft: -82.4,
    top: 22,
    fontSize: FontSize.size_xs,
    width: 164,
    textTransform: "uppercase",
    color: Color.white,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  vector: {
    left: "9.17%",
    top: "3.5%",
    right: "82.78%",
    bottom: "95%",
    width: "8.06%",
    height: "1.5%",
    position: "absolute",
  },
  dev3Child: {
    width: 48,
    left: 0,
    top: 0,
  },
  salviVaz: {
    color: Color.blackPrimary,
    top: 0,
    left: 64,
    fontSize: FontSize.size_base,
  },
  brysongmailcom: {
    top: 24,
    fontSize: FontSize.size_sm,
    color: Color.greyPrimary,
  },
  dev3: {
    marginTop: -220,
    width: 206,
    marginLeft: -127,
    height: 48,
    left: "50%",
    top: "50%",
  },
  dev2: {
    marginTop: -147,
    width: 206,
    marginLeft: -127,
    height: 48,
    left: "50%",
    top: "50%",
  },
  dev1: {
    marginTop: -74,
    width: 206,
    marginLeft: -127,
    height: 48,
    left: "50%",
    top: "50%",
  },
  admindevelopers: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 800,
  },
});

export default Member;
