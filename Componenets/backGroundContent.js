import React from "react";
import { View, StyleSheet } from "react-native";

const BackGroundContent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top} />
    </View>
    // <View
    //   style={{
    //     flex: 1,
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     backgroundColor: "rgba(0,0,0,0.4)",
    //   }}
    // >
    //   <Text style={{ fontSize: 32, fontWeight: "bold", color: "white" }}>
    //     Lisbon
    //   </Text>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
  },
  top: {
    flex: 0.3,
    backgroundColor: "#fff",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 600,
  },
});

export default BackGroundContent;
