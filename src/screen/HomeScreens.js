import 'react-native-gesture-handler';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../form-log/WelcomeScreen';
import LoginScreen from '../form-log/LoginScreen';
import RegisterScreens from '../form-log/RegisterScreens';
import MainScreens from './MainScreens';
import ForgotScreens from '../form-log/ForgotScreens';
import AboutScreens from '../component/AboutScreens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ShopScreens from '../component/ShopScreens';
import BagScreens from '../component/BagScreens';
import FavoriteScreens from '../component/FavoriteScreens';
const Stack = createNativeStackNavigator();
const TabBottom = createBottomTabNavigator();

const HomeScreens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Welcome' component={WelcomeScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreens} />
        <Stack.Screen name='MainScreen'>
          {() => (
            <TabBottom.Navigator screenOptions={{ headerShown: false }}>
              <TabBottom.Screen name="Home" component={MainScreens}
                options={{
                  tabBarLabel: 'Home',
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                  ),
                }} />
              <TabBottom.Screen name='Shop' component={ShopScreens}
                options={{
                  tabBarLabel: 'Shop',
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="shopping" color={color} size={26} />
                  ),
                }} />
              <TabBottom.Screen name="Bag" component={BagScreens}
                options={{
                  tabBarLabel: 'Bag',
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="bag-personal" color={color} size={26} />
                  ),
                }}
              />

              <TabBottom.Screen name="Favorite" component={FavoriteScreens}
                options={{
                  tabBarLabel: 'Favorite',
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="heart" color={color} size={26} />
                  ),
                }}
              />
              <TabBottom.Screen name="About" component={AboutScreens}
                options={{
                  tabBarLabel: 'About',
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="contacts" color={color} size={26} />
                  ),
                }} />
            </TabBottom.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen name='Forgot' component={ForgotScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeScreens;
