import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { registerDB } from "../redux/auth/operations";
import { updateUserProfile, viewState, authStateChange } from "../redux/auth/authSlice";

import { useNavigation } from '@react-navigation/native';
import { selectStateChange } from "../redux/auth/selectors";
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
  Alert,
} from "react-native";

const validator = require("validator");

import image from "../Screens/Images/bg_photo.jpg";
import HomeIndicator from "../Components/HomeIndicators/HomeIndicator";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const RegistrationScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const stateChange = useSelector(selectStateChange);

  const [state, setState] = useState(initialState);

  const [nameFocus, setNameFocus] = useState(null);
  const [isSeePaassword, setIsSeePaassword] = useState(true);
  const [checkValidEmail, setCheckValidEmail] = useState(false);

  const { login, email, password } = state;

  const handleRegister = () => {
    //console.log(`Login : ${login} , Email : ${email} , Password : ${password}`);

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        dispatch(updateUserProfile({
          email: user.email,
          login: login,
          token: user.accessToken,
          userId: user.uid
        }));

        dispatch(authStateChange({ stateChange: true }));
        //просмотр store в console
        // dispatch(viewState());
        updateProfile(user, {
          displayName: login,
        })


      })
      .catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;
        dispatch(authStateChange({ stateChange: false }));
        dispatch(viewState());
        Alert.alert(error.message);
        // ..
      });


    setState(initialState);
    //console.log(stateChange);

    if (stateChange) { navigation.navigate('Home', { screen: 'PostsScreen' }) };
    // navigation.navigate('Home');
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
          keyboardVerticalOffset={Platform.OS === "ios" ? -168 : -168}
        >
          <View style={styles.formContainer}>
            <Text style={styles.header}>Реєстрація</Text>

            <TextInput
              style={[styles.input, nameFocus === "login" && styles.inputFocus]}
              placeholder="Логін"
              value={login}
              onChangeText={(text) =>
                setState((prev) => ({ ...prev, login: text }))
              }
              onFocus={() => setNameFocus("login")}
              onBlur={isBlurInput}
            />
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

            {login === "" ||
              email === "" ||
              password === "" ||
              checkValidEmail === false ? (
              <TouchableOpacity disabled style={styles.styleRegistrBtn}>
                <Text style={styles.textButton}>Зареєстуватися</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.styleRegistrBtn}
                onPress={handleRegister}
              >
                <Text style={styles.textButton}>Зареєстуватися</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity >
              <Text style={styles.registration}
                onPress={() => navigation.navigate('LoginScreen')
                }>Вже є акаунт? Увійти</Text>
            </TouchableOpacity>

            <HomeIndicator />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default RegistrationScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "flex-end",
  },
  formContainer: {
    paddingTop: 92,
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

    paddingTop: 16,
    paddingBottom: 16,
    marginTop: 27,
    marginBottom: 16,
    borderRadius: 32,
  },
  registration: {
    marginBottom: 45,
    color: "#1B4371",
    fontSize: 16,
    fontWeight: 400,
    textAlign: "center",
    lineHeight: 19,
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
});
