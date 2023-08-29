import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectorNewComment } from "../redux/comment/selectors";

import { View, Text, StyleSheet, Image, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { db } from "../firebase/config";

import { doc, onSnapshot, getDocs, collection, query, where, } from "firebase/firestore";

import userAva from "../Screens/Images/userAva.jpg";



const PostsScreen = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);

  const newComment = useSelector(selectorNewComment);



  const getDataFromFirestore = (callback) => {

    return onSnapshot(collection(db, 'posts'), (snapshot) => {

      const newData = [];
      snapshot.forEach((doc) => {
        const data = doc.data().post;
        const id = doc.id;
        const commentsRef = collection(db, 'posts', id, 'comments');
        getDocs(commentsRef).then((commentsSnapshot) => {
          const commentsCount = commentsSnapshot.size;
          newData.push({ id, ...data, commentsCount });
          if (newData.length === snapshot.size) {
            callback(newData);
          }
        });
      });
    });
  };

  useEffect(() => {
    const unsubscribe = getDataFromFirestore((newData) => {
      setPosts(newData);


    });



  }, [navigation, newComment])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <View style={styles.user}>
            <Image style={styles.userAva}
              source={userAva}
            />
            <View>
              <Text style={styles.name}>Natali Romanova</Text>
              <Text style={styles.email}>email@example.com</Text>
            </View>
          </View>
        }

        data={posts}

        renderItem={({ item }) => {

          return (<View >
            <View style={{ marginTop: 32 }}>


              <Image style={{
                resizeMode: 'cover',
                borderRadius: 8,
                width: "100%",
                height: 240,
              }} source={{ uri: `${item.image}` }} />

              <Text style={styles.postTitle}>{item.name}</Text>
              <View style={styles.postInfo}>
                <View flexDirection="row">

                  <TouchableOpacity onPress={() => navigation.navigate('CommentsScreen', {
                    id: item.id, image: item.image
                  })} >
                    <Feather name="message-circle" size={24} color="#BDBDBD" />

                  </TouchableOpacity>
                  <Text style={styles.textViews}>{item.commentsCount}</Text>

                </View>
                <View flexDirection="row">
                  <TouchableOpacity onPress={() => navigation.navigate('MapScreen', { latitude: item.location.latitude, longitude: item.location.longitude })} >
                    <Feather name="map-pin" size={24} color="#BDBDBD" />
                  </TouchableOpacity>

                  <Text style={styles.textGeo}>{item.geo}</Text>
                </View>

              </View>
            </View>
          </View>)
        }}
        keyExtractor={(item) => item.id}
      />

    </SafeAreaView >
  );


};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,

    backgroundColor: '#FFFFFF',
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
  },
  userAva: {
    width: 60,
    height: 60,
    marginRight: 8,
  },
  name: {
    fontSize: 13,
    fontWeight: "bold",
  },
  email: {
    fontSize: 11,
    color: "#212121",
    opacity: 0.8,

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

  }
});


