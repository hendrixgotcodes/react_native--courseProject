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
        fontStyle: "italic",
        fontWeight: "bold",
        color: "tomato",
        textTransform : "capitalize",
        textAlign: "center"
    }
})

export default AppText
