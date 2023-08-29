import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";


import { newComment } from "../redux/comment/commentSlice";

import { db } from '../firebase/config';
import { useAuth } from "../hooks/useAuth";
import { useNavigation } from '@react-navigation/native';

import { commentDate } from "../utils/commentdate";

import uuid from 'react-native-uuid';


import {
  collection,
  addDoc,
  doc,
  updateDoc,
  setDoc,
  Timestamp,
  query,
  onSnapshot,
} from 'firebase/firestore';

import { View, Text, Alert, StyleSheet, Image, TouchableOpacity, FlatList, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, SafeAreaView } from "react-native";

import imageSend from "../Screens/Images/send.png";
import imageNoAva from "../Screens/Images/noAva.png";
import imageAva from "../Screens/Images/avaComment.png";

const CommentsScreen = ({ route }) => {

  const id = route.params.id;
  const image = route.params.image;

  const navigation = useNavigation();
  const postId = id;

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const dispatch = useDispatch()
  const {
    authState: { login, photoURL, userId },
  } = useAuth();




  useEffect(() => {
    const q = query(collection(db, "posts", id, "comments"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newComments = [];

      querySnapshot.forEach((doc) => {

        const comment = doc.data().comment;
        const timeCreation = doc.data().timeCreation;
        newComments.push({ id: uuid.v4(), comment: comment, timeCreation: timeCreation });

      });
      setComments(newComments);

    });


  }, [])

  const addCommentToPost = async () => {
    const uniqueCommentId = Date.now().toString();

    try {
      const postRef = doc(db, "posts", postId, "comments", uniqueCommentId);

      await setDoc(postRef, {
        comment,
        timeCreation: commentDate(Date.now()),
        owner: {
          id,
          login,
          //avatar,
          userId,

        },
        // createdAt: Timestamp.fromDate(new Date()),
        // updatedAt: Timestamp.fromDate(new Date()),
      });

      Keyboard.dismiss();
    } catch (error) {
      console.log(error);
    }
  };


  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    // keyboardVerticalOffset={Platform.OS === "ios" ? -180 : -180}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <Image style={{
            resizeMode: 'cover',
            borderRadius: 8,
            width: "100%",
            height: 240,
          }} source={{ uri: `${image}` }} />


          <View style={{ flex: 1 }}>
            <FlatList

              data={comments}

              contentContainerStyle={{
                flexGrow: 1,
              }}

              renderItem={({ item }) => {

                return (
                  <>
                    <View style={{ marginTop: 32 }}>

                      <View style={styles.commentFull}>
                        <Image source={imageNoAva} />
                        <View style={styles.contentComment}>
                          <Text>{item.comment}</Text>
                          <View style={styles.commentData}>
                            <Text style={styles.innerText} >{item.timeCreation}</Text>
                          </View>
                        </View>
                      </View>

                    </View>
                  </>
                )
              }}
              keyExtractor={(item) => item.id}
            />
          </View>

          <View style={styles.inputComment}>
            <TextInput
              value={comment}
              style={styles.input}
              placeholder="Коментувати..."
              cursorColor={'#BDBDBD'}
              placeholderTextColor={'#BDBDBD'}
              onChangeText={setComment}
            ></TextInput>
            <TouchableOpacity style={styles.sendButton} onPress={() => {

              if (comment !== '') {
                addCommentToPost(postId, {
                  userId,
                  login,
                  //photoURL,
                  comment,

                });
                setComment('');
                dispatch(newComment(comment));
                Alert.alert("Коментар доданий.Дякую!")

              }
            }}
            >
              <Image source={imageSend} />
            </TouchableOpacity>
          </View>

          {/* </View> */}

        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView >

  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  cont: {
    // flex: 1,
  },
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
    // flex: 1,

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
  inputComment: {

    width: "100%",

  }
});


