import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import MenuPatient from "../components/MenuPatient";
import InfoNotification from '../components/Patient/Info&Notification';
import DashboardCard from '../components/Patient/DashboardCard';
import Hospitals from "../components/Patient/Hospitals"
export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MenuPatient></MenuPatient>


{/* 
        <InfoNotification></InfoNotification>
        <DashboardCard></DashboardCard> */}
        <Hospitals></Hospitals>
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