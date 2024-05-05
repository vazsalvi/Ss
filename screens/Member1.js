import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Member1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.member, styles.iconLayout]}>
      <Image
        style={styles.headerIcon}
        contentFit="cover"
        source={require("../assets/header.png")}
      />
      <View style={[styles.member1, styles.memberPosition2]}>
        <Image
          style={styles.member1Child}
          contentFit="cover"
          source={require("../assets/ellipse-53.png")}
        />
        <Text style={[styles.davidJones, styles.home1Typo]}>David jones</Text>
        <Text style={[styles.roomNo401, styles.home1Typo]}>Room no: 401</Text>
      </View>
      <View style={[styles.member11, styles.memberPosition1]}>
        <Image
          style={styles.member1Child}
          contentFit="cover"
          source={require("../assets/ellipse-53.png")}
        />
        <Text style={[styles.davidJones, styles.home1Typo]}>David jones</Text>
        <Text style={[styles.roomNo401, styles.home1Typo]}>Room no: 401</Text>
      </View>
      <View style={[styles.member12, styles.memberPosition]}>
        <Image
          style={styles.member1Child}
          contentFit="cover"
          source={require("../assets/ellipse-53.png")}
        />
        <Text style={[styles.davidJones, styles.home1Typo]}>David jones</Text>
        <Text style={[styles.roomNo401, styles.home1Typo]}>Room no: 401</Text>
      </View>
      <View style={[styles.member2, styles.memberPosition2]}>
        <Image
          style={styles.member1Child}
          contentFit="cover"
          source={require("../assets/ellipse-53.png")}
        />
        <Text style={[styles.davidJones, styles.home1Typo]}>Rahul Murgan</Text>
        <Text style={[styles.roomNo401, styles.home1Typo]}>Room no :402</Text>
      </View>
      <View style={[styles.member21, styles.memberPosition1]}>
        <Image
          style={styles.member1Child}
          contentFit="cover"
          source={require("../assets/ellipse-53.png")}
        />
        <Text style={[styles.davidJones, styles.home1Typo]}>Rahul Murgan</Text>
        <Text style={[styles.roomNo401, styles.home1Typo]}>Room no :402</Text>
      </View>
      <View style={[styles.member22, styles.memberPosition]}>
        <Image
          style={styles.member1Child}
          contentFit="cover"
          source={require("../assets/ellipse-53.png")}
        />
        <Text style={[styles.davidJones, styles.home1Typo]}>Rahul Murgan</Text>
        <Text style={[styles.roomNo401, styles.home1Typo]}>Room no :402</Text>
      </View>
      <View style={[styles.member3, styles.memberPosition2]}>
        <Image
          style={styles.member1Child}
          contentFit="cover"
          source={require("../assets/ellipse-53.png")}
        />
        <Text style={[styles.davidJones, styles.home1Typo]}>Suraj Kumar</Text>
        <Text style={[styles.roomNo401, styles.home1Typo]}>Room no: 403</Text>
      </View>
      <View style={[styles.member31, styles.memberPosition1]}>
        <Image
          style={styles.member1Child}
          contentFit="cover"
          source={require("../assets/ellipse-53.png")}
        />
        <Text style={[styles.davidJones, styles.home1Typo]}>Suraj Kumar</Text>
        <Text style={[styles.roomNo401, styles.home1Typo]}>Room no: 403</Text>
      </View>
      <Text style={styles.members}>members</Text>
      <View style={[styles.menureturnbutton, styles.menureturnbuttonPosition]}>
        <View
          style={[
            styles.menureturnbuttonChild,
            styles.menureturnbuttonPosition,
          ]}
        />
        <Pressable
          style={styles.home}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.drawer}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/drawer5.png")}
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
  memberPosition2: {
    height: 48,
    width: 206,
    marginLeft: -145,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  home1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
  },
  memberPosition1: {
    marginLeft: -147,
    height: 48,
    width: 206,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  memberPosition: {
    marginLeft: -149,
    height: 48,
    width: 206,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  menureturnbuttonPosition: {
    height: 28,
    width: 115,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  headerIcon: {
    top: -7,
    width: 476,
    height: 65,
    left: 0,
    position: "absolute",
  },
  member1Child: {
    width: 48,
    top: 0,
    height: 48,
    left: 0,
    position: "absolute",
  },
  davidJones: {
    color: Color.blackPrimary,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.openSansRegular,
    left: 64,
    top: 0,
    position: "absolute",
  },
  roomNo401: {
    top: 24,
    fontSize: FontSize.size_sm,
    color: Color.greyPrimary,
    left: 64,
    fontFamily: FontFamily.openSansRegular,
    position: "absolute",
  },
  member1: {
    marginTop: -239,
  },
  member11: {
    marginTop: -20,
  },
  member12: {
    marginTop: 199,
  },
  member2: {
    marginTop: -166,
  },
  member21: {
    marginTop: 53,
  },
  member22: {
    marginTop: 272,
  },
  member3: {
    marginTop: -93,
  },
  member31: {
    marginTop: 126,
  },
  members: {
    marginLeft: -40,
    top: 70,
    textTransform: "uppercase",
    fontWeight: "800",
    fontFamily: FontFamily.openSansExtraBold,
    color: Color.colorBlack,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.size_base,
    left: "50%",
    position: "absolute",
  },
  menureturnbuttonChild: {
    marginTop: -14,
    marginLeft: -57.5,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorOrange_200,
  },
  home1: {
    marginTop: -12,
    marginLeft: -20.5,
    fontSize: FontSize.size_mini,
    color: Color.white,
  },
  home: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  menureturnbutton: {
    marginTop: 346,
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
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  drawer: {
    left: "9.18%",
    top: "2.63%",
    right: "82.77%",
    bottom: "95.88%",
    width: "8.05%",
    height: "1.5%",
    position: "absolute",
  },
  member: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 708,
  },
});

export default Member1;
