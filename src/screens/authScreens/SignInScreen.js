import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import React, {useState, useRef} from 'react'
import Header from '../../component/Header'
import {colors, parameters, title} from '../../global/style'
import *as Animatable from 'react-native-animatable'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { SocialIcon, Button } from '@rneui/themed'

const SignInScreen = ({navigation}) => {
    const [textInput2Focused, setTextInput2Focused] = useState(false)

    const TextInput1 = useRef()
    const TextInput2 = useRef()
  return (
    <View style={styles.container}>
        <Header title={'MY ACCOUNT'} type='arrow-left' navigation={navigation} />

        <View style={{marginLeft: 20, marginTop: 10}}>
            <Text style={title}>Sign-In</Text>
        </View>

        <View style={{alignItems: 'center', marginTop: 10}}>
            <Text style={styles.txt1}>Please enter the email and password</Text>
            <Text style={styles.txt1}>Registered with your account</Text>
        </View>

        <View style={{marginTop: 20,}}>
            <View>
                <TextInput
                    style={styles.textInput}
                    placeholder={"Email"}
                    ref = {TextInput1}
                />
            </View>

            <View style={styles.textInput2}>

                <Animatable.View animation={textInput2Focused?"": "fadeInLeft"} duration={400}>

                    <MaterialIcons   
                        name='lock'
                        style={{color: colors.grey3}}
                        size={20}
                    />

                </Animatable.View>

                <TextInput
                    style={{width: '80%'}}
                    placeholder={"Password"}
                    ref = {TextInput2}
                    onFocus={()=>{
                        setTextInput2Focused(false)
                    }}

                    onBlur={()=>{
                        setTextInput2Focused(true)
                    }}
                />

                <Animatable.View animation={textInput2Focused?"": "fadeInLeft"} duration={400}>

                    <MaterialIcons 
                        name='visibility-off'
                        style={{color: colors.grey3, marginRight: 10}}
                        size={20}
                    />

                </Animatable.View>

            </View>

            <TouchableOpacity onPress={()=> navigation.navigate('DrawerNavigation')} style={{marginHorizontal: 20,...styles.btnContainer}} activeOpacity={0.7}>
                <Text style={styles.btnTitle}>SIGN IN</Text>
            </TouchableOpacity>

            <View style={{alignItems: 'center',  marginTop: 20}}>
                <Text style={{...styles.txt1, textDecorationLine: 'underline'}}>
                    Forgot Passwords
                </Text>
            </View>

            <View style={{alignItems:'center', marginTop: 30, marginBottom: 20}}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>OR</Text>
            </View>

            <View style={{paddingHorizontal: 20, marginTop: 10}}>
                <SocialIcon
                    title='Sign In with Facebook'
                    button
                    type='facebook'
                    style={parameters.SocialIcon}
                />
            </View>

            <View style={{paddingHorizontal: 20, marginTop: 10}}>
                <SocialIcon
                    title='Sign In with Google'
                    button
                    type='google'
                    style={parameters.SocialIcon}
                />
            </View>

            <View style={{marginTop: 25, marginLeft: 20}}>
                <Text style={{...styles.txt1,}}>
                    New on xpressfood?
                </Text>
            </View>

            <View style={{alignSelf: 'flex-end',marginRight: 20,  marginTop: 20}}>
                <Button
                    title="Create an account"
                    buttonStyle={styles.createButton}
                    titleStyle={styles.createButtonTitle}
                />
            </View>

        </View>


    </View>
  )
}

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    txt1:{
        color: colors.grey3,
        fontSize: 16
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#86939e',
        marginHorizontal: 20,
        borderRadius:12,
        marginBottom: 20,
        paddingLeft: 15
    },
    textInput2: {
        borderWidth: 1,
        borderRadius:12,
        marginHorizontal: 20,
        borderColor: '#86939e',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft: 15
    },
    btnContainer: {
        backgroundColor: '#ff8c52',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ff8c52',
        height: 50,
        paddingHorizontal: 20,
        marginTop: 20
    },
    btnTitle:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: -3,
    },
    createButton: {
        backgroundColor: 'white',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ff8c52',
        height: 40,
        paddingHorizontal: 20
    },
    createButtonTitle: {
        color: '#ff8c52',
        fontSize: 16,
        fontWeight: 'bold',
        alignItems:'center',
        justifyContent: 'center',
        marginTop: -3
    }
})