import React from 'react';
import {View, Image, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';

export default function ViewImageScreen(){

    return(

        <View style={styles.container}>

            <View style={styles.btnContainer}>

                {/* <View style={styles.btn1} /> */}
                <MaterialCommunityIcons name="close" size={28} color={colors.white} />
                <MaterialCommunityIcons name="trash-can-outline" size={28} color={colors.white} />

            </View>

            <Image style={styles.image} source={require('../../assets/WelcomeScreen/chair.jpg')} />

        </View>

    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.black,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {

        width: '100%',
        height: '60%',
        resizeMode: 'contain'

    },
    btnContainer: {

        position: 'absolute',
        top: 10,
        width: "90%",
        justifyContent: "space-between",
        height: '5%',
        flexDirection: "row",
        marginTop: 40

    },
    btn1:{
        backgroundColor: colors.primary,
        width: "15%",
        height: "100%",
    },
    btn2:{
        backgroundColor: colors.secondary,
        width: "15%",
        height: "100%"
    }

})