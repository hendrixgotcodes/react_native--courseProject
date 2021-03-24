import React from 'react'
import { Platform, StyleSheet, Text } from 'react-native'
import colors from '../config/colors'

function AppText({children, extraStyle={}}) {
    return (
        <Text style ={[styles.appText, extraStyle]}>
            {children}
        </Text>
    )
}



const styles = StyleSheet.create({
    appText: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.black,
        textTransform : "capitalize",
        textAlign: "center",
        fontFamily: "Roboto"
        // ...Platform.select({
        //     ios: {
        //         fontFamily: "Avenir"
        //     },
        //     android: {
        //         fontFamily: "Roboto"
        //     }
        // })
    }
})

export default AppText
