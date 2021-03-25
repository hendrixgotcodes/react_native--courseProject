import React from 'react';
import {View, FlatList, SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import ListItem from './ListItem';

const messages = [
    {
        id: 1,
        name: "Samuel Opoku Asare",
        message: "Hi",
        image: require('../../assets/others/DP.jpg')
    },
    {
        id: 2,
        name: "Mosh Hamedani",
        message: "Hi",
        image: require('../../assets/others/mosh.jpg')
    }
]

export default function MessageScreen() {
    return (
        <SafeAreaView style={styles.container}>

            <FlatList data={messages} keyExtractor={message=>message.id.toString()}
                renderItem={({item})=> <ListItem title={item.name} subTitle={item.message} imgSrc={item.image} />}
              />
            
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({

    container:{
        marginTop: StatusBar.currentHeight
    }

})
