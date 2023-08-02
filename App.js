import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { useFonts } from 'expo-font';

import LoginScreen from './src/Screens/LoginScreen';
import RegistrationScreen from './src/Screens/RegistrationScreen';
import Home from './src/Screens/Home';
// import CreatePostsScreen from './src/Screens/CreatePostsScreen';
// import ProfileScreen from './src/Screens/ProfileScreen';

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   RobotoBold: require('./src/fonts/Roboto-Bold.ttf'), // Завантаження шрифту Roboto-Bold
  //   RobotoRegular: require('./src/fonts/Roboto-Regular.ttf'), // Завантаження шрифту Roboto-Regular
  //   RobotoMedium: require('./src/fonts/Roboto-Medium.ttf'), // Завантаження шрифту Roboto-Medium
  // });

  // if (!fontsLoaded) {
  //   return null;
  // }

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
        {/* <Stack.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />  */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}