import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/Screens/LoginScreen';
import RegistrationScreen from './src/Screens/RegistrationScreen';
import { Home } from './src/Screens/Home';
import CreatePostsScreen from './src/Screens/CreatePostsScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import PostsScreen from './src/Screens/PostsScreen';
import CommentsScreen from './src/Screens/CommentsScreen';
import MapScreen from './src/Screens/MapScreen';


export default function App() {

  const MainStack = createStackNavigator();

  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{ headerShown: false }}
      >
        <MainStack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
        />
        <MainStack.Screen name="LoginScreen" component={LoginScreen} />
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
        <MainStack.Screen name="ProfileScreen" component={ProfileScreen} />
        <MainStack.Screen name="PostsScreen" component={PostsScreen} />
        {/* <MainStack.Screen name="CommentsScreen" component={CommentsScreen} options={{
          // title: "Коментарі",
          title: "Comments",
          headerStyle: {
            width: 300,
            height: 80,
            backgroundColor: "red",
          },
          headerTintColor: "green",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="Press me"
              color="#fff"
            />
          ),
        }} /> */}
        <MainStack.Screen
          name="CommentsScreen"
          component={CommentsScreen}
          options={{
            headerShown: true,
            headerTitleAlign: 'center',
            title: "Коментарі",
            headerStyle: {
              backgroundColor: '#fff',

            },
            headerTintColor: '#212121',

            headerTitleStyle: {
              fontWeight: 'medium',
              fontSize: 17,

            },
          }}
        />
        <MainStack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            headerShown: true,
            headerTitleAlign: 'center',
            title: "Карта",
            headerStyle: {
              backgroundColor: '#fff',

            },
            headerTintColor: '#212121',

            headerTitleStyle: {
              fontWeight: 'medium',
              fontSize: 17,

            },
          }}
        />

      </MainStack.Navigator>
    </NavigationContainer>
  );
}

