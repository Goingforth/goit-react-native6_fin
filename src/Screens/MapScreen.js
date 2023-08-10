import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
const MapScreen = () => {
  const navigation = useNavigation();
  return (

    <View style={styles.container}>
      <Text>Map Screen</Text>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

