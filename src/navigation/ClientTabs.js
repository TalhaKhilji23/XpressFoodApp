import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import {colors} from '../global/style';
import {Icon} from '@rneui/base';
import SearchScreen from '../screens/SearchScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import MyOrderScreen from '../screens/MyOrderScreen';
// import ClientStack from './ClientStack';

const Tab = createBottomTabNavigator();

const ClientTabs = () => {
  return (
    

    
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen1"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          activeTintColor: colors.buttons,
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="home" type="material" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="search" type="material" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="MyOrderScreen"
        component={MyOrderScreen}
        options={{
          tabBarLabel: 'My Orders',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="view-list" type="material" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="MyAccountScreen"
        component={MyAccountScreen}
        options={{
          tabBarLabel: 'My Account',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="person" type="material" color={color} size={size} />
          ),
        }}
      />
      

      
    </Tab.Navigator>
  );
};

export default ClientTabs;

const styles = StyleSheet.create({});
