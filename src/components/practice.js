import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
// import AppText from './AppText';

export default function Practice() {

    return (

        <View style={styles.container}>


            {/* <View style={styles.object}>

                <View style={styles.objectChild}>

                </View>

            </View>
            <View style={styles.object1} ></View> */}

            {/* <Text style={styles.text}>
                I love react app
                loremProident consectetur proident ea veniam anim aliquip fugiat anim ea consectetur minim ullamco et. Lorem Lorem do enim aliquip ullamco consequat. Officia amet ex quis commodo nulla ullamco ex aliquip et ipsum ullamco laboris.
            </Text> */}
            <AppText>I love react app. But i want to right more text. so here goes more text. oh and more text. please allow me to add more and more text. thank you</AppText>


        </View>
        
    )
}

const styles = StyleSheet.create({

    container:{

        flex:1,
        justifyContent: "center",
        alignItems: "center"

    },
    // object: {

    //     backgroundColor: "dodgerblue",
    //     width: 100,
    //     height: 100,
    //     shadowColor: 'grey',
    //     borderColor: 'royalblue',
    //     borderWidth: 10,
    //     borderRadius: 50,
    //     borderTopColor: "gold",
    //     shadowOpacity: 1,
    //     shadowOffset: {width: 10, height: 10},
    //     elevation: 40,
    //     padding: 15,

    // },
    // objectChild:{

    //     width:50,
    //     height: 50,
    //     backgroundColor: "white",
    //     elevation: 20,
    //     borderRadius: 25

    // },
    // object1: {

    //     backgroundColor: "orange",
    //     marginTop: 10,
    //     width: 100,
    //     height: 100,
    //     borderRadius: 50

    // },
    text: {
        fontSize: 30,
        fontStyle: "italic",
        fontWeight: "bold",
        color: "tomato",
        textTransform : "capitalize",
        textAlign: "center"
    }

})