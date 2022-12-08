import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon, withBadge} from '@rneui/themed';
import {colors, parameters} from '../global/style';
import DrawerNavigation from '../navigation/DrawerNavigation';
import Settings from '../screens/Settings';

const GeneralHeader = ({navigation, props}) => {
  return (
    <View>
      <View style={styles.header}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 15,
          }}>
          <TouchableOpacity>
            <Icon
              type="material-community"
              name="menu"
              color={colors.Cardbackground}
              size={32}
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              color: colors.Cardbackground,
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            {props}
          </Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 15,
          }}></View>
      </View>
    </View>
  );
};
export default GeneralHeader;
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    justifyContent: 'space-between',
  },
});
