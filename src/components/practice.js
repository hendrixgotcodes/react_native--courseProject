import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function Practice() {

    return (

        <View style={styles.container}>

            <View style={styles.object}>

                <View style={styles.objectChild}>

                </View>

            </View>
            <View style={styles.object1} ></View>

        </View>
        
    )
}

const styles = StyleSheet.create({

    container:{

        flex:1,
        justifyContent: "center",
        alignItems: "center"

    },
    object: {

        backgroundColor: "dodgerblue",
        width: 100,
        height: 100,
        shadowColor: 'grey',
        borderColor: 'royalblue',
        borderWidth: 10,
        borderRadius: 50,
        borderTopColor: "gold",
        shadowOpacity: 1,
        shadowOffset: {width: 10, height: 10},
        elevation: 40,
        padding: 15,

    },
    objectChild:{

        width:50,
        height: 50,
        backgroundColor: "white",
        elevation: 20,
        borderRadius: 25

    },
    object1: {

        backgroundColor: "orange",
        marginTop: 10,
        width: 100,
        height: 100,
        borderRadius: 50

    }

})