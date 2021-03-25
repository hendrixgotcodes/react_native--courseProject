import React from 'react'
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText.android';

export default function ListingDetailsScreen({imgSrc, title, subTitle, optionalComponent=""}) {

    return (
        <SafeAreaView>

            <Image style={styles.image} source={imgSrc} />
            <View style={styles.textContainer}>
                <AppText extraStyle={styles.title}>{title}</AppText>
                <AppText extraStyle={styles.subTitle}>{subTitle}</AppText>
            </View>

            <View style={styles.optionalComponentContainer}>
                {optionalComponent !== "" && optionalComponent }
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    image:{
        width: '100%',
        height: '60%'
    },
    textContainer: {
        width: "100%",
        padding: 10,
        borderBottomWidth: .8,
        borderBottomColor: colors.primary
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
