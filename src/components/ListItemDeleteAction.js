import React from 'react';
import { View, StyleSheet, Text } from "react-native";
import colors from '../config/colors';
import { Ionicons } from "@expo/vector-icons";

export default function ListItemDeleteAction() {

    return (
        <View style={styles.button}>
            <Ionicons size={24} color={colors.white} name="trash" />
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.danger, 
        justifyContent: "center", 
        borderRadius: 10,
        alignItems: 'center', 
        padding: 10,
        width: "20%"
    }
})