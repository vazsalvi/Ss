import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const AdminEvents = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.adminevents, styles.iconLayout]}>
      <Pressable
        style={[styles.menubutton, styles.menubuttonLayout]}
        onPress={() => navigation.navigate("Adminhome")}
      >
        <Image
          style={[styles.menubuttonChild, styles.menubuttonChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-13.png")}
        />
        <Text style={[styles.menu, styles.menuTypo]}>Menu</Text>
      </Pressable>
      <View style={[styles.frame, styles.framePosition]}>
        <View style={styles.english}>
          <Text style={[styles.januaryRepublicDay, styles.eventsClr]}>
            26 January Republic Day
          </Text>
        </View>
        <Text style={[styles.theEventPreparation, styles.thePosition]}>
          The event preparation will be done...
        </Text>
      </View>
      <View style={[styles.frame1, styles.framePosition]}>
        <View style={styles.englishShadowBox}>
          <Text style={[styles.januaryRepublicDay, styles.eventsClr]}>
            26 January Republic day
          </Text>
        </View>
        <Text style={[styles.theMainEvent, styles.thePosition]}>
          The main event will start at 4:00...
        </Text>
      </View>
      <View style={[styles.frame2, styles.framePosition]}>
        <View style={styles.englishShadowBox}>
          <Text style={[styles.januaryRepublicDay, styles.eventsClr]}>
            26 January Republic day
          </Text>
        </View>
        <Text style={[styles.theMainEvent, styles.thePosition]}>
          It is advised for everyone to pay...
        </Text>
      </View>
      <View style={[styles.frame3, styles.framePosition]}>
        <View style={styles.englishShadowBox}>
          <Text style={[styles.januaryRepublicDay, styles.eventsClr]}>
            26 January Republic day
          </Text>
        </View>
        <Text style={[styles.theMainEvent, styles.thePosition]}>
          It is advised for everyone to pay...
        </Text>
      </View>
      <Pressable
        style={[styles.addneweventbutton, styles.headerIconFlexBox]}
        onPress={() => navigation.navigate("AdminAddEvents")}
      >
        <Text style={[styles.addNewEvent, styles.menuTypo]}>Add new event</Text>
      </Pressable>
      <Text style={[styles.events, styles.eventsTypo]}>Events</Text>
      <ImageBackground
        style={[styles.headerIcon, styles.headerIconFlexBox]}
        resizeMode="cover"
        source={require("../assets/societyimg.png")}
      >
        <Text style={[styles.smartIndiaSociety, styles.eventsTypo]}>
          Smart India Society
        </Text>
      </ImageBackground>
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
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  menubuttonLayout: {
    height: 28,
    width: 115,
    position: "absolute",
  },
  menubuttonChildLayout: {
    borderRadius: Border.br_xs,
    left: "50%",
  },
  menuTypo: {
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
  },
  framePosition: {
    justifyContent: "flex-end",
    height: 85,
    width: 315,
    marginLeft: -159,
    alignItems: "center",
    top: "50%",
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  eventsClr: {
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
  },
  thePosition: {
    zIndex: 1,
    color: Color.colorDimgray,
    fontSize: FontSize.size_sm,
    left: 20,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    position: "absolute",
  },
  headerIconFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  eventsTypo: {
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  menubuttonChild: {
    marginLeft: -57.5,
    top: 0,
    height: 28,
    width: 115,
    position: "absolute",
  },
  menu: {
    marginLeft: -22.5,
    top: 2,
    color: Color.white,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  menubutton: {
    marginLeft: -58,
    top: 680,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    left: "50%",
  },
  januaryRepublicDay: {
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
  },
  english: {
    paddingVertical: Padding.p_mini,
    zIndex: 0,
    paddingHorizontal: Padding.p_22xl,
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
  theEventPreparation: {
    top: 62,
    width: 268,
    height: 23,
  },
  frame: {
    marginTop: -154,
  },
  englishShadowBox: {
    paddingVertical: 15,
    zIndex: 0,
    paddingHorizontal: Padding.p_22xl,
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
  theMainEvent: {
    top: 63,
    width: 278,
    height: 22,
  },
  frame1: {
    marginTop: -58.9,
  },
  frame2: {
    marginTop: 36,
  },
  frame3: {
    marginTop: 130.9,
  },
  addNewEvent: {
    color: Color.white,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
  },
  addneweventbutton: {
    marginTop: -238,
    marginLeft: -103,
    backgroundColor: Color.colorOrange_200,
    width: 207,
    height: 50,
    justifyContent: "center",
    top: "50%",
    borderRadius: Border.br_xs,
    left: "50%",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  events: {
    marginTop: -286,
    marginLeft: -30,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    top: "50%",
  },
  smartIndiaSociety: {
    marginLeft: -68,
    top: 22,
    fontSize: FontSize.size_xs,
    zIndex: 0,
    color: Color.white,
  },
  headerIcon: {
    left: 0,
    width: 450,
    height: 65,
    flexDirection: "row",
    paddingHorizontal: 33,
    paddingTop: Padding.p_3xl,
    paddingBottom: 19,
    top: 0,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
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
  adminevents: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 800,
    overflow: "hidden",
  },
});

export default AdminEvents;
