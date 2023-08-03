// Home.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View,StyleSheet, } from 'react-native';

import PostsScreen from '../Screens/PostsScreen';
import CreatePostsScreen from '../Screens/CreatePostsScreen';
import ProfileScreen from '../Screens/ProfileScreen';

import { useNavigation } from '@react-navigation/native';

import { AntDesign, Feather } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

export const Home = () => {
  const navigation = useNavigation();

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
         tabBarStyle: { height: 83, justifyContent: 'center' },
         headerTitleAlign: 'center',

        headerRightContainerStyle: { paddingRight: 10, paddingBottom: 10 },
        headerLeftContainerStyle: { paddingLeft: 16, paddingBottom: 10 },
      }}
    >
      <Tabs.Screen
        name="Публікації"
        component={PostsScreen}
        options={{
          headerShown: true,
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
              <Feather name="log-out" size={24} color={'#BDBDBD'} />
             
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="Створити публікацію"
        component={CreatePostsScreen}
        options={{
          tabBarStyle: { display: 'none' },
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
                //fillOpacity={0.8}
                //fill={'#FFFFFF'}
              />
            
            </View>
          ),
          headerLeft: ({ focused, size, color }) => (
            <TouchableOpacity >
              <AntDesign name="arrowleft" size={24} color={color} />
             
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
                stroke={focused ? '#FFFFFF' : '#212121'}
              />
             
            </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  buttonNew:{
                justifyContent: 'center',
                alignItems: 'center',
            
                width: 70,
                height: 40,
                borderRadius: 20,
              }
})




