import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { MaterialIcons, FontAwesome,Ionicons  } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class MenuPatient extends Component {

  constructor(props) {
    super(props);
    this.state = {
         sel:0
    }
  }

  changepage=(val)=>{
      // alert("ss")
    this.props.changePageState(val)

  }
  logout=()=>{
    this.props.logout()
 //  this.props.navigation.navigate('Mainstak')
  }
  render() {
    return (
     
        <View style={styles.menuStyle}>
          <View></View>
          <View  >
            {/* <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=>this.changepage(0)}>
              <MaterialIcons name="dashboard" size={32} color="#FFF"></MaterialIcons>
              <Text style={{ fontSize: 12, color: '#fff' }}>Dashboard</Text>
            </TouchableOpacity> */}
            <View style={{ height: 20 }}></View>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=>this.changepage(1)}>
              <FontAwesome name="hospital-o" size={32} color="#FFF"></FontAwesome>
              <Text style={{ fontSize: 12, color: '#fff' }}>Hospital</Text>
            </TouchableOpacity>
            <View style={{ height: 20 }}></View>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=>this.changepage(2)}>
              <Ionicons  name="md-paper" size={32} color="#FFF"></Ionicons>
              <Text style={{ fontSize: 12, color: '#fff' }}>My Reports</Text>
            </TouchableOpacity>
            <View style={{ height: 20 }}></View>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=>this.changepage(3)}>
              <MaterialIcons name="notifications" size={32} color="#FFF"></MaterialIcons>
              <Text style={{ fontSize: 12, color: '#fff' }}>Notifications</Text>
            </TouchableOpacity>




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