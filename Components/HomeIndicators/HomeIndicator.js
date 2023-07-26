import React from "react";
import { View, StyleSheet, Image, Text, SafeAreaView } from "react-native";
import indicator from "../HomeIndicators/indicator.png";
import image from "../../Screens/Images/bg_photo.jpg";
const HomeIndicator = () => {
  return (
    <View style={styles.homeIndicator}>
      <Image source={indicator} />
      {/* <Image source={image} /> */}
      {/* <Text>FGGGGGGG</Text> */}
      {/* <Image source={require("./indicator.svg")} /> */}
    </View>
  );
};
export default HomeIndicator;

const styles = StyleSheet.create({
  homeIndicator: {
    paddingTop: 21,
    paddingBottom: 8,
    // borderWidth: 5,
    // borderBottomWidth: 5,
    height: 34,
    // width: 200,
  },
  // login: {
  //   fontSize: 20,
  //   fontWeight: "bold",
  // },
});
