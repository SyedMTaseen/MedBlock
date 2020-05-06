import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import MenuPatient from "../components/MenuPatient";
import InfoNotification from '../components/Patient/Info&Notification';
import DashboardCard from '../components/Patient/DashboardCard';
import Hospitals from "../components/Patient/Hospitals"
import MyReports from '../components/Patient/MyReports';
import Notification from '../components/Patient/Notification';
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PageState: 0,
      UserData: this.props.navigation.getParam('UserData', 'Something')
    }
  }

  // componentWillMount(){
  //   console.log(this.state.UserData)
  // }
  changePageState = (val) => {
    // if (this.state.PageState >= 3) {

    this.setState({ PageState: val})
    // }
    // else {
    //   this.setState({ PageState: ++this.state.PageState })
    // }
    //  console.log("done")
    // alert("fon")
  }
  logout = () => {
    this.props.navigation.navigate('Mainstak')
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Button title="" onPress={this.changePageState}></Button> */}
        <MenuPatient changePageState={this.changePageState}  logout={this.logout}></MenuPatient>



        {this.state.PageState == 0 ? <InfoNotification UserData={this.state.UserData}></InfoNotification> : null}
        {this.state.PageState == 0 ? <DashboardCard UserData={this.state.UserData}></DashboardCard> : null}
        {this.state.PageState == 1 ? <Hospitals UserData={this.state.UserData}></Hospitals> : null}
        {this.state.PageState == 2 ? <MyReports UserData={this.state.UserData}></MyReports> : null}
        {this.state.PageState == 3 ? <Notification UserData={this.state.UserData}></Notification> : null}
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

})