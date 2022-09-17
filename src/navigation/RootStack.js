import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import HomeScreen from '../screens/HomeScreen';
import ClientTabs from './ClientTabs';
import DrawerNavigation from './DrawerNavigation';
import SearchResultScreen from '../screens/SearchResultScreen';
import RestaurantMapScreen from '../screens/RestaurantMapScreen';
import RestaurantHomeScreen from '../screens/RestaurantHomeScreen';
const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="RestaurantHomeScreen"
        initialRouteName="SignInWelcomeScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#F4511E',
            paddingTop: 20,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          animation: 'slide_from_right',
        }}>
        <Stack.Screen
          name="SignInWelcomeScreen"
          component={SignInWelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="RestaurantMapScreen"
          component={RestaurantMapScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SearchResultScreen"
          component={SearchResultScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RestaurantHomeScreen"
          component={RestaurantHomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
