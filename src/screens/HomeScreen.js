import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {Icon} from '@rneui/themed';
import HomeHeader from '../component/HomeHeader';
import {colors} from '../global/style';
import {filterData, restaurantsData} from '../global/data';
import FoodCard from '../component/FoodCard';
import CountDown from 'react-native-countdown-component';

const SCREEN_WIDTH = Dimensions.get('window').width;
console.log(SCREEN_WIDTH);
// const SCREEN_Height = Dimensions.get('window').height;

const HomeScreen = ({navigation}) => {
  const [delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState('0');
  return (
    <View sytle={styles.container}>
      <HomeHeader navigation={navigation} />
      <ScrollView
        // stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={true}
        vertical={true}>
        <View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              onPress={() => {
                setDelivery(true);
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.buttons : colors.grey5,
                }}>
                <Text style={styles.deliverytxt}>Delivery</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
                navigation.navigate('RestaurantMapScreen');
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.grey5 : colors.buttons,
                }}>
                <Text style={styles.deliverytxt}>Pick up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.filter}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: colors.grey5,
              borderRadius: 15,
              paddingVertical: 5,
              paddingHorizontal: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                type="material-community"
                name="map-marker"
                size={26}
                color={colors.grey1}
              />
              <Text style={{marginLeft: 5}}>22 Bessie Street</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 20,
                paddingRight: 20,
                backgroundColor: colors.Cardbackground,
                borderRadius: 10,
              }}>
              <Icon
                type="material-community"
                name="clock-time-four"
                size={26}
                color={colors.grey1}
              />
              <Text style={{marginLeft: 5}}>Now</Text>
            </View>
          </View>

          <View>
            <Icon
              type="material-community"
              name="tune"
              size={26}
              color={colors.grey1}
            />
          </View>
        </View>

        <View style={styles.headigView}>
          <Text style={styles.headingText}>Categories</Text>
        </View>

        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={item => item.id}
            extraData={indexCheck}
            renderItem={({item, index}) => (
              <Pressable
                onPress={() => {
                  setIndexCheck(item.id);
                }}>
                <View
                  style={
                    indexCheck === item.id
                      ? {...styles.smallCardSelected}
                      : {...styles.smallCard}
                  }>
                  <Image
                    style={{height: 60, width: 60, borderRadius: 30}}
                    source={item.image}
                  />
                  <View>
                    <Text
                      style={
                        indexCheck === item.id
                          ? {...styles.smallCardTextSelected}
                          : {...styles.smallCardText}
                      }>
                      {item.name}
                    </Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>

        <View style={styles.headigView}>
          <Text style={styles.headingText}>Free Delivery now</Text>
        </View>

        <View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <Text
              style={{
                marginLeft: 15,
                fontSize: 16,
                marginTop: -10,
                marginRight: 5,
                color: colors.buttons,
              }}>
              Options Changing in
            </Text>
            <CountDown
              until={3600}
              size={16}
              digitStyle={{backgroundColor: 'orange'}}
              digitTxtStyle={{color: 'white'}}
              timeToShow={['M', 'S']}
              timeLabels={{m: 'Min', s: 'Sec'}}
            />
          </View>

          <FlatList
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 10, marginBottom: 10}}
            horizontal={true}
            data={restaurantsData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View style={{marginTop: 5}}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.5}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  faraway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                  item={item}
                />
              </View>
            )}
          />
        </View>

        <View style={styles.headigView}>
          <Text style={styles.headingText}>Promotions Available</Text>
        </View>

        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 10, marginBottom: 10}}
            horizontal={true}
            data={restaurantsData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View style={{marginTop: 5}}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.67}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  faraway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>

        <View style={styles.headigView}>
          <Text style={styles.headingText}>Restaurant in your area</Text>
        </View>

        <View style={{width: SCREEN_WIDTH, paddingTop: 10}}>
          {restaurantsData.map(item => (
            <View key={item.id} style={{paddingBottom: 20}}>
              <FoodCard
                screenWidth={SCREEN_WIDTH * 0.95}
                images={item.images}
                restaurantName={item.restaurantName}
                faraway={item.farAway}
                businessAddress={item.businessAddress}
                averageReview={item.averageReview}
                numberOfReview={item.numberOfReview}
              />
            </View>
          ))}
        </View>
      </ScrollView>

      {delivery && (
        <View style={styles.floatingButton}>
          <TouchableOpacity
            onPress={() => navigation.navigate('RestaurantMapScreen')}>
            <Icon
              name="place"
              type="material"
              size={32}
              style={{color: colors.buttons}}
            />
            <Text style={{color: colors.grey2}}>Map</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deliveryButton: {
    paddingHorizontal: 30,
    paddingVertical: 7,
    borderRadius: 15,
  },
  deliverytxt: {
    marginLeft: 4,
    fontSize: 16,
  },
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  headigView: {
    backgroundColor: colors.grey5,
    paddingVertical: 3,
  },
  headingText: {
    color: colors.grey1,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  smallCard: {
    borderRadius: 10,
    backgroundColor: colors.grey5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 90,
    marginLeft: 8,
    marginTop: 20,
    marginHorizontal: 5,
    height: 90,
    marginBottom: 17,
  },
  smallCardSelected: {
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: colors.buttons,
    alignItems: 'center',
    padding: 10,
    width: 100,
    margin: 10,
    height: 100,
  },
  smallCardTextSelected: {
    fontWeight: 'bold',
    color: 'white',
  },
  smallCardText: {
    fontWeight: 'bold',
    colors: colors.grey2,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 70,
    paddingTop: 5,
    right: 20,
    backgroundColor: 'white',
    elevation: 20,
    width: 65,
    height: 65,
    borderRadius: 60,
    alignItems: 'center',
  },
});
