import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {colors} from '../global/style';
import ClientTabs from './ClientTabs';
import {Icon} from '@rneui/base';
import BusinessConsoleScreen from '../screens/BusinessConsoleScreen';
import DrawerNavigationContent from '../component/DrawerNavigationContent';
import Payment from '../screens/Payment';
import Promotions from '../screens/Promotions';
import Settings from '../screens/Settings';
import Help from '../screens/Help';
// import RootNavigation from './RootNavigation'

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerNavigationContent {...props} />}>
      <Drawer.Screen
        name="ClientTabs"
        component={ClientTabs}
        options={{
          title: 'Client',
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <Icon
              type="material-community"
              name="home"
              color={focused ? '#7cc' : colors.grey2}
              size={size}
            />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="RootClientTabs"
        component={ClientTabs}
        options={{
          title: 'Client',
          drawerIcon: ({focused, size}) => (
            <Icon
              type="material-coomunity"
              name="home"
              color={focused ? '#7cc' : colors.grey2}
              size={size}
            />
          ),
        }}
      /> */}
      <Drawer.Screen
        name="Business console"
        component={BusinessConsoleScreen}
        options={{
          title: 'Business console',
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <Icon
              type="material"
              name="business"
              color={focused ? '#7cc' : colors.grey2}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Payment"
        component={Payment}
        options={{
          title: 'Payment',
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <Icon
              type="material-community"
              name="credit-card-outline"
              color={focused ? '#7cc' : colors.grey2}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Promotions"
        component={Promotions}
        options={{
          title: 'Promotions',
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <Icon
              type="material-community"
              name="tag-heart"
              color={focused ? '#7cc' : colors.grey2}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <Icon
              type="material-community"
              name="cog-outline"
              color={focused ? '#7cc' : colors.grey2}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Help"
        component={Help}
        options={{
          title: 'Help',
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <Icon
              type="material-community"
              name="lifebuoy"
              color={focused ? '#7cc' : colors.grey2}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
