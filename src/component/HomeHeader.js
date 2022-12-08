import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon, withBadge} from '@rneui/themed';
import {colors, parameters} from '../global/style';

const BadgeIcon = withBadge(0)(Icon);

const HomeHeader = ({navigation}) => {
  return (
    <View style={styles.header}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 15,
        }}>
        <Icon
          type="material-community"
          name="menu"
          color={colors.Cardbackground}
          size={32}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </View>

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            color: colors.Cardbackground,
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          XpressFood{' '}
        </Text>
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 15,
        }}>
        <BadgeIcon
          type="material-community"
          name="cart"
          size={35}
          color={colors.Cardbackground}
        />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    justifyContent: 'space-between',
  },
});
