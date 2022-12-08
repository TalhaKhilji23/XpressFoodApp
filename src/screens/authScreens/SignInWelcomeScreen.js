import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {colors, parameters, title} from '../../global/style';
import Swiper from 'react-native-swiper';
import {Button} from '@rneui/themed';

export default function SignInWelcomeScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <Text style={{fontSize: 26, fontWeight: 'bold', color: colors.buttons}}>
          DISCOVER RESTAURANTS
        </Text>
        <Text style={{fontSize: 26, fontWeight: 'bold', color: colors.buttons}}>
          IN YOUR AREA
        </Text>
      </View>

      <View style={{flex: 4, justifyContent: 'center'}}>
        <Swiper autoplay={true}>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: 'https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000',
              }}
              style={{
                width: '90%',
                height: '100%',
                borderRadius: 5,
              }}
            />
          </View>

          <View style={styles.slide2}>
            <Image
              source={{
                uri: 'https://pas-wordpress-media.s3.amazonaws.com/content/uploads/2019/10/24135155/Fast-Food-Restaurant-Sample-Business-Plan-1-min.jpg',
              }}
              style={{
                width: '90%',
                height: '100%',
                borderRadius: 5,
              }}
            />
          </View>

          <View style={styles.slide3}>
            <Image
              source={{
                uri: 'https://media.istockphoto.com/photos/hamburger-table-scene-top-view-over-dark-wood-picture-id1252796974?k=20&m=1252796974&s=612x612&w=0&h=20lKFGeQledsZWbs584uXb7yadEkeSpfsVI2VGV3mTk=',
              }}
              style={{width: '90%', height: '100%', borderRadius: 5}}
            />
          </View>
        </Swiper>
      </View>

      <View style={{flex: 4, justifyContent: 'flex-end', marginBottom: 20}}>
        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Button
            title={'SIGN IN'}
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            style={styles.shadow}
            onPress={() => {
              console.log('heree');
              navigation.navigate('SignInScreen');
            }}
            // onClick={() => navigation.navigate("SignIn")}
          />
        </View>

        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Button
            title="Create an account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#97CAES',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#92BBD9',
  },
  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.buttons,
    height: 50,
    paddingHorizontal: 20,
  },
  createButtonTitle: {
    color: colors.buttons,
    fontSize: 20,
    fontWeight: '100',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
