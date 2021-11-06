import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
      <View style={styles.container}>
          <Text style={styles.Headercontent}>Todo-App</Text>
        
      </View>
    );
  }
  const styles=StyleSheet.create({
      container:{
          backgroundColor:"orange",
          height:60,
          justifyContent:"center",
          alignItems:"center"
      },
      Headercontent:{
          fontWeight:"bold",
          fontSize:20,
          color:"#ffff"
      }

  })