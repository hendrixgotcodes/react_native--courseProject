import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {

  let x = 1;

  return (
    <SafeAreaView style={styles.container}>
      {/* <Image source={require('./assets/adaptive-icon.png')}/> */}
      <Image style={styles.image} source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300"}} />
      <Text style={styles.button} >Hello React Native!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4287f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    marginBottom: 10,
    borderWidth: 5,
    borderColor: '#fff',
    borderRadius: 8
  },
  button:{
    borderRadius: 25,
    backgroundColor: '#fff',
    padding: 16
  }
});
