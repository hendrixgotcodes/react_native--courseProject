import React from 'react'
import {Image, StyleSheet, View} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText.android';

export default function ListingDetailsScreen({imgSrc, title, subTitle, optionalComponent=""}) {

    return (
        <View>

            <Image style={styles.image} source={imgSrc} />
            <View style={styles.textContainer}>
                <AppText extraStyle={styles.primaryText}>{title}</AppText>
                <AppText extraStyle={styles.secondaryText}>{subTitle}</AppText>
            </View>

            {optionalComponent !== "" && <optionalComponent /> }
            
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
    primaryText: {
        textAlign: 'left',
        fontSize: 20,
        marginBottom: 8,
    },
    secondaryText: {
        color: colors.secondary,
        textAlign: 'left'
    }

})
