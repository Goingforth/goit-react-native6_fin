import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";

import image from "./Images/bg_photo.jpg";
import HomeIndicator from "../Components/HomeIndicators/HomeIndicator";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const RegistrationScreen = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.imgBackGround}
      >
        <View style={styles.container}>
          <Text style={styles.header}>Реєстрація</Text>
          <TextInput style={styles.input} placeholder="Логін" />
          <TextInput
            style={styles.input}
            placeholder="Адреса електронної пошти"
          />

          <View>
            <TextInput style={styles.input} placeholder="Пароль" />
            <Pressable style={styles.verifyButton}>
              <Text>Показати</Text>
            </Pressable>
          </View>

          <View style={styles.styleRegistrBtn}>
            <TouchableOpacity>
              {/* onPress={this.onPressButton} */}
              <Text style={styles.textButton}>Зареєстуватися</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.login}>Вже є акаунт? Увійти</Text>
          <HomeIndicator />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    position: "absolute",

    bottom: 0,

    alignItems: "center",
    width: screenWidth,
    height: 549,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  imgBackGround: {
    height: screenHeight,
    width: screenWidth,
    //height: 812,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#212121",

    marginTop: 92,
    marginBottom: 33,
  },
  input: {
    height: 50,
    width: 343,
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderRadius: 10,
    fontSize: 16,
    // alignItems: "center",
    // justifyContent: "center",

    backgroundColor: "#F6F6F6",
  },
  styleRegistrBtn: {
    alignItems: "center",
    backgroundColor: "#FF6C00",

    width: 343,
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: 27,
    marginBottom: 16,
    borderRadius: 32,
  },
  login: {
    marginBottom: 45,
    color: "#1B4371",
    fontSize: 16,
  },
  textButton: {
    fontSize: 16,
  },
  verifyButton: {
    position: "absolute",
    justifyContent: "center",
    top: 14,
    right: 16,
  },
});
