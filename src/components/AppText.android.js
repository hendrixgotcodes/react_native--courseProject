import React from 'react'
import { Platform, StyleSheet, Text } from 'react-native'

function AppText({children}) {
    return (
        <Text style ={styles.btn}>
            {children}
        </Text>
    )
}



const styles = StyleSheet.create({
    btn: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#919191",
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
