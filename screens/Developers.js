import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const Developers = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.developers, styles.iconLayout]}>
      <Pressable
        style={[styles.menureturnbutton, styles.menureturnbuttonPosition]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[
            styles.menureturnbuttonChild,
            styles.menureturnbuttonPosition,
          ]}
          contentFit="cover"
          source={require("../assets/rectangle-13.png")}
        />
        <Text style={styles.menu}>Menu</Text>
      </Pressable>
      <Text style={styles.thankYou}>Thank you</Text>
      <View style={[styles.dev3, styles.devPosition]}>
        <Image
          style={[styles.dev3Child, styles.headerPosition]}
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
      <View style={[styles.dev2, styles.devPosition]}>
        <Image
          style={[styles.dev3Child, styles.headerPosition]}
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
      <View style={[styles.dev1, styles.devPosition]}>
        <Image
          style={[styles.dev3Child, styles.headerPosition]}
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
      <View style={[styles.header, styles.headerPosition]}>
        <Image
          style={[styles.header, styles.headerPosition]}
          contentFit="cover"
          source={require("../assets/societyimg.png")}
        />
        <Text style={[styles.smartIndiaSociety, styles.developers1Typo]}>
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
      <Text style={[styles.developers1, styles.developers1Typo]}>
        Developers
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  menureturnbuttonPosition: {
    height: 28,
    width: 115,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  devPosition: {
    width: 206,
    marginLeft: -149,
    height: 48,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  headerPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  salviVazPosition: {
    left: 64,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    position: "absolute",
  },
  developers1Typo: {
    textTransform: "uppercase",
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  menureturnbuttonChild: {
    marginTop: -14,
    marginLeft: -57.5,
    borderRadius: Border.br_xs,
  },
  menu: {
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
  menureturnbutton: {
    marginTop: 313,
    marginLeft: -57,
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
    marginTop: 107,
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
  dev3Child: {
    width: 48,
    height: 48,
  },
  salviVaz: {
    color: Color.blackPrimary,
    fontSize: FontSize.size_base,
    top: 0,
    left: 64,
  },
  brysongmailcom: {
    top: 24,
    fontSize: FontSize.size_sm,
    color: Color.greyPrimary,
  },
  dev3: {
    marginTop: -155,
    height: 48,
  },
  dev2: {
    marginTop: -82,
    height: 48,
  },
  dev1: {
    marginTop: -9,
    height: 48,
  },
  header: {
    width: 450,
    height: 65,
  },
  smartIndiaSociety: {
    marginLeft: -122.1,
    top: 22,
    fontSize: FontSize.size_xs,
    width: 169,
    color: Color.white,
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
    bottom: "95%",
    width: "8.05%",
    height: "1.5%",
    position: "absolute",
  },
  developers1: {
    marginTop: -253,
    marginLeft: -51,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textTransform: "uppercase",
    top: "50%",
  },
  developers: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 708,
  },
});

export default Developers;
