import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import colors from '../config/colors';

export default function Card({image, title, subTitle}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.cardDetail}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({

    card:{
        width: "100%",
        height: "30%",
        display: "flex",
        borderRadius: 10,
        backgroundColor: colors.white,
        elevation: 5,
        marginBottom: 30
    },
    image:{
        width: "100%",
        height: "70%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    cardDetail:{
        width: "100%",
        height: "30%",
        padding: 10,
        display: "flex",
        justifyContent: "space-between"
    },
    title: {
        color: colors.black,
        fontSize: 18
    },
    subTitle: {
        color: colors.secondary,
        fontSize: 18
    }

})