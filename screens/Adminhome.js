import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Adminhome = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.adminhome, styles.iconLayout]}>
      <Pressable
        style={[styles.member, styles.memberPosition]}
        onPress={() => navigation.navigate("AdminMember")}
      >
        <View style={styles.childShadowBox} />
        <Text style={[styles.members, styles.membersTypo]}>Members</Text>
        <Image
          style={[
            styles.meteoconslightningbolt0Icon,
            styles.meteoconslightningbolt0IconPosition,
          ]}
          contentFit="cover"
          source={require("../assets/meteoconslightningbolt08.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.request, styles.memberPosition]}
        onPress={() => navigation.navigate("AdminRequest")}
      >
        <View style={styles.childShadowBox} />
        <Text style={[styles.requests, styles.membersTypo]}>Requests</Text>
        <Image
          style={[
            styles.meteoconslightningbolt0Icon1,
            styles.meteoconslightningbolt0IconPosition,
          ]}
          contentFit="cover"
          source={require("../assets/meteoconslightningbolt08.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.voteup, styles.voteupPosition]}
        onPress={() => navigation.navigate("AdminVote")}
      >
        <View style={styles.childShadowBox} />
        <Text style={[styles.members, styles.membersTypo]}>Vote Up</Text>
        <Image
          style={[
            styles.meteoconslightningbolt0Icon,
            styles.meteoconslightningbolt0IconPosition,
          ]}
          contentFit="cover"
          source={require("../assets/meteoconslightningbolt08.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.emergencey, styles.voteupPosition]}
        onPress={() => navigation.navigate("AdminEmergency1")}
      >
        <View style={styles.childShadowBox} />
        <Text style={[styles.emergency, styles.events1Position]}>
          Emergency
        </Text>
        <Image
          style={[
            styles.meteoconslightningbolt0Icon1,
            styles.meteoconslightningbolt0IconPosition,
          ]}
          contentFit="cover"
          source={require("../assets/meteoconslightningbolt08.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.events, styles.eventsPosition]}
        onPress={() => navigation.navigate("AdminEvents")}
      >
        <View style={styles.childShadowBox} />
        <Text style={[styles.events1, styles.events1Position]}>Events</Text>
        <Image
          style={[
            styles.meteoconslightningbolt0Icon,
            styles.meteoconslightningbolt0IconPosition,
          ]}
          contentFit="cover"
          source={require("../assets/meteoconslightningbolt08.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.complaints, styles.eventsPosition]}
        onPress={() => navigation.navigate("AdminComplaints")}
      >
        <View style={styles.childShadowBox} />
        <Text style={[styles.complaints1, styles.membersTypo]}>Complaints</Text>
        <Image
          style={[
            styles.meteoconslightningbolt0Icon1,
            styles.meteoconslightningbolt0IconPosition,
          ]}
          contentFit="cover"
          source={require("../assets/meteoconslightningbolt08.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.notice, styles.billsPosition]}
        onPress={() => navigation.navigate("AdminNotice")}
      >
        <View style={styles.childShadowBox} />
        <Text style={[styles.members, styles.membersTypo]}>Notice</Text>
        <Image
          style={[
            styles.meteoconslightningbolt0Icon,
            styles.meteoconslightningbolt0IconPosition,
          ]}
          contentFit="cover"
          source={require("../assets/meteoconslightningbolt08.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.bills, styles.billsPosition]}
        onPress={() => navigation.navigate("AdminBills")}
      >
        <View style={styles.childShadowBox} />
        <Text style={[styles.complaints1, styles.membersTypo]}>Bills</Text>
        <Image
          style={[
            styles.meteoconslightningbolt0Icon1,
            styles.meteoconslightningbolt0IconPosition,
          ]}
          contentFit="cover"
          source={require("../assets/meteoconslightningbolt08.png")}
        />
      </Pressable>
      <Text style={styles.signedInAs}>Signed in as Admin</Text>
      <View style={styles.header}>
        <Image
          style={styles.header}
          contentFit="cover"
          source={require("../assets/societyimg3.png")}
        />
        <Text style={[styles.smartIndiaSociety, styles.smartTypo]}>
          Smart India Society
        </Text>
        <Text style={[styles.smartIndiaSociety1, styles.smartTypo]}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  memberPosition: {
    height: 70,
    width: 150,
    left: "50%",
    top: "50%",
    marginTop: 193,
    position: "absolute",
  },
  membersTypo: {
    textAlign: "center",
    color: Color.colorDimgray,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    lineHeight: 24,
    marginTop: -12,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  meteoconslightningbolt0IconPosition: {
    height: 19,
    width: 10,
    marginTop: -9,
    left: "50%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  voteupPosition: {
    marginTop: 80,
    height: 70,
    width: 150,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  events1Position: {
    marginLeft: -42,
    textAlign: "center",
    color: Color.colorDimgray,
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_base,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  eventsPosition: {
    marginTop: -33,
    height: 70,
    width: 150,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  billsPosition: {
    marginTop: -146,
    height: 70,
    width: 150,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  smartTypo: {
    color: Color.white,
    textTransform: "uppercase",
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  childShadowBox: {
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    marginLeft: -75,
    marginTop: -35,
    height: 70,
    width: 150,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  members: {
    marginLeft: -43,
  },
  meteoconslightningbolt0Icon: {
    marginLeft: -63,
  },
  member: {
    marginLeft: 8,
  },
  requests: {
    marginLeft: -38,
  },
  meteoconslightningbolt0Icon1: {
    marginLeft: -62,
  },
  request: {
    marginLeft: -158,
  },
  voteup: {
    marginLeft: 8,
  },
  emergency: {
    marginTop: -8,
    lineHeight: 16,
    width: 98,
  },
  emergencey: {
    marginLeft: -158,
  },
  events1: {
    lineHeight: 24,
    marginTop: -12,
    marginLeft: -42,
  },
  events: {
    marginLeft: 8,
  },
  complaints1: {
    marginLeft: -41,
  },
  complaints: {
    marginLeft: -158,
  },
  notice: {
    marginLeft: 8,
  },
  bills: {
    marginLeft: -158,
  },
  signedInAs: {
    top: 195,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    lineHeight: 24,
    marginLeft: -75,
    left: "50%",
    position: "absolute",
  },
  header: {
    top: 0,
    left: 0,
    width: 450,
    height: 178,
    position: "absolute",
  },
  smartIndiaSociety: {
    marginLeft: -219.1,
    top: 90,
    fontSize: FontSize.size_5xl,
    width: 338,
  },
  smartIndiaSociety1: {
    marginLeft: -135.4,
    top: 28,
    fontSize: FontSize.size_xs,
    width: 169,
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
  adminhome: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 800,
  },
});

export default Adminhome;
