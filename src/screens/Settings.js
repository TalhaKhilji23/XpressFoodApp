import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GeneralHeader from '../component/GeneralHeader';
import {colors} from '../global/style';
import {Icon} from '@rneui/base';
export default function Settings({navigation, props}) {
  return (
    <View>
      <GeneralHeader navigation={navigation} props={'Settings'} />
      <View style={styles.container}>
        <View>
          <Text
            style={{
              position: 'absolute',
              width: 330,
              left: 20,
              top: 17,
              fontFamily: 'Yu Gothic UI',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: 16,
              lineHeight: 24,
              alignItems: 'center',
              color: '#868686',
            }}>
            Update your settings like notifications Payments Profile edit etc
          </Text>
        </View>
        <View>
          <Icon
            name="arrow-left"
            color={colors.buttons}
            size={32}
            style={{marginTop: 300}}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});
