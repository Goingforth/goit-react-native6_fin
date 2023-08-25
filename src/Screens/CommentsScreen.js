import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { db } from '../firebase/config';
import { useAuth } from "../hooks/useAuth";
import { useNavigation } from '@react-navigation/native';

import { commentDate } from "../utils/commentdate";

//import { doc, onSnapshot, getDocs, collection, query, where, } from "firebase/firestore";

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

import { View, Text, Alert, StyleSheet, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, SafeAreaView } from "react-native";

import imageSend from "../Screens/Images/send.png";
import imageNoAva from "../Screens/Images/noAva.png";
import imageAva from "../Screens/Images/avaComment.png";

const CommentsScreen = ({ route }) => {
  const id = route.params.id; //console.log(id);
  const image = route.params.image; //console.log(image);

  const navigation = useNavigation();
  const postId = id;

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const {
    authState: { login, photoURL, userId },
  } = useAuth();

  // useEffect(() => {
  //   const q = query(collection(db, "comments"));
  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     const newComments = [];
  //     const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //       // console.log(querySnapshot);
  //       // querySnapshot.forEach((doc) => {
  //       //   console.log(doc.id);
  //       //   // newPosts.push({ comment: doc.comment, ...doc.data().post });

  //       // });
  //       // // const reversComments = newComments.reverse();
  //       // setComments(reversComments);
  //     });

  //     console.log(comments);
  //   }, [])

  useEffect(() => {
    const q = query(collection(db, "posts", id, "comments"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newComments = [];

      querySnapshot.forEach((doc) => {
        // console.log(doc.data().comment);
        // console.log(doc.data().timeCreation);
        // console.log(doc.data());
        const comment = doc.data().comment;
        const timeCreation = doc.data().timeCreation;
        newComments.push({ comment: comment, timeCreation: timeCreation });

      });
      // const reversComments = newComments.reverse();
      setComments(newComments.reverse());

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
        <SafeAreaView style={styles.cont}>

          <View style={styles.container}>
            <Image style={{
              resizeMode: 'cover',
              borderRadius: 8,
              width: "100%",
              height: 240,
            }} source={{ uri: `${image}` }} />
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
                    Alert.alert("Коментар доданий.Дякую!")

                  }
                }}
                >
                  <Image source={imageSend} />
                </TouchableOpacity>
              </View>


            </View>
          </View>

        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
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


