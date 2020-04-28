import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import MenuProvider from "../components/MenuProvider"
import PatientList from '../components/Provider/PatientList';
import PatientReports from "../components/Provider/PatientReports"
import AddReport from "../components/Provider/AddReport"
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PageState: 0,
    }
  }
  changePageState = (val) => {
    // if (this.state.PageState >= 3) {

    this.setState({ PageState: val })
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
        <MenuProvider logout={this.logout}></MenuProvider>
        {this.state.PageState == 0 ? <PatientList changePageState={this.changePageState}></PatientList> : null}
        {this.state.PageState == 1 ? <PatientReports changePageState={this.changePageState}></PatientReports> : null}
        {this.state.PageState == 2 ? <AddReport changePageState={this.changePageState}></AddReport> : null}


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
    paddingVertical: '1%'

  },

})