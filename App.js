import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";

export default function App() {
  return (
    <View>
      <View style={styles.container}>
        <RegistrationScreen />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
