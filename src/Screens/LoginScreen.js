import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const validator = require("validator");

import image from "../Screens/Images/bg_photo.jpg";
import HomeIndicator from "../Components/HomeIndicators/HomeIndicator";

const initialState = {
  email: "",
  password: "",
};

const LoginScreen = () => {

  const navigation = useNavigation();

  const [state, setState] = useState(initialState);

  const [nameFocus, setNameFocus] = useState(null);
  const [isSeePaassword, setIsSeePaassword] = useState(true);
  const [checkValidEmail, setCheckValidEmail] = useState(false);

  const { email, password } = state;

  const onLogin = () => {
    console.log(` Email : ${email} , Password : ${password}`);
    setState(initialState);
    navigation.navigate('Home', { screen: 'PostsScreen' });

  };

  const handleVisibilityPassword = () => setIsSeePaassword(!isSeePaassword);

  const isBlurInput = () => setNameFocus("null");

  const handleCheckEmail = (text) => {
    setState((prev) => ({ ...prev, email: text }));

    setCheckValidEmail(validator.isEmail(text));
  };

  const emailEmpty = validator.isEmpty(email);

  return (
    <ImageBackground source={image} style={styles.imgBackGround}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? -248 : -248}
        >
          <View style={styles.formContainer}>
            <Text style={styles.header}>Увійти</Text>

            <View>
              <TextInput
                style={[
                  styles.input,
                  nameFocus === "email" && styles.inputFocus,
                ]}
                placeholder="Адреса електронної пошти"
                value={email}
                onChangeText={(value) => handleCheckEmail(value)}
                inputMode="email"
                onFocus={() => setNameFocus("email")}
                onBlur={isBlurInput}
              />

              {!checkValidEmail && !emailEmpty ? (
                <Text style={styles.textFailed}>Wrong format email</Text>
              ) : (
                <Text style={styles.textFailed}> </Text>
              )}
            </View>

            <View>
              <TextInput
                style={[
                  styles.input,
                  nameFocus === "password" && styles.inputFocus,
                ]}
                placeholder="Пароль"
                value={password}
                onChangeText={(value) =>
                  setState((prev) => ({ ...prev, password: value }))
                }
                secureTextEntry={isSeePaassword}
                onFocus={() => setNameFocus("password")}
                onBlur={isBlurInput}
              />
              <TouchableOpacity
                style={styles.verifyButton}
                onPress={handleVisibilityPassword}
              >
                <Text> {isSeePaassword ? "Показати" : "Приховати"}</Text>
              </TouchableOpacity>
            </View>

            {/* {email === "" || password === "" || checkValidEmail === false ? (
              <TouchableOpacity disabled style={styles.styleRegistrBtn}>
                <Text style={styles.textButton}>Увійти</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.styleRegistrBtn}
                onPress={onLogin}
              >
                <Text style={styles.textButton}>Увійти</Text>
              </TouchableOpacity>
            )} */}

            <TouchableOpacity
              style={styles.styleRegistrBtn}
              onPress={onLogin}
            >
              <Text style={styles.textButton}>Увійти</Text>
            </TouchableOpacity>

            <Text style={styles.login} onPress={() => navigation.navigate("RegistrationScreen")}>
              Немає акаунту?
              <Text style={styles.registr}
                onPress={() => navigation.navigate('RegistrationScreen')
                }>Зареєструватися</Text>
            </Text>

            <HomeIndicator />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default LoginScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "flex-end",
  },
  formContainer: {
    paddingTop: 32,
    paddingBottom: 0,

    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  imgBackGround: {
    position: "absolute",

    height: "100%",
    width: "100%",
  },
  header: {
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",

    marginBottom: 33,
  },
  input: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderRadius: 10,
    fontSize: 16,
    lineHeight: 19,
    backgroundColor: "#F6F6F6",
  },
  inputFocus: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 10,
    fontSize: 16,
    lineHeight: 19,
    backgroundColor: "#FFFFFF",
  },
  styleRegistrBtn: {
    alignItems: "center",
    backgroundColor: "#FF6C00",

    paddingVertical: 16,
    marginTop: 27,
    marginBottom: 16,
    borderRadius: 32,
  },

  textButton: {
    fontSize: 16,
    color: "#FFF",
  },
  verifyButton: {
    position: "absolute",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 19,
    top: 16,
    right: 16,
  },
  textFailed: {
    position: "absolute",
    alignSelf: "flex-end",
    bottom: 16,
    color: "red",
  },
  login: {
    marginBottom: 111,

    color: "#1B4371",
    fontSize: 16,
    fontWeight: 400,
    textAlign: "center",
    lineHeight: 19,
  },
  registr: {
    textDecorationLine: "underline",
  },
});
