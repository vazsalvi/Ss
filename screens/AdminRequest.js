import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const AdminRequest = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.adminrequest, styles.iconLayout]}>
      <Pressable
        style={styles.menubutton}
        onPress={() => navigation.navigate("Adminhome")}
      >
        <Image
          style={styles.menubuttonChild}
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
      <View style={styles.header}>
        <Image
          style={styles.header}
          contentFit="cover"
          source={require("../assets/societyimg.png")}
        />
        <Text style={styles.smartIndiaSociety}>Smart India Society</Text>
      </View>
      <Text
        style={[styles.requestFrom, styles.davidJonesTypo]}
      >{`Request from `}</Text>
      <View style={[styles.english, styles.englishShadowBox2]}>
        <Button
          style={styles.englishShadowBox1}
          mode="outlined"
          labelStyle={styles.englishBtn}
          contentStyle={styles.englishBtn1}
        >
          NO
        </Button>
        <Button
          style={styles.englishShadowBox}
          mode="contained"
          labelStyle={styles.english1Btn}
          contentStyle={styles.english1Btn1}
        >
          YES
        </Button>
        <View style={[styles.member1, styles.member1Layout]}>
          <Image
            style={[styles.member1Child, styles.member1Layout]}
            contentFit="cover"
            source={require("../assets/ellipse-53.png")}
          />
          <Text style={[styles.davidJones, styles.davidJonesTypo]}>
            David jones
          </Text>
          <Text style={[styles.roomNo401, styles.menuTypo]}>Room no: 401</Text>
        </View>
      </View>
      <View style={[styles.english3, styles.englishShadowBox2]}>
        <Button
          style={styles.englishShadowBox1}
          mode="outlined"
          labelStyle={styles.english2Btn}
          contentStyle={styles.english2Btn1}
        >
          NO
        </Button>
        <Button
          style={styles.englishShadowBox}
          mode="contained"
          labelStyle={styles.english3Btn}
          contentStyle={styles.english3Btn1}
        >
          YES
        </Button>
        <View style={[styles.member1, styles.member1Layout]}>
          <Image
            style={[styles.member1Child, styles.member1Layout]}
            contentFit="cover"
            source={require("../assets/ellipse-53.png")}
          />
          <Text style={[styles.davidJones, styles.davidJonesTypo]}>
            David jones
          </Text>
          <Text style={[styles.roomNo401, styles.menuTypo]}>Room no: 401</Text>
        </View>
      </View>
      <View style={[styles.english6, styles.englishShadowBox2]}>
        <Button
          style={styles.englishShadowBox1}
          mode="outlined"
          labelStyle={styles.english4Btn}
          contentStyle={styles.english4Btn1}
        >
          NO
        </Button>
        <Button
          style={styles.englishShadowBox}
          mode="contained"
          labelStyle={styles.english5Btn}
          contentStyle={styles.english5Btn1}
        >
          YES
        </Button>
        <View style={[styles.member1, styles.member1Layout]}>
          <Image
            style={[styles.member1Child, styles.member1Layout]}
            contentFit="cover"
            source={require("../assets/ellipse-53.png")}
          />
          <Text style={[styles.davidJones, styles.davidJonesTypo]}>
            David jones
          </Text>
          <Text style={[styles.roomNo401, styles.menuTypo]}>Room no: 401</Text>
        </View>
      </View>
      <View style={[styles.english9, styles.englishShadowBox2]}>
        <Button
          style={styles.englishShadowBox1}
          mode="outlined"
          labelStyle={styles.english6Btn}
          contentStyle={styles.english6Btn1}
        >
          NO
        </Button>
        <Button
          style={styles.englishShadowBox}
          mode="contained"
          labelStyle={styles.english7Btn}
          contentStyle={styles.english7Btn1}
        >
          YES
        </Button>
        <View style={[styles.member1, styles.member1Layout]}>
          <Image
            style={[styles.member1Child, styles.member1Layout]}
            contentFit="cover"
            source={require("../assets/ellipse-53.png")}
          />
          <Text style={[styles.davidJones, styles.davidJonesTypo]}>
            David jones
          </Text>
          <Text style={[styles.roomNo401, styles.menuTypo]}>Room no: 401</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  englishBtn: {
    color: "#4f4f4f",
    fontSize: 14.024691581726074,
    fontWeight: "800",
    fontFamily: "OpenSans-ExtraBold",
  },
  englishBtn1: {
    borderRadius: 5,
    height: 33,
    width: 155,
  },
  english1Btn: {
    color: "#fff",
    fontSize: 14.024691581726074,
    fontWeight: "800",
    fontFamily: "OpenSans-ExtraBold",
  },
  english1Btn1: {
    paddingHorizontal: 12,
    paddingVertical: 0,
    borderRadius: 5,
    height: 33,
    width: 145,
  },
  english2Btn: {
    color: "#4f4f4f",
    fontSize: 14.024691581726074,
    fontWeight: "800",
    fontFamily: "OpenSans-ExtraBold",
  },
  english2Btn1: {
    borderRadius: 5,
    height: 33,
    width: 155,
  },
  english3Btn: {
    color: "#fff",
    fontSize: 14.024691581726074,
    fontWeight: "800",
    fontFamily: "OpenSans-ExtraBold",
  },
  english3Btn1: {
    paddingHorizontal: 12,
    paddingVertical: 0,
    borderRadius: 5,
    height: 33,
    width: 145,
  },
  english4Btn: {
    color: "#4f4f4f",
    fontSize: 14.024691581726074,
    fontWeight: "800",
    fontFamily: "OpenSans-ExtraBold",
  },
  english4Btn1: {
    borderRadius: 5,
    height: 33,
    width: 155,
  },
  english5Btn: {
    color: "#fff",
    fontSize: 14.024691581726074,
    fontWeight: "800",
    fontFamily: "OpenSans-ExtraBold",
  },
  english5Btn1: {
    paddingHorizontal: 12,
    paddingVertical: 0,
    borderRadius: 5,
    height: 33,
    width: 145,
  },
  english6Btn: {
    color: "#4f4f4f",
    fontSize: 14.024691581726074,
    fontWeight: "800",
    fontFamily: "OpenSans-ExtraBold",
  },
  english6Btn1: {
    borderRadius: 5,
    height: 33,
    width: 155,
  },
  english7Btn: {
    color: "#fff",
    fontSize: 14.024691581726074,
    fontWeight: "800",
    fontFamily: "OpenSans-ExtraBold",
  },
  english7Btn1: {
    paddingHorizontal: 12,
    paddingVertical: 0,
    borderRadius: 5,
    height: 33,
    width: 145,
  },
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  menuTypo: {
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
  },
  davidJonesTypo: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    position: "absolute",
  },
  englishShadowBox2: {
    justifyContent: "center",
    alignItems: "flex-end",
    height: 92,
    width: 333,
    backgroundColor: Color.colorOrange_300,
    top: "50%",
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
    position: "absolute",
  },
  member1Layout: {
    height: 48,
    position: "absolute",
  },
  menubuttonChild: {
    marginLeft: -57.5,
    borderRadius: Border.br_xs,
    top: 0,
    height: 28,
    width: 115,
    left: "50%",
    position: "absolute",
  },
  menu: {
    marginLeft: -22.5,
    top: 2,
    fontSize: FontSize.size_mini,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  menubutton: {
    marginLeft: -57,
    top: 680,
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
    width: 450,
    height: 65,
    left: 0,
    top: 0,
    position: "absolute",
  },
  smartIndiaSociety: {
    marginLeft: -85,
    top: 22,
    fontSize: FontSize.size_xs,
    width: 169,
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    color: Color.white,
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  requestFrom: {
    marginTop: -286,
    marginLeft: -62,
    color: Color.colorBlack,
    top: "50%",
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    left: "50%",
  },
  englishShadowBox1: {
    zIndex: 0,
    elevation: 8.77,
    shadowRadius: 8.77,
    top: 54,
    left: 8,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    position: "absolute",
  },
  englishShadowBox: {
    zIndex: 1,
    left: 182,
    elevation: 8.77,
    shadowRadius: 8.77,
    top: 54,
    justifyContent: "center",
    alignItems: "flex-end",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    position: "absolute",
  },
  member1Child: {
    top: 3,
    width: 48,
    left: 0,
  },
  davidJones: {
    top: 11,
    left: 62,
    color: Color.blackPrimary,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
  },
  roomNo401: {
    top: 12,
    left: 200,
    fontSize: FontSize.size_sm,
    color: Color.greyPrimary,
    fontFamily: FontFamily.openSansRegular,
    textAlign: "left",
    lineHeight: 24,
    position: "absolute",
  },
  member1: {
    width: 319,
    zIndex: 2,
    left: 8,
    height: 48,
    top: 0,
  },
  english: {
    marginTop: -213,
    marginLeft: -164,
  },
  english3: {
    marginTop: -105,
    marginLeft: -163,
  },
  english6: {
    marginTop: 3,
    marginLeft: -162,
  },
  english9: {
    marginTop: 111,
    marginLeft: -161,
  },
  adminrequest: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 800,
  },
});

export default AdminRequest;
