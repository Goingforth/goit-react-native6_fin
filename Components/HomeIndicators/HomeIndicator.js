import React from "react";
import { View, StyleSheet, Image, Text, SafeAreaView } from "react-native";
import indicator from "../HomeIndicators/indicator.png";

const HomeIndicator = () => {
  return (
    <View style={styles.homeIndicator}>
      <Image source={indicator} />
    </View>
  );
};
export default HomeIndicator;

const styles = StyleSheet.create({
  homeIndicator: {
    paddingTop: 21,
    paddingBottom: 8,

    height: 34,
  },
});
