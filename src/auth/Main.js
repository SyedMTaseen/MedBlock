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
    }
  }
  changePageState = () => {
    if (this.state.PageState >= 3) {
      this.setState({ PageState: 0 })
    }
    else {
      this.setState({ PageState: ++this.state.PageState })
    }
  }
  render() {
    return (
      <View style={styles.container}>
      <Button title="" onPress={this.changePageState}></Button>
          <MenuPatient></MenuPatient>
           


        {this.state.PageState == 0 ? <InfoNotification></InfoNotification> : null}
        {this.state.PageState == 0 ? <DashboardCard></DashboardCard> : null}
        {this.state.PageState == 1 ? <Hospitals></Hospitals> : null}
        {this.state.PageState == 2 ? <MyReports></MyReports> : null}
        {this.state.PageState == 3 ? <Notification></Notification> : null}
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