import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  return (
    <View>
      <View style={styles.container}>
        {/* <RegistrationScreen /> */}
        <LoginScreen />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
