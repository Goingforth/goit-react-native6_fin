import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, SafeAreaView } from "react-native";

import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

import { useNavigation } from '@react-navigation/native';

import { FontAwesome, Feather, } from '@expo/vector-icons';

import * as Location from "expo-location";
import { postsTemp } from "../Data/data";







// const initialState = {
//   // name: "Ліс",
//   // geo: "Ivano-Frankivs'k Region, Ukraine",
//   name: "",
//   geo: "",
// };


const CreatePostScreen = () => {

  const navigation = useNavigation();

  const [photoName, setPhotoName] = useState('');
  const [photoLocationName, setPhotoLocationName] = useState('');

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [postPhoto, setPostPhoto] = useState(null);

  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const clearDataPost = () => {
    setPhotoName('');
    setPhotoLocationName('');
    setPostPhoto(null);
  };


  const handleSubmit = () => {

    const newPost = {
      image: postPhoto,
      name: photoName,
      comments: [],
      likes: 0,
      geo: photoLocationName,
      location: location,
    };

    postsTemp.unshift(newPost);

    clearDataPost();
    navigation.navigate('PostsScreen');
  }
  const handleSubmitNo = () => {
    console.log("No data post!");
    console.log(postPhoto);
  }

  //const isFocused = useIsFocused();////////////////////////

  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === "ios" ? -180 : -180}
    >
      <SafeAreaView style={styles.cont}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

          <View style={styles.container}>

            {postPhoto ? (
              <View>
                <Image
                  source={{ uri: postPhoto }}
                  style={styles.camera}
                />
                <Text style={styles.signature}>Редагувати фото</Text>
              </View>
            ) : (
              <View>
                <Camera style={styles.camera} type={type} ref={setCameraRef} >


                  <TouchableOpacity style={styles.takePhoto} onPress={async () => {
                    if (cameraRef) {
                      const { uri } = await cameraRef.takePictureAsync();
                      await MediaLibrary.createAssetAsync(uri);
                      setPostPhoto(uri);

                    }
                  }}>
                    <FontAwesome name="camera" size={24} color="#FFF" />
                  </TouchableOpacity>


                </Camera>

                {/* {isFocused && <Camera style={styles.camera} type={type} ref={setCameraRef} isActive={true}>


                  <TouchableOpacity style={styles.takePhoto} onPress={async () => {
                    if (cameraRef) {
                      const { uri } = await cameraRef.takePictureAsync();
                      await MediaLibrary.createAssetAsync(uri);
                      setPostPhoto(uri);

                    }
                  }}>
                    <FontAwesome name="camera" size={24} color="#FFF" />
                  </TouchableOpacity>


                </Camera>} */}
                <Text style={styles.signature}>Завантажте фото</Text>
              </View>
            )}


            <View style={styles.inputItem}>
              <TextInput style={styles.input}
                type={'text'}
                placeholder="Назва..."
                value={photoName}
                onChangeText={setPhotoName}
              />
            </View>


            <View style={{ ...styles.inputItem, marginBottom: 32 }}>
              <View style={styles.iconGeoStyle}>
                <Feather name='map-pin' size={24} color='#BDBDBD' />
              </View>
              <TextInput style={styles.input}
                placeholder="Місцевість..."
                type={'text'}
                name={'photoLocation'}
                value={photoLocationName}
                onChangeText={setPhotoLocationName}
              />
            </View>

            {photoName === "" || photoLocationName === "" || postPhoto === null ? (
              <TouchableOpacity style={styles.styleRegistrBtn} onPress={handleSubmitNo}>
                <Text style={styles.textButton}>Опубліковати</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.styleRegistrBtn} onPress={handleSubmit}>
                <Text style={styles.textButton}>Опубліковати</Text>
              </TouchableOpacity>
            )}




            <View
              style={{
                alignItems: 'center',

              }}
            >
              <TouchableOpacity
                style={styles.buttonDelete} onPress={clearDataPost}>

                <Feather name="trash-2" size={24} color="#BDBDBD" />
              </TouchableOpacity>
            </View>
            <View style={styles.homeIndicator}>
              <Image source={require("../Components/HomeIndicators/indicator.png")} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>

  );
};

export default CreatePostScreen;
const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 7,
    backgroundColor: '#FFFFFF',
    justifyContent: "flex-end",
  },
  camera: {
    width: "100%",
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    borderRadius: 8,
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

