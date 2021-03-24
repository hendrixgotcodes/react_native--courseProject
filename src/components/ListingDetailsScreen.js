import React from 'react'
import {Image, StyleSheet, View} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText.android';

export default function ListingDetailsScreen({imgSrc, title, subTitle, optionalComponent=""}) {

    return (
        <View>

            <Image style={styles.image} source={imgSrc} />
            <View style={styles.textContainer}>
                <AppText extraStyle={styles.title}>{title}</AppText>
                <AppText extraStyle={styles.subTitle}>{subTitle}</AppText>
            </View>

            <View style={styles.optionalComponentContainer}>
                {optionalComponent !== "" && optionalComponent }
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({

    image:{
        width: '100%',
        height: '60%'
    },
    textContainer: {
        width: "100%",
        padding: 10
    },
    title: {
        textAlign: 'left',
        fontSize: 24,
        marginBottom: 8,
    },
    subTitle: {
        color: colors.secondary,
        textAlign: 'left'
    },
    optionalComponentContainer:{
        width: '100%',
        paddingHorizontal: 10,
        marginTop: 20
    }

})
