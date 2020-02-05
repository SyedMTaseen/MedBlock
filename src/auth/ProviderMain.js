import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import MenuProvider from "../components/MenuProvider"
import PatientList from '../components/Provider/PatientList';
import PatientReports from "../components/Provider/PatientReports"
import AddReport from "../components/Provider/AddReport"
export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MenuProvider></MenuProvider>
        {/* <PatientList></PatientList> */}
        {/* <PatientReports></PatientReports> */}
        <AddReport></AddReport>


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
    paddingVertical:'1%'

  },

})