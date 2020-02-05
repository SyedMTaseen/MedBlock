import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardView}>


        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:"100%",
    width:"100%",
    backgroundColor: "#E7F1F1",
    alignItems: 'center',
    justifyContent:'center'


  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  cardView:{
    shadowColor: 'rgba(0,0,0, .2)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS 
    elevation: 3, // Android
    backgroundColor:"#fff",
   height:"90%",
   width:"90%",
   flexDirection:'row',
   alignItems:'center',
   justifyContent:''
  }
})