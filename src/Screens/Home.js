// Home.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View, StyleSheet, Image, Text, Screen } from 'react-native';

import PostsScreen from '../Screens/PostsScreen';
import CreatePostsScreen from '../Screens/CreatePostsScreen';
import ProfileScreen from '../Screens/ProfileScreen';

import { authSignOut, authStateChange } from "../redux/auth/authSlice";
import { getAuth, signOut } from "firebase/auth";

import CommentsScreen from './CommentsScreen';

import { useNavigation } from '@react-navigation/native';

import { useDispatch } from 'react-redux';

import { AntDesign, Feather } from '@expo/vector-icons';




const Tabs = createBottomTabNavigator();

export const Home = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const signOutUser = () => {
    const auth = getAuth();

    signOut(auth).then(() => {
      dispatch(authSignOut());
      navigation.navigate('LoginScreen');

    }).catch((error) => {
      // An error happened.
      alert(error)
    });


  };

  return (

    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 72, borderTopWidth: 1, borderColor: '#E5E5E5',
        },
        headerTitleAlign: 'center',

        headerLeftContainerStyle: { paddingLeft: 16, paddingBottom: 10, paddingTop: 10, },
        headerRightContainerStyle: { paddingRight: 10, paddingBottom: 10, paddingTop: 10, },

        headerStyle: {
          borderBottomWidth: 1,
          borderColor: '#E5E5E5',

        },
      }}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          headerShown: true,
          title: "Публікації",
          tabBarIcon: ({ focused, size, color }) => (
            <View style={styles.buttonNew}>
              <Feather
                name="grid"
                size={24}
                color={'#212121'}
                strokeOpacity={0.8}
              />

            </View>
          ),
          headerRight: ({ focused, size, color }) => (
            <TouchableOpacity>
              <Feather name="log-out" size={24} color={'#BDBDBD'} onPress={signOutUser} />

            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          tabBarStyle: { display: 'none' },
          title: "Створити публікацію",
          tabBarIcon: ({ focused, size, color }) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#FF6C00',
                width: 70,
                height: 40,
                borderRadius: 20,
              }}
            >
              <AntDesign
                name="plus"
                size={13}
                color={'#FFFFFF'}

              />

            </View>
          ),
          headerLeft: ({ focused, size, color }) => (
            <TouchableOpacity onPress={() =>
              navigation.navigate('Home', { screen: 'PostsScreen' })}

            >

              <Feather name="arrow-left" size={24} color={color} />

            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 70,
                height: 40,
                borderRadius: 20,
              }}
            >
              <Feather
                name="user"
                size={24}
                color={'#212121'}

              />

            </View>
          ),
        }}
      />
      {/* <Tabs.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{
          tabBarStyle: { display: 'none' },
          title: "Коментарі",

          headerLeft: ({ focused, size, color }) => (
            <TouchableOpacity onPress={() =>
              navigation.navigate('Home', { screen: 'PostsScreen' })}

            >

              <Feather name="arrow-left" size={24} color={color} />

            </TouchableOpacity>
          ),
        }}
      /> */}


    </Tabs.Navigator>


  );
};

const styles = StyleSheet.create({
  buttonNew: {
    justifyContent: 'center',
    alignItems: 'center',

    width: 70,
    height: 40,
    borderRadius: 20,
  }
})




