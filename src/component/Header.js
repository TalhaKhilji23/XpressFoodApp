import {View, Text, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import {colors, parameters} from '../global/style';
import Feather from 'react-native-vector-icons/Feather';

const Header = ({title, type, navigation}) => {
  return (
    <View style={styles.header}>
      <View style={{marginLeft: '5%'}}>
        <Feather
          name={type}
          color={colors.headerText}
          size={28}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
  },
  headerText: {
    color: colors.headerText,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '30%',
  },
});
export default Header;
