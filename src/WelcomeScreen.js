import React from 'react'
import { ImageBackground, StyleSheet, View, Text, Dimensions, Image } from 'react-native'
import colors from './config/colors'

export default function WelcomeScreen(){

    return(

        <ImageBackground style={style.backgroundImage} source={require('../assets/WelcomeScreen/background.jpg')}>

            <View style={style.logoContainer} >

                <Image style={style.logo} source={require('../assets/WelcomeScreen/logo-red.png')} />
                <Text style={style.logoMotto}>Sell what you dont need</Text>

            </View>

            <View style={style.btnContainer}>
                    <View style={style.btn1} />
                    <View style={style.btn2} />
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
        height: "15%",
        alignSelf: 'flex-end'

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