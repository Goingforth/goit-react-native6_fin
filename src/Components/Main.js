import React from "react";
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import { useDispatch } from 'react-redux';

import LoginScreen from '../Screens/LoginScreen';
import RegistrationScreen from '../Screens/RegistrationScreen';
import { Home } from '../Screens/Home';
import CreatePostsScreen from '../Screens/CreatePostsScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import PostsScreen from '../Screens/PostsScreen';
import CommentsScreen from '../Screens/CommentsScreen';
import MapScreen from '../Screens/MapScreen';



export default function Main() {

    const MainStack = createStackNavigator();

    // const dispatch = useDispatch();

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