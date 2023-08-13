import React, { useState } from "react";

import { useNavigation } from '@react-navigation/native';

import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, SafeAreaView } from "react-native";

import imageSend from "../Screens/Images/send.png";
import imageNoAva from "../Screens/Images/noAva.png";
import imageAva from "../Screens/Images/avaComment.png";

const CommentsScreen = () => {
  const navigation = useNavigation();
  const [comment, setComment] = useState('');
  return (
    <View style={styles.container}>
      <Image style={styles.postImage} source={require('../Screens/Images/sunset.jpg')} />
      <View style={styles.containerComments}>
        <View style={styles.commentFull}>

          <Image source={imageNoAva} />

          <View style={styles.contentComment}>
            <Text>Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!</Text>
            <View style={styles.commentData}>
              <Text style={styles.innerText}>09 червня, 2020 | 08:40</Text>
            </View>
          </View>

        </View>
        <View style={{ ...styles.commentFull, flexDirection: "row-reverse", }}>
          <Image source={imageAva} />
          <View style={{ ...styles.contentComment, marginLeft: 0, marginRight: 16, }}>
            <Text>A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.</Text>
            <View style={{ ...styles.commentData, justifyContent: "flex-start", }}>
              <Text style={styles.innerText}>09 червня, 2020 | 09:14</Text>
            </View>
          </View>
        </View>
        <View style={styles.commentFull}>
          <Image source={imageNoAva} />
          <View style={styles.contentComment}>
            <Text>Thank you! That was very helpful!</Text>
            <View style={styles.commentData}>
              <Text style={styles.innerText} >09 червня, 2020 | 09:20</Text>
            </View>
          </View>
        </View>
        <View>
          <TextInput
            value={comment}
            style={styles.input}
            placeholder="Коментувати..."
            cursorColor={'#BDBDBD'}
            placeholderTextColor={'#BDBDBD'}
          ></TextInput>
          <TouchableOpacity style={styles.sendButton} >
            <Image source={imageSend} />
          </TouchableOpacity>
        </View>


      </View>
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,

    backgroundColor: '#FFFFFF',
  },
  postImage: {
    resizeMode: 'cover',
    borderRadius: 8,
    width: "100%",
  },
  containerComments: {
    flex: 1,

    marginTop: 32,
    marginBottom: 32,

  },
  input: {
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 15,
    width: "100%",
    height: 50,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 100,


  },
  sendButton: {
    position: 'absolute',
    top: 8,
    right: 5,
  },
  commentFull: {
    flexDirection: "row",
    overflow: 'hidden',

    marginBottom: 24,

    border: 1,
    borderColor: "black",
    width: "100%",
  },
  contentComment: {
    width: 300,
    padding: 16,
    marginLeft: 16,
    backgroundColor: '#00000008',

    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    fontSize: 13,
    fontWeight: "regular",

  },
  commentData: {
    flexDirection: "row",

    marginTop: 8,
    justifyContent: "flex-end",



  },
  innerText: {
    color: "#BDBDBD",
    fontSize: 10,

  },
});


