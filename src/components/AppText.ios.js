import React from 'react'
import { Platform, StyleSheet, Text } from 'react-native'

function AppText({children}) {
    return (
        <Text style ={styles.text}>
            {children}
        </Text>
    )
}



const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#919191",
        textTransform : "capitalize",
        textAlign: "center",
        fontFamily: "Avenir"
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
