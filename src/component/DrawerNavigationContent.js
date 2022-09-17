import {
  StyleSheet,
  Text,
  View,
  Linking,
  Pressable,
  Alert,
  Switch,
} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
// import { Avatar } from 'react-native-elements'
import {Avatar, Button, Icon} from '@rneui/base';
import {colors} from '../global/style';

const DrawerNavigationContent = props => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={{backgroundColor: colors.buttons}}>
          <View style={styles.avatarContainer}>
            <Avatar
              rounded
              avatarStyle={styles.avatar}
              source={{
                uri: 'https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?b=1&k=20&m=1309328823&s=170667a&w=0&h=a-f8vR5TDFnkMY5poQXfQhDSnK1iImIfgVTVpFZi_KU=',
              }}
              size={75}
            />

            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: colors.Cardbackground,
                  fontSize: 18,
                }}>
                Jhon Mark
              </Text>
              <Text style={{color: colors.Cardbackground, fontSize: 15}}>
                Jhon@xpressfood.com
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              paddingBottom: 5,
            }}>
            <View style={{flexDirection: 'row', marginTop: 0}}>
              <View
                style={{
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: colors.Cardbackground,
                    fontSize: 18,
                  }}>
                  1
                </Text>
                <Text style={{color: colors.Cardbackground, fontSize: 14}}>
                  My Favourites
                </Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', marginTop: 0}}>
              <View
                style={{
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: colors.Cardbackground,
                    fontSize: 18,
                  }}>
                  0
                </Text>
                <Text style={{color: colors.Cardbackground, fontSize: 14}}>
                  My Cart
                </Text>
              </View>
            </View>
          </View>
        </View>

        <DrawerItemList {...props} />

        <DrawerItem
          label={'Payment'}
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="credit-card-outline"
              color={color}
              size={size}
            />
          )}
        />

        <DrawerItem
          label={'Promotions'}
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="tag-heart"
              color={color}
              size={size}
            />
          )}
        />

        <DrawerItem
          label={'Setting'}
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="cog-outline"
              color={color}
              size={size}
            />
          )}
        />

        <DrawerItem
          label={'Help'}
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="lifebuoy"
              color={color}
              size={size}
            />
          )}
        />

        <View style={{borderTopWidth: 1, borderTopColor: colors.grey5}}>
          <Text style={styles.preferences}>Prefrences</Text>

          <View style={styles.switchText}>
            <Text style={styles.darkThemeText}>Dark Theme</Text>
            <View style={{paddingLeft: 10}}>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor="#f4f3f4"
              />
            </View>
          </View>
        </View>
      </DrawerContentScrollView>

      <DrawerItem
        label={'Sign Out'}
        icon={({color, size}) => (
          <Icon
            type="material-community"
            name="logout-variant"
            color={color}
            size={size}
          />
        )}
      />
    </View>
  );
};

export default DrawerNavigationContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    borderWidth: 3,

    borderColor: "white",
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingVertical: 10,
  },
  preferences: {
    fontSize: 16,
    color: colors.grey2,
    paddingTop: 10,
    paddingLeft: 20,
  },
  switchText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingVertical: 5,
    paddingRight: 10,
  },
  darkThemeText: {
    fontSize: 16,
    color: colors.grey2,
    paddingTop: 10,
    paddingLeft: 0,
    fontWeight: 'bold',
  },
});
