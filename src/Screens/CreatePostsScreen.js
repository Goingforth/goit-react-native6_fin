import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, TextInput, } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesome, Feather, } from '@expo/vector-icons';
// import { TextInput } from 'react-native-paper';

const initialState = {
  name: "Ліс",
  geo: "Ivano-Frankivs'k Region, Ukraine",
};

const CreatePostScreen = () => {

  const [state, setState] = useState(initialState);
  const { name, geo } = state;
  return (
    <View style={styles.container}>

      <ImageBackground resizeMode="cover" style={styles.image}
        source={require("./Images/forest.jpg")}>
        <TouchableOpacity style={styles.takePhoto}>
          <FontAwesome name="camera" size={24} color="#FFF" />
        </TouchableOpacity>
      </ImageBackground>

      <Text style={styles.signature}>Редагувати фото</Text>


      <View style={styles.inputItem}>
        <TextInput style={styles.input}
          placeholder="Назва..."
          value={name}
        />
      </View>


      <View style={{ ...styles.inputItem, marginBottom: 32 }}>
        <View style={styles.iconGeoStyle}>
          <Feather name='map-pin' size={24} color='#BDBDBD' />
        </View>
        <TextInput style={styles.input}
          placeholder="Місцевість..."
          value={geo} />

      </View>

      <TouchableOpacity style={styles.styleRegistrBtn}>
        <Text style={styles.textButton}>Опубліковати</Text>
      </TouchableOpacity>

      <View
        style={{
          alignItems: 'center',

        }}
      >
        <TouchableOpacity
          style={styles.buttonDelete}>
          <Feather name="trash-2" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
      <View style={styles.homeIndicator}>
        <Image source={require("../Components/HomeIndicators/indicator.png")} />
      </View>
    </View>

  );
};

export default CreatePostScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 7,
    backgroundColor: '#FFFFFF',
  },
  image: {
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,

  },
  takePhoto: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.3,
  },
  input: {
    width: 340,
    height: 50,
    paddingVertical: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    color: "#212121",

  },
  signature: {
    marginBottom: 32,
    fontSize: 16,
    color: "#BDBDBD",
  },
  inputItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 2,
    marginBottom: 16,
  },
  iconGeoStyle: {
    alignItems: 'center',
    marginRight: 4,

  },
  styleRegistrBtn: {
    alignItems: "center",
    backgroundColor: "#FF6C00",
    paddingVertical: 16,
    borderRadius: 32,
    marginBottom: 120,
    marginBottom: 111,
  },
  textButton: {
    fontSize: 16,
    color: "#FFF",
  },
  buttonDelete: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F6F6F6',
    marginBottom: 22,
  },
  homeIndicator: {
    alignItems: "center",


  }
});

