import React from "react";
import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import image from "../Componenets/Images/bg_photo.jpg";

export default function ImageBackgroundPhoto() {
  return (
    <SafeAreaView>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{ height: 812 }}
      ></ImageBackground>
    </SafeAreaView>
  );
}
