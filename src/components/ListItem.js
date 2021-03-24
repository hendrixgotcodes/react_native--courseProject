import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AppText from './AppText.android';

export default function ListItem({imgSrc, title, subTitle}) {
    return (
        <View style={styles.container}>

            <Image style={styles.img} source={imgSrc} />
            <View style={styles.textContainer}>
                <AppText extraStyle={styles.title}>{title}</AppText>
                <AppText extraStyle={styles.subTitle}>{subTitle}</AppText>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },
    img:{
        width: 70,
        height: 70,
        borderRadius: 70
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