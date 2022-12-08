import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GeneralHeader from '../component/GeneralHeader';
import {colors} from '../global/style';

export default function BusinessConsoleScreen({navigation, props}) {
  return (
    <View>
      <GeneralHeader
        navigation={navigation}
        props={'BusinnesConsole'}></GeneralHeader>
      <View style={styles.container}>
        <Text>BusinessConsoleScreen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});
