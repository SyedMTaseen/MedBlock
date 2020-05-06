import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { MaterialIcons, FontAwesome,Ionicons  } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class MenuPatient extends Component {
  constructor(props) {
    super(props);
    this.state ={
      username:this.props.UserData[0]
    }
   
  }
  logout=()=>{
    this.props.logout()
 //  this.props.navigation.navigate('Mainstak')
  }
  render() {
    return (
     
        <View style={styles.menuStyle}>
          <View >

          </View>
          <View  >
   
          <Text style={{ fontSize: 12, color: '#fff' ,textAlign:'center' ,fontWeight:'900'}}>{this.state.username}</Text>
        



          </View>


          <TouchableOpacity style={{ alignItems: 'center' }} onPress={this.logout}>
            <MaterialIcons name="power-settings-new" size={32} color="#FFF"></MaterialIcons>
            <Text style={{ fontSize: 12, color: '#fff' }}>Logout</Text>
          </TouchableOpacity>


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
    flexDirection: 'column',
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
    height: '10%',
    width: '90%',
    backgroundColor: "#089BAB",
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  paddingHorizontal:'3%',
    flexDirection:'row',

  }


})