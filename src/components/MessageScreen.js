import React from 'react';
import {View, FlatList} from 'react-native';

import ListItem from './ListItem';
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
        <Screen>

            <FlatList data={messages} keyExtractor={message=>message.id.toString()}
                renderItem={({item})=> <ListItem title={item.name} subTitle={item.message} imgSrc={item.image} />}
              />
            
        </Screen>
    )
}
