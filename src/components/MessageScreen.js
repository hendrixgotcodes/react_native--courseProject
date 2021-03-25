import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import ListItem from './ListItem';
import ListItemSeperator from './ListItemSeperator';
import Screen from './Screen';

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
        <Screen extraStyles={styles.container}>

            <FlatList data={messages} keyExtractor={message=>message.id.toString()}
                renderItem={({item})=> <ListItem title={item.name} subTitle={item.message} imgSrc={item.image} onPress={()=>{console.log(item);}} />}
                ItemSeparatorComponent={ListItemSeperator}
              />
            
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15
    }
})
