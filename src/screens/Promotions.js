import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GeneralHeader from '../component/GeneralHeader';

export default function Promotions({navigation, props}) {
  return (
    <View>
      <GeneralHeader navigation={navigation} props={'Promotions'} />
      <Text>Payment</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
