import React from 'react'
import { ImageBackground, StyleSheet, View, Text, Dimensions, Image } from 'react-native'
import {Ionicons} from '@expo/vector-icons';

import colors from '../config/colors'
import Button from './Button';
import AppText from './AppText.android';


export default function WelcomeScreen(){

    console.log("they exist");

    return(

        <ImageBackground style={style.backgroundImage} source={require('../../assets/WelcomeScreen/background.jpg')}>

            <View style={style.logoContainer} >

                <Image style={style.logo} source={require('../../assets/WelcomeScreen/logo-red.png')} />
                {/* <Text style={style.logoMotto}>Sell what you dont need</Text> */}
                <AppText>
                    Sell what you dont need
                </AppText>

            </View>

            <View style={style.btnContainer}>
                    {/* <View style={style.btn1} /> */}
                    <Button text="Login" type="primary" >
                        <Ionicons name="key-outline" size={18} color="#fff" />
                    </Button>
                    <Button text="Register" type="Secondary">
                        <Ionicons name="pencil-outline" size={18} color="#fff" />
                    </Button>
            </View>

        </ImageBackground>

    )

}

const style = StyleSheet.create({

    backgroundImage: {
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
        
    },
    logoContainer: {

        position: 'absolute',
        top: '10%',
        // right: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    logo:{

        width: 80,
        height: 80

    },
    logoMotto:{
        textTransform: 'capitalize',
        marginTop:10
    },
    btnContainer:{

        width: "100%",
        height: "18%",
        alignSelf: 'flex-end',
        justifyContent: 'space-between',
        padding: 15

    },
    btn1: {
        flex:1,
        backgroundColor: colors.secondary
    },
    btn2: {
        flex:1,
        backgroundColor: colors.primary,
    }

})