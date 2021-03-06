import React from 'react';
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText.android';

import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function ListItem({imgSrc, title, subTitle, onPress, rightAction}) {
    return (
        <Swipeable renderRightActions={rightAction}>
            <TouchableHighlight underlayColor={colors.white}onPress={onPress}>
                <View style={styles.container}>

                    <Image style={styles.img} source={imgSrc} />
                    <View style={styles.textContainer}>
                        <AppText extraStyle={styles.title}>{title}</AppText>
                        <AppText extraStyle={styles.subTitle}>{subTitle}</AppText>
                    </View>

                </View>
            </TouchableHighlight>
        </Swipeable>
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
        borderRadius: 5,
        borderBottomWidth: 5
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