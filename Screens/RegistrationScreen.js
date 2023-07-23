// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
// const image = { uri: "https://legacy.reactjs.org/logo-og.png" };
// // export default function RegistrationScreen() {
// //   return (
// //     <View style={styles.container}>
// //       <ImageBackground
// //         // source={require("./Images/pg_photo.png")}
// //         source={image}
// //         resizeMode="cover"
// //         style={styles.image}
// //       ></ImageBackground>

// //       <Text>test fsdfsdfdsfdsf</Text>
// //     </View>
// //   );
// // }
// const RegistrationScreen = () => (
//   <View style={styles.container}>
//     <ImageBackground source={image} resizeMode="cover" style={styles.image}>
//       <Text style={styles.text}>Inside</Text>
//     </ImageBackground>
//   </View>
// );
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     justifyContent: "center",
//   },
// });
// export default RegistrationScreen;
import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import image from "./Images/bg_photo.jpg";

//const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

const RegistrationScreen = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>
  </View>
  //   <View>
  //     <Image
  //       source={require("./Images/bg_photo.jpg")}
  //       style={{ position: "absolute", zIndex: -1 }}
  //     />

  //     <View style={{ flex: 1, position: "absolute" }}>
  //       <Text>fdffdsffdsfdsfdsfdsfdsf</Text>
  //     </View>
  //   </View>
);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  image: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  //   text: {
  //     color: "white",
  //     fontSize: 42,
  //     lineHeight: 84,
  //     fontWeight: "bold",
  //     textAlign: "center",
  //     backgroundColor: "#000000c0",
  //   },
});
export default RegistrationScreen;
