import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, FlatList, Image, useWindowDimensions, TouchableOpacity, Dimensions, } from "react-native";
import { Feather } from '@expo/vector-icons';

// import { dataProfile } from "../Data/data";
import { posts } from "../Data/data";

import imageBG from "../Screens/Images/bg_photo.jpg";
import imageUser from "../Screens/Images/userAvaProfile.jpg";
import add from "../Screens/Images/add.png";

const ProfileScreen = () => {
  // const [data, setData] = useState(dataProfile);
  const [data, setData] = useState(posts);
  const { height, width } = useWindowDimensions();

  return (
    <>
      <ImageBackground source={imageBG} resizeMode="cover"
        style={{ position: 'absolute', width: width, height: height }}>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <View style={styles.imageUser}>
              <Image source={imageUser} size={120} />
            </View>
            <View style={styles.iconAdd}>
              <Image source={add} size={24} color="E8E8E8" />
            </View>
            <Feather name="log-out" size={24} color="#BDBDBD" style={{ marginBottom: 46, marginLeft: "auto" }} />

            <View>
              <Text style={styles.header}>Natali Romanova</Text>
            </View>

            <FlatList
              data={data}
              renderItem={({ item }) => (<View >
                <View style={{ marginTop: 32 }}>
                  <Image style={styles.postImage} source={item.image} />
                  <Text style={styles.postTitle}>{item.title}</Text>
                  <View style={styles.postInfo}>
                    <View flexDirection="row">
                      <Feather name="message-circle" size={24} color="#FF6C00" />
                      <Text style={{ ...styles.textViews, marginRight: 24 }}>{item.comments}</Text>
                      <Feather name="thumbs-up" size={24} color="#FF6C00" />
                      <Text style={styles.textViews}>{item.likes}</Text>
                    </View>
                    <View flexDirection="row">
                      <Feather name="map-pin" size={24} color="#BDBDBD" />
                      <Text style={styles.textGeo}>{item.geo}</Text>
                    </View>

                  </View>
                </View>
              </View>)}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </ImageBackground >
    </>

  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",

  },

  formContainer: {
    height: '82%',
    paddingTop: 22,
    paddingBottom: 103,
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  header: {
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",

    marginBottom: 32,
  },
  postImage: {
    resizeMode: 'cover',
    borderRadius: 8,
    width: "100%",
  },
  postTitle: {
    marginVertical: 8,

    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
    fontWeight: '500',

  },
  textViews:
  {
    marginLeft: 6,
    fontSize: 16,

    color: '#212121'
  },
  postInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textGeo: {
    marginLeft: 8,
    fontSize: 16,
    color: '#212121',
    textDecorationLine: "underline",
  },

  imageUser: {
    position: 'absolute',
    left: (Dimensions.get('window').width / 2) - 60,

    top: -60,
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,

    overflow: "hidden",

  },
  iconAdd: {
    position: 'absolute',
    top: 16,
    left: 233,
  },
});
