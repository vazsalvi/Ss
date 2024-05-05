import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Events = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.events, styles.iconLayout]}>
      <Pressable
        style={styles.menureturnbutton}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.menureturnbuttonChild}
          contentFit="cover"
          source={require("../assets/rectangle-13.png")}
        />
        <Text style={styles.home}>Home</Text>
      </Pressable>
      <View style={[styles.frame, styles.framePosition]}>
        <View style={styles.englishShadowBox}>
          <Text style={[styles.januaryRepublicDay, styles.events1Clr]}>
            26 January Republic day
          </Text>
        </View>
        <Text style={[styles.itIsAdvised, styles.itIsAdvisedTypo]}>
          It is advised for everyone to pay...
        </Text>
      </View>
      <View style={[styles.frame1, styles.framePosition]}>
        <View style={styles.englishShadowBox}>
          <Text style={[styles.januaryRepublicDay, styles.events1Clr]}>
            26 January Republic day
          </Text>
        </View>
        <Text style={[styles.itIsAdvised, styles.itIsAdvisedTypo]}>
          It is advised for everyone to pay...
        </Text>
      </View>
      <View style={[styles.frame2, styles.framePosition]}>
        <View style={styles.englishShadowBox}>
          <Text style={[styles.januaryRepublicDay, styles.events1Clr]}>
            26 January Republic day
          </Text>
        </View>
        <Text style={[styles.itIsAdvised, styles.itIsAdvisedTypo]}>
          It is advised for everyone to pay...
        </Text>
      </View>
      <View style={[styles.frame3, styles.framePosition]}>
        <View style={styles.englishShadowBox}>
          <Text style={[styles.januaryRepublicDay, styles.events1Clr]}>
            26 January Republic day
          </Text>
        </View>
        <Text style={[styles.itIsAdvised, styles.itIsAdvisedTypo]}>
          The main event will start at 4:00...
        </Text>
      </View>
      <View style={styles.frame4}>
        <View style={[styles.english4, styles.headerPosition]}>
          <Text style={[styles.januaryRepublicDay, styles.events1Clr]}>
            26 January Republic Day
          </Text>
        </View>
        <Text style={[styles.theEventPreparation, styles.itIsAdvisedTypo]}>
          The event preparation will be done...
        </Text>
      </View>
      <Text style={[styles.events1, styles.events1Typo]}>Events</Text>
      <View style={[styles.header, styles.headerPosition]}>
        <Image
          style={[styles.header, styles.headerPosition]}
          contentFit="cover"
          source={require("../assets/societyimg.png")}
        />
        <Text style={[styles.smartIndiaSociety, styles.events1Typo]}>
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
  framePosition: {
    justifyContent: "flex-end",
    alignItems: "center",
    width: 315,
    height: 85,
    marginLeft: -155,
    left: "50%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  events1Clr: {
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
  },
  itIsAdvisedTypo: {
    color: Color.colorDimgray,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSansRegular,
    textAlign: "left",
    lineHeight: 24,
  },
  headerPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  events1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  menureturnbuttonChild: {
    marginTop: -14,
    marginLeft: -57.5,
    borderRadius: Border.br_xs,
    height: 28,
    width: 115,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  home: {
    marginLeft: -15.5,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.aBeeZeeRegular,
    textAlign: "left",
    lineHeight: 24,
    color: Color.white,
    marginTop: -12,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  menureturnbutton: {
    marginTop: 311,
    marginLeft: -57,
    height: 28,
    width: 115,
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
  januaryRepublicDay: {
    fontFamily: FontFamily.openSansRegular,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "left",
    lineHeight: 24,
  },
  englishShadowBox: {
    paddingVertical: 15,
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.white,
    height: 85,
    width: 315,
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  itIsAdvised: {
    width: 278,
    height: 22,
    marginTop: -22,
  },
  frame: {
    marginTop: 177.9,
  },
  frame1: {
    marginTop: 82.9,
  },
  frame2: {
    marginTop: -12,
    justifyContent: "flex-end",
    alignItems: "center",
    width: 315,
  },
  frame3: {
    marginTop: -106.9,
  },
  english4: {
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.white,
    top: 0,
    height: 85,
    width: 315,
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  theEventPreparation: {
    top: 56,
    left: 20,
    width: 268,
    height: 23,
    position: "absolute",
  },
  frame4: {
    marginTop: -202,
    width: 333,
    height: 85,
    marginLeft: -155,
    left: "50%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  events1: {
    marginLeft: -30,
    top: 85,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  header: {
    width: 450,
    height: 65,
  },
  smartIndiaSociety: {
    marginLeft: -83,
    top: 20,
    fontSize: FontSize.size_xs,
    width: 169,
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    color: Color.white,
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
  events: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 708,
  },
});

export default Events;
