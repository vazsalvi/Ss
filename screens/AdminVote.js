import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const AdminVote = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.adminvote, styles.iconLayout]}>
      <Pressable
        style={[styles.menubutton, styles.menubuttonLayout]}
        onPress={() => navigation.navigate("Adminhome")}
      >
        <Image
          style={[styles.menubuttonChild, styles.headerPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-13.png")}
        />
        <Text style={[styles.menu, styles.menuTypo]}>Menu</Text>
      </Pressable>
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
      <View style={[styles.header, styles.headerPosition]}>
        <Image
          style={[styles.header, styles.headerPosition]}
          contentFit="cover"
          source={require("../assets/societyimg.png")}
        />
        <Text style={[styles.smartIndiaSociety, styles.voteUpTypo]}>
          Smart India Society
        </Text>
      </View>
      <Button
        style={styles.englishShadowBox}
        mode="contained"
        labelStyle={styles.englishBtn}
        contentStyle={styles.englishBtn1}
      >
        YES
      </Button>
      <Button
        style={[styles.english1, styles.voteUpPosition]}
        mode="outlined"
        labelStyle={styles.english1Btn}
        contentStyle={styles.english1Btn1}
      >
        NO
      </Button>
      <Text style={[styles.voteUp, styles.voteUpPosition]}>Vote Up</Text>
      <Text style={[styles.shouldTheSunday, styles.voteUpPosition]}>
        Should the Sunday meeting be scheduled on Monday 24/5/24 due to the
        holiday ?
      </Text>
      <Pressable
        style={[styles.english2, styles.englishShadowBox]}
        onPress={() => navigation.navigate("AdminAddVote")}
      >
        <Text style={[styles.newVoteQuestion, styles.menuTypo]}>
          New vote question
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  englishBtn: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "800",
    fontFamily: "OpenSans-ExtraBold",
  },
  englishBtn1: {
    marginLeft: -164,
    marginTop: -82,
    paddingHorizontal: 27,
    paddingVertical: 0,
    borderRadius: 12,
    height: 85,
    width: 151,
  },
  english1Btn: {
    color: "#4f4f4f",
    fontSize: 32,
    fontWeight: "800",
    fontFamily: "OpenSans-ExtraBold",
  },
  english1Btn1: {
    marginLeft: -5,
    marginTop: -82,
    borderRadius: 12,
    height: 85,
    width: 165,
  },
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  menubuttonLayout: {
    height: 28,
    width: 115,
    left: "50%",
  },
  headerPosition: {
    top: 0,
    position: "absolute",
  },
  menuTypo: {
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    color: Color.white,
    fontFamily: FontFamily.openSansRegular,
    left: "50%",
    position: "absolute",
  },
  voteUpTypo: {
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    textAlign: "center",
    lineHeight: 24,
  },
  voteUpPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  englishShadowBox: {
    justifyContent: "center",
    alignItems: "flex-end",
    top: "50%",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    left: "50%",
    position: "absolute",
  },
  menubuttonChild: {
    marginLeft: -57.5,
    borderRadius: Border.br_xs,
    height: 28,
    width: 115,
    left: "50%",
  },
  menu: {
    marginLeft: -22.5,
    top: 2,
  },
  menubutton: {
    marginLeft: -57,
    top: 680,
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
  header: {
    left: 0,
    width: 450,
    height: 65,
  },
  smartIndiaSociety: {
    marginLeft: -85,
    top: 22,
    fontSize: FontSize.size_xs,
    width: 169,
    textAlign: "center",
    color: Color.white,
    fontWeight: "800",
    textTransform: "uppercase",
    left: "50%",
    position: "absolute",
  },
  english1: {
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  voteUp: {
    marginTop: -286,
    marginLeft: -34,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    lineHeight: 24,
  },
  shouldTheSunday: {
    marginTop: -186,
    marginLeft: -152,
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    color: Color.colorDimgray,
    width: 304,
    textAlign: "center",
    fontFamily: FontFamily.openSansRegular,
    top: "50%",
  },
  newVoteQuestion: {
    marginLeft: -72.5,
    top: 13,
    zIndex: 0,
  },
  english2: {
    marginTop: 160,
    marginLeft: -103,
    backgroundColor: Color.colorOrange_200,
    width: 207,
    height: 50,
    borderRadius: Border.br_xs,
  },
  adminvote: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 800,
  },
});

export default AdminVote;
