import React from 'react';
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText.android';

export default function ListItem({imgSrc, title, subTitle, onPress}) {
    return (
        <TouchableHighlight underlayColor={colors.white}onPress={onPress}>
            <View style={styles.container}>

                <Image style={styles.img} source={imgSrc} />
                <View style={styles.textContainer}>
                    <AppText extraStyle={styles.title}>{title}</AppText>
                    <AppText extraStyle={styles.subTitle}>{subTitle}</AppText>
                </View>

            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        paddingBottom: 15
    },
    img:{
        width: 50,
        height: 50,
        borderRadius: 50
    },
    textContainer: {

        paddingHorizontal: 10

    },
    title:{
        fontSize: 18,
        textAlign: 'left'
    },
    subTitle: {
        fontSize: 15,
        textAlign: 'left',
        color: '#616161',
        fontWeight: 'normal'
    }

})