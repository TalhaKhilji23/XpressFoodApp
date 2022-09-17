import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Icon} from '@rneui/base';
import {colors} from '../global/style';
import ProductCard from './ProductCard';
export default function SearchResultCard({
  OnPressRestaurantCard,
  restaurantName,
  deliveryAvailabe,
  discountAvailable,
  discountPercent,
  numberOfReview,
  businessAddress,
  farAway,
  averageReview,
  images,
  productData,
}) {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(productData);
  }, []);

  return (
    <View>
      <TouchableOpacity onPress={OnPressRestaurantCard}>
        <View style={styles.view1}>
          <View style={{height: 150}}>
            <ImageBackground
              style={{height: 160}}
              source={{uri: images}}
              imageStyle={styles.imageStyle}
            />

            <View style={styles.image}>
              <Text style={styles.text1}>{averageReview}</Text>
              <Text style={styles.text2}> {numberOfReview} reviews</Text>
            </View>
          </View>

          <View style={styles.view3}>
            <View style={{paddingTop: 5}}>
              <Text style={styles.text5}>{restaurantName}</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View style={styles.view4}>
                <Icon
                  name="place"
                  type="material"
                  color={colors.CardComment}
                  size={18}
                  iconStyle={{marginTop: 3, marginLeft: -3}}
                />

                <Text style={styles.view5}>{farAway}Min</Text>
              </View>
              <View style={{flex: 9}}>
                <Text style={styles.text6}>{businessAddress}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{marginTop: 5, paddingBottom: 20}}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          style={{backgroundColor: colors.Cardbackground}}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <ProductCard
              image={item.image}
              productName={item.name}
              price={item.price}
            />
          )}
          horizontal={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    marginHorizontal: 10,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },

  image: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'rgba(52, 52, 52,0.4)',
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 12,
  },

  imageStyle: {borderTopLeftRadius: 5, borderTopRightRadius: 5},

  text1: {color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: -3},

  text2: {color: 'white', fontSize: 13, marginRight: 0, marginLeft: 0},

  view2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -5,
  },
  text3: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.grey2,
  },

  text4: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.grey2,
  },
  view3: {
    flexDirection: 'column',
    marginHorizontal: 5,
    marginBottom: 20,
    marginLeft: 20,
    marginTop: 10,
  },

  text5: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.grey1,
  },

  view4: {
    flex: 4,
    flexDirection: 'row',
    borderRightWidth: 5,
    borderRightColor: colors.grey4,
    paddingHorizontal: 5,
  },

  view5: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 5,
    color: colors.grey3,
  },

  text6: {
    fontSize: 12,
    paddingTop: 5,
    color: colors.grey2,
    paddingHorizontal: 10,
  },
});
