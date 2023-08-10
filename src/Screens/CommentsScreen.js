import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
const CommentsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Comments Screen</Text>
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});


