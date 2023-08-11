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
          </View>
        </View>
        <View style={{ ...styles.commentFull, flexDirection: "row-reverse", marginRight: 0, marginLeft: 16, }}>
          <Image source={imageAva} />
          <View style={styles.contentComment}></View>
        </View>
        <View style={{ ...styles.commentFull, marginBottom: 0 }}>
          <Image source={imageNoAva} />
          <View style={styles.contentComment}></View>
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

    marginTop: 32,
  },
  sendButton: {
    position: 'absolute',
    top: 8,
    right: 5,
  },
  commentFull: {
    flexDirection: "row",

    backgroundColor: 'green',
    marginBottom: 24,

    border: 1,
    borderColor: "black",
    width: "100%",
  },
  contentComment: {
    padding: 16,
    //  marginLeft: 16,
    backgroundColor: '#00000008',
    backgroundColor: 'red',
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    fontSize: 13,
    fontWeight: "regular",
    //width: 299,



  }
  ,
});


