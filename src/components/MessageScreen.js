import React, { useState } from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';

import ListItem from './ListItem';
import ListItemDeleteAction from './ListItemDeleteAction';
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
    }, {
        id: 3,
        name: "Samuel Opoku Asare",
        message: "Hi",
        image: require('../../assets/others/DP.jpg')
    },
    {
        id: 4,
        name: "Mosh Hamedani",
        message: "Hi",
        image: require('../../assets/others/mosh.jpg')
    }, {
        id: 5,
        name: "Samuel Opoku Asare",
        message: "Hi",
        image: require('../../assets/others/DP.jpg')
    },
    {
        id: 6,
        name: "Mosh Hamedani",
        message: "Hi",
        image: require('../../assets/others/mosh.jpg')
    }
]


export default function MessageScreen() {

    const [allMessages, setMessages] = useState(messages)

    const onPressHandler = (item)=>{

        const newMessages = allMessages.filter(m=> m.id !== item.id)
        setMessages(newMessages)

    }


    return (
        <Screen extraStyles={styles.container}>

            <FlatList data={allMessages} keyExtractor={allMessages=>allMessages.id.toString()}
                renderItem={
                    ({item})=> (
                        <ListItem title={item.name} subTitle={item.message} imgSrc={item.image}
                            onPress={()=>{console.log(item)}} 
                            rightAction={()=><ListItemDeleteAction onPress={()=>{onPressHandler(item)}} />}
                         />
                    )
                }
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
