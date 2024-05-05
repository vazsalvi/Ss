import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Request1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.request, styles.iconLayout]}>
      <Pressable
        style={styles.menubutton}
        onPress={() => navigation.navigate("Home")}
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
        onPress={() => navigation.navigate("Menu")}
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
        <Text style={[styles.smartIndiaSociety, styles.requestSearchTypo]}>
          Smart India Society
        </Text>
      </View>
      <Text style={[styles.requestSearch, styles.riyaSharmaTypo]}>
        Request Search
      </Text>
      <View style={styles.societyhighlights}>
        <Text style={[styles.searchNearbyAdmin, styles.sendRequestTypo]}>
          Search NearBy Admin
        </Text>
      </View>
      <View style={[styles.english, styles.englishShadowBox1]}>
        <Image
          style={[styles.englishChild, styles.member13Position]}
          contentFit="cover"
          source={require("../assets/rectangle-19.png")}
        />
        <View style={[styles.english1, styles.englishPosition]}>
          <Text style={[styles.sendRequest, styles.sendRequestTypo]}>
            Send Request
          </Text>
        </View>
        <View style={[styles.member1, styles.member1Position]}>
          <Image
            style={[styles.member1Child, styles.headerPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-53.png")}
          />
          <Text style={[styles.riyaSharma, styles.riyaSharmaTypo]}>
            Riya Sharma
          </Text>
        </View>
      </View>
      <View style={[styles.english2, styles.englishShadowBox1]}>
        <Image
          style={[styles.englishChild, styles.member13Position]}
          contentFit="cover"
          source={require("../assets/rectangle-19.png")}
        />
        <View style={[styles.english3, styles.englishPosition]}>
          <Text style={[styles.sendRequest, styles.sendRequestTypo]}>
            Send Request
          </Text>
        </View>
        <View style={[styles.member1, styles.member1Position]}>
          <Image
            style={[styles.member1Child, styles.headerPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-53.png")}
          />
          <Text style={[styles.riyaSharma, styles.riyaSharmaTypo]}>
            Riya Sharma
          </Text>
        </View>
      </View>
      <View style={[styles.english4, styles.englishShadowBox1]}>
        <Image
          style={[styles.englishChild, styles.member13Position]}
          contentFit="cover"
          source={require("../assets/rectangle-19.png")}
        />
        <View style={[styles.english5, styles.englishPosition]}>
          <Text style={[styles.sendRequest, styles.sendRequestTypo]}>
            Send Request
          </Text>
        </View>
        <View style={[styles.member1, styles.member1Position]}>
          <Image
            style={[styles.member1Child, styles.headerPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-53.png")}
          />
          <Text style={[styles.riyaSharma, styles.riyaSharmaTypo]}>
            Riya Sharma
          </Text>
        </View>
      </View>
      <View style={[styles.english6, styles.englishShadowBox1]}>
        <View style={[styles.member13, styles.member13Position]}>
          <Image
            style={[styles.member1Child, styles.headerPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-53.png")}
          />
          <Text style={[styles.riyaSharma, styles.riyaSharmaTypo]}>
            Aditya Singh
          </Text>
        </View>
        <Image
          style={[styles.rectangleIcon, styles.englishPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-19.png")}
        />
        <View style={[styles.english7, styles.member1Position]}>
          <Text style={[styles.sendRequest, styles.sendRequestTypo]}>
            Send Request
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  menuTypo: {
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
  },
  headerPosition: {
    left: 0,
    position: "absolute",
  },
  requestSearchTypo: {
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    left: "50%",
  },
  riyaSharmaTypo: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    position: "absolute",
  },
  sendRequestTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  englishShadowBox1: {
    alignItems: "flex-end",
    height: 92,
    width: 333,
    backgroundColor: Color.colorOrange_300,
    marginLeft: -166,
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
  member13Position: {
    zIndex: 0,
    width: 319,
    marginLeft: -158.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  englishPosition: {
    zIndex: 1,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  member1Position: {
    zIndex: 2,
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
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  menubutton: {
    marginTop: 280,
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
    top: 0,
  },
  smartIndiaSociety: {
    marginLeft: -85,
    top: 22,
    fontSize: FontSize.size_xs,
    width: 169,
    color: Color.white,
    lineHeight: 24,
    position: "absolute",
  },
  requestSearch: {
    marginTop: -300,
    marginLeft: -70,
    color: Color.colorBlack,
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    left: "50%",
    top: "50%",
  },
  searchNearbyAdmin: {
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.white,
    lineHeight: 24,
  },
  societyhighlights: {
    marginTop: -261,
    marginLeft: -147,
    backgroundColor: Color.colorOrange_200,
    width: 305,
    paddingHorizontal: Padding.p_43xl,
    paddingVertical: 0,
    justifyContent: "center",
    height: 30,
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
  englishChild: {
    marginTop: 10,
    zIndex: 0,
    height: 30,
  },
  sendRequest: {
    marginTop: -5.5,
    marginLeft: -49,
    lineHeight: 11,
    color: Color.colorDimgray,
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  english1: {
    height: 11,
    width: 98,
    elevation: 8.77,
    shadowRadius: 8.77,
    marginLeft: -48.5,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    marginTop: 19,
    zIndex: 1,
  },
  member1Child: {
    top: 3,
    width: 48,
    height: 48,
  },
  riyaSharma: {
    top: 11,
    left: 62,
    color: Color.blackPrimary,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
  },
  member1: {
    left: 8,
    height: 48,
    width: 319,
    top: 0,
  },
  english: {
    marginTop: 3,
  },
  english3: {
    height: 11,
    width: 98,
    elevation: 8.77,
    shadowRadius: 8.77,
    marginLeft: -48.5,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    marginTop: 19,
    zIndex: 1,
  },
  english2: {
    marginTop: -105,
  },
  english5: {
    height: 11,
    width: 98,
    elevation: 8.77,
    shadowRadius: 8.77,
    marginLeft: -48.5,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    marginTop: 19,
    zIndex: 1,
  },
  english4: {
    marginTop: -214,
  },
  member13: {
    marginTop: -46,
    height: 48,
  },
  rectangleIcon: {
    width: 319,
    zIndex: 1,
    marginLeft: -158.5,
    marginTop: 10,
    height: 30,
  },
  english7: {
    marginTop: 20,
    height: 11,
    width: 98,
    elevation: 8.77,
    shadowRadius: 8.77,
    marginLeft: -48.5,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    left: "50%",
    top: "50%",
  },
  english6: {
    marginTop: 111,
  },
  request: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 800,
  },
});

export default Request1;
