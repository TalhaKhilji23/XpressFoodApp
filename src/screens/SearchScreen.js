import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  FlatList,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';
import SearchComponent from '../component/SearchComponent';
import {filterData2} from '../global/data';
import {colors} from '../global/style';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Footer = ({navigation}) => {
  return (
    <View style={{marginTop: 20, marginBottom: 30}}>
      <FlatList
        style={{marginBottom: 10}}
        data={filterData2}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <TouchableWithoutFeedback
            onPress={() => {
              navigation({item: item.name});
            }}>
            <View style={styles.imageView}>
              <ImageBackground style={styles.image} source={{uri: item.image}}>
                <View style={styles.textView}>
                  <Text style={{color: colors.Cardbackground}}>
                    {item.name}
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </TouchableWithoutFeedback>
        )}
        horizontal={false}
        showsverticalScrollIndicator={false}
        numColumns={2}
        ListHeaderComponent={
          <Text style={styles.listHeader}>More categories</Text>
        }
      />
    </View>
  );
};

const SearchScreen = ({navigation}) => {
  const navigatar = name => {
    navigation.navigate('SearchResultScreen', {name});
  };
  return (
    <View style={{flex: 1}}>
      <SearchComponent />

      <View style={{marginTop: 10}}>
        <FlatList
          style={{marginBottom: 20}}
          data={filterData2}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate('SearchResultScreen', {item: item.name});
              }}>
              <View style={styles.imageView}>
                <ImageBackground
                  style={styles.image}
                  source={{uri: item.image}}>
                  <View style={styles.textView}>
                    <Text style={{color: colors.Cardbackground}}>
                      {item.name}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          )}
          horizontal={false}
          showsverticalScrollIndicator={false}
          numColumns={2}
          ListHeaderComponent={
            <Text style={styles.listHeader}>Top categories</Text>
          }
          ListFooterComponent={<Footer navigation={navigatar} />}
        />
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  imageView: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.4475,
    height: SCREEN_WIDTH * 0.4475,
    marginLeft: SCREEN_WIDTH * 0.035,
    marginBottom: SCREEN_WIDTH * 0.035,
  },

  image: {
    height: SCREEN_WIDTH * 0.4475,
    width: SCREEN_WIDTH * 0.4475,
    borderRadius: 10,
  },

  listHeader: {
    fontSize: 16,
    color: colors.grey2,
    paddingBottom: 10,
    marginLeft: 12,
  },

  textView: {
    height: SCREEN_WIDTH * 0.4475,
    width: SCREEN_WIDTH * 0.4475,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52,0.3)',
  },
});
