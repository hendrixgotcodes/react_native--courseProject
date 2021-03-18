import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Button, Alert, Platform, Dimensions } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './src/WelcomeScreen';
import ViewImageScreen from './src/components/ViewImageScreen';
import Practice from './src/components/practice';

import {MaterialCommunityIcons, FontAwesome} from '@expo/vector-icons'
import AppText from './src/components/AppText';

export default function App() {

 
  return (

      // <ViewImageScreen />
      // <Practice />
      <View style={styles.container}>

          <MaterialCommunityIcons name="react" size={100} color="dodgerblue"/>
          <AppText>
            I <FontAwesome name="heart" size={18} color="dodgerblue" /> react native!
          </AppText>


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
        justifyContent: 'center',
        alignItems: "center"

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
