import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {colors} from '../global/style';
const ProductCard = ({productName, price, image}) => {
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <View style={styles.view3}>
          <Text style={styles.text1}>{productName}</Text>
          <Text style={[styles.text2]}>PKR {price}</Text>
        </View>
        <View style={styles.view4}>
       

          <Image style={styles.image} source={{uri: image}} />
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  view1: {
    backgroundColor: 'white',
    elevation: 7,
    shadowOpacity: 0.4,
    shadowColor: 'black',
    margin: 5,
    width: 220,
    padding: 10,
    marginLeft: 10,
    textAlign: 'center',
  },

  view2: {flexDirection: 'row', padding: 5, textAlign: 'center'},

  view3: {
    justifyContent: 'space-between',
    paddingLeft: 5,
    textAlign: 'center',
    width: 110,
  },

  text1: {
    fontSize: 15,
    color: colors.grey1,
    textAlign: 'center',
    justifyContent: 'center',
    justifyContent: 'space-evenly',
    paddingRight: 20,
  },
  text2: {
    fontSize: 15,
    color: colors.grey1,
    textAlign: 'center',
    justifyContent: 'center',
    justifyContent: 'space-evenly',
    paddingRight: 20,
    fontWeight: 'bold',
  },

  view4: {width: 75, height: 65},

  image: {height: 55, paddingLeft: 10, width: 85},
});
