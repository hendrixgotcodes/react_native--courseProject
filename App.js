import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Button, Alert, Platform, Dimensions } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './src/WelcomeScreen';

export default function App() {

  // console.log(useDimensions());
  console.log(useDeviceOrientation());
  console.log("***********************************************************************************");

  return (

      // <View style={styles.container}>
      //   {/* <Image source={require('./assets/adaptive-icon.png')}/> */}
        
      //   <TouchableNativeFeedback>
      //     <Image style={styles.image} source={{
      //       width: 200,
      //       height: 300,
      //       uri: "https://picsum.photos/200/300"}} 
      //     />
      //   </TouchableNativeFeedback>

      //   {/* <Text style={styles.button} >Hello React Native!</Text> */}

      //   <Button onPress= {handleBtnOnPress} title="Proceed" />

      // </View>

      <View style={styles.container}>

          <WelcomeScreen />

      </View>

      
   
  );
}

// const styles = StyleSheet.create({
//   mainView: {

//     backgroundColor: "dodgerblue", height: Dimensions.get("screen").height

//   },
//   container: {
//     // flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: Platform.OS === "android" && StatusBar.currentHeight,
//     backgroundColor: "#34eb95", height: Dimensions.get("screen").height
//   },
//   image:{
//     marginBottom: 10,
//     borderWidth: 5,
//     borderColor: '#fff',
//     borderRadius: 8
//   },
//   button:{
//     borderRadius: 25,
//     backgroundColor: '#fff',
//     padding: 16
//   }
// });

const styles = StyleSheet.create({

    container: {

        flex:1,
        justifyContent: 'center'

    }

})

const handleBtnOnPress = ()=>{

  Alert.alert("Title", "message", [

    {
      text: "Confirm",
      style: "default",
      onPress: ()=>{

        console.log("Confirm pressed");

      }
    },
    {
      text: "Reject",
      style: "cancel",
      onPress: ()=>{

        console.log("Reject pressed");

      }
    }
    

  ])
  

}
