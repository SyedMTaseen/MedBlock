import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

export default class PatientInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
       username:this.props.UserData[0],
       dateofBirth:this.props.UserData[2],
    }

}

  componentWillMount(){
    console.log(this.props.UserData[0])
  }
  render() {
    return (
  
  

          <View style={{
            width: '90%', height: '30%', shadowColor: 'rgba(0,0,0, .2)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS 
            elevation: 3, // Android
            backgroundColor: '#fff',
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center'
          }}>

            <Text style={{ color: '#000', fontSize: 16, fontWeight: '600' }} >{this.state.username}</Text>
            <Text style={{ color: '#7777', fontSize: 14, fontWeight: '400' }} >Karachi Pakistan</Text>
            <View style={{ height: '20%' }}></View>
            <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flexDirection: 'column', }}>
                <Text style={{ color: '#089BAB', fontSize: 12, fontWeight: '600' }} >Birth</Text>
                <Text style={{ color: '#000', fontSize: 12, fontWeight: '400' }} >{this.state.dateofBirth}</Text>
              </View>
              <View style={{ flexDirection: 'column', }}>
                <Text style={{ color: '#089BAB', fontSize: 12, fontWeight: '600' }} >Height</Text>
                <Text style={{ color: '#000', fontSize: 12, fontWeight: '400' }} >5 11’’</Text>
              </View>
              <View style={{ flexDirection: 'column', }}>
                <Text style={{ color: '#089BAB', fontSize: 12, fontWeight: '600' }} >Weight</Text>
                <Text style={{ color: '#000', fontSize: 12, fontWeight: '400' }} >64kg</Text>
              </View>

            </View>

          </View>
          
       

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#E7F1F1",
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: "1%",

  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  cardView: {
    shadowColor: 'rgba(0,0,0, .2)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS 
    elevation: 3, // Android
    backgroundColor: "#fff",
    height: "90%",
    width: "90%",
    flexDirection: 'row',
    alignItems: 'center',

  },
  menuStyle: {
    height: '90%',
    width: '10%',
    backgroundColor: "#089BAB",
    borderTopLeftRadius: 80,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '3%'

  }


})