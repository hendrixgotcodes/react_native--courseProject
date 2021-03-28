import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import colors from '../config/colors';
import { Ionicons } from "@expo/vector-icons";

export default function ListItemDeleteAction({onPress}) {

    return (
        <TouchableWithoutFeedback onPress={onPress} style={styles.container}>
            <View style={styles.button}>
                <Ionicons size={24} color={colors.white} name="trash" />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
    },
    button:{
        backgroundColor: colors.danger, 
        justifyContent: "center", 
        borderRadius: 10,
        alignItems: 'center', 
        padding: 10,
        width: "20%"
    }
})