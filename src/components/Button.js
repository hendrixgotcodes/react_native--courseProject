import React from 'react';
import {StyleSheet, Text, View} from  'react-native';
import colors from '../config/colors';

export default function Button({text, children, type}) {

    console.log("true");

    let btnType;

    if(type !== null || type !== undefined){

        btnType = type;

    }

    const btnStyle = btnType === "primary" ? styles.primary : styles.secondary;



    return (
        <View style={[styles.default, btnStyle]}>
            <Text style={styles.text}>{text}</Text>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({

    default:{

        width: "100%",
        height: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 40,
        color: colors.white,
        padding: 25,
        fontSize: 18,
        textTransform: 'uppercase',
        flexDirection: 'row'

    },
    primary:{
        backgroundColor: colors.primary
    },
    secondary:{
        backgroundColor: colors.secondary
    },
    text: {
        color: colors.white,
        textTransform: 'uppercase',
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 5
    }

})