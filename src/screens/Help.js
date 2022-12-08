import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GeneralHeader from '../component/GeneralHeader';

export default function Help({navigation, props}) {
  return (
    <View>
      <GeneralHeader navigation={navigation} props={'Help'} />
      <Text>Help</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
