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
  KeyboardAvoidingView,
} from "react-native";

import image from "./Images/bg_photo.jpg";
import HomeIndicator from "../Components/HomeIndicators/HomeIndicator";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.imgBackGround}
      >
        {/* <KeyboardAvoidingView style={styles.contain} behavior="padding"> */}
        <View style={styles.container}>
          <Text style={styles.header}>Увійти</Text>

          <View>
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
          </View>

          <View style={styles.styleRegistrBtn}>
            <TouchableOpacity>
              {/* onPress={this.onPressButton} */}
              <Text style={styles.textButton}>Увійти</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.login}>
            Немає акаунту?
            <Text style={styles.registr}>Зареєструватися</Text>
          </Text>
          <HomeIndicator />
        </View>
        {/* </KeyboardAvoidingView> */}
      </ImageBackground>
    </SafeAreaView>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  container: {
    flex: 1,
    display: "flex",
    position: "absolute",

    // marginTop: 323,
    bottom: 0,

    alignItems: "center",
    width: screenWidth,
    height: 489,
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

    marginTop: 32,
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
    marginBottom: 111,

    color: "#1B4371",
    fontSize: 16,
  },
  textButton: {
    fontSize: 16,
    color: "#FFF",
  },
  verifyButton: {
    position: "absolute",
    justifyContent: "center",
    top: 14,
    right: 16,
  },
  registr: {
    textDecorationLine: "underline",
  },
});
