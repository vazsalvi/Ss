import * as React from "react";
import { Pressable, StyleSheet, View, Text, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const AdminAddBills = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.adminaddbills, styles.iconLayout]}>
      <Pressable
        style={styles.save}
        onPress={() => navigation.navigate("AdminBills")}
      >
        <View style={styles.saveChild} />
        <Text style={styles.save1}>Save</Text>
      </Pressable>
      <Text style={[styles.editaddBills, styles.editaddBillsTypo]}>
        Edit/add Bills
      </Text>
      <View style={styles.header}>
        <Image
          style={styles.header}
          contentFit="cover"
          source={require("../assets/societyimg4.png")}
        />
        <Text style={[styles.smartIndiaSociety, styles.editaddBillsTypo]}>
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
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <View style={styles.allbills}>
        <View style={[styles.extra, styles.waterLayout]}>
          <Text style={[styles.new, styles.newTypo]}>New</Text>
          <TextInput
            style={[styles.textinput, styles.newTypo]}
            placeholder="₹ 000"
            keyboardType="number-pad"
            placeholderTextColor="#1e1e1e"
          />
        </View>
        <View style={[styles.extreaa, styles.waterLayout]}>
          <Text style={[styles.new, styles.newTypo]}>New</Text>
          <TextInput
            style={[styles.textinput, styles.newTypo]}
            placeholder="₹ 000"
            keyboardType="number-pad"
            placeholderTextColor="#1e1e1e"
          />
        </View>
        <View style={[styles.club, styles.waterLayout]}>
          <Text style={[styles.new, styles.newTypo]}>Club house</Text>
          <TextInput
            style={[styles.textinput, styles.newTypo]}
            placeholder="₹ 000"
            keyboardType="number-pad"
            placeholderTextColor="#1e1e1e"
          />
        </View>
        <View style={[styles.gym, styles.waterLayout]}>
          <Text style={[styles.new, styles.newTypo]}>Gym</Text>
          <TextInput
            style={[styles.textinput, styles.newTypo]}
            placeholder="₹ 000"
            keyboardType="number-pad"
            placeholderTextColor="#1e1e1e"
          />
        </View>
        <View style={[styles.electricity, styles.waterLayout]}>
          <Text style={[styles.new, styles.newTypo]}>Electricity</Text>
          <TextInput
            style={[styles.textinput, styles.newTypo]}
            placeholder="₹ 000"
            keyboardType="number-pad"
            placeholderTextColor="#1e1e1e"
          />
        </View>
        <View style={[styles.water, styles.waterLayout]}>
          <View style={[styles.waterChild, styles.waterLayout]} />
          <Text style={[styles.new, styles.newTypo]}>Water</Text>
          <TextInput
            style={[styles.textinput, styles.newTypo]}
            placeholder="₹ 000"
            keyboardType="number-pad"
            placeholderTextColor="#1e1e1e"
          />
        </View>
        <View style={[styles.maintanance, styles.waterLayout]}>
          <Text style={[styles.maintainence, styles.newTypo]}>
            Maintainence
          </Text>
          <TextInput
            style={[styles.textinput, styles.newTypo]}
            placeholder="₹ 000"
            keyboardType="number-pad"
            placeholderTextColor="#000"
          />
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
  editaddBillsTypo: {
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  waterLayout: {
    height: 56,
    width: 336,
    left: 0,
    position: "absolute",
  },
  newTypo: {
    fontSize: FontSize.size_sm,
    top: 16,
    fontFamily: FontFamily.openSansRegular,
    position: "absolute",
  },
  saveChild: {
    marginLeft: -57.5,
    backgroundColor: Color.colorOrange_200,
    borderRadius: Border.br_xs,
    marginTop: -14,
    height: 28,
    width: 115,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  save1: {
    marginLeft: -18.5,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    color: Color.colorGray_100,
    marginTop: -14,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  save: {
    marginTop: 300,
    marginLeft: -58,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    height: 28,
    width: 115,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  editaddBills: {
    marginTop: -319,
    marginLeft: -64,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    top: "50%",
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  header: {
    width: 445,
    height: 65,
    left: 0,
    top: 0,
    position: "absolute",
  },
  smartIndiaSociety: {
    marginLeft: -123.1,
    top: 21,
    fontSize: FontSize.size_xs,
    color: Color.white,
    width: 167,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
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
  new: {
    left: 24,
    fontSize: FontSize.size_sm,
    top: 16,
    textAlign: "left",
    lineHeight: 24,
    color: Color.colorGray_100,
  },
  textinput: {
    left: 250,
    fontSize: FontSize.size_sm,
    top: 16,
  },
  extra: {
    top: 432,
    backgroundColor: Color.greyLighter,
    height: 56,
    borderRadius: Border.br_xs,
  },
  extreaa: {
    top: 360,
    backgroundColor: Color.greyLighter,
    height: 56,
    borderRadius: Border.br_xs,
  },
  club: {
    top: 216,
    backgroundColor: Color.greyLighter,
    height: 56,
    borderRadius: Border.br_xs,
  },
  gym: {
    top: 288,
    backgroundColor: Color.greyLighter,
    height: 56,
    borderRadius: Border.br_xs,
  },
  electricity: {
    top: 144,
    backgroundColor: Color.greyLighter,
    height: 56,
    borderRadius: Border.br_xs,
  },
  waterChild: {
    backgroundColor: Color.greyLighter,
    height: 56,
    borderRadius: Border.br_xs,
    top: 0,
  },
  water: {
    top: 72,
  },
  maintainence: {
    left: 24,
    fontSize: FontSize.size_sm,
    top: 16,
    textAlign: "left",
    lineHeight: 24,
    color: Color.colorBlack,
  },
  maintanance: {
    backgroundColor: Color.colorWhitesmoke_100,
    top: 0,
    borderRadius: Border.br_xs,
  },
  allbills: {
    marginTop: -244,
    marginLeft: -168,
    height: 488,
    width: 336,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  adminaddbills: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 800,
  },
});

export default AdminAddBills;
