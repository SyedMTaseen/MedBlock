import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => { this.props.navigation.navigate('PatientMain') }}
          style={{ width: "80%", height: 30, backgroundColor: "#089BAB", borderRadius: 60, alignItems: "center", justifyContent: 'center' }}>
          <Text style={{ fontSize: 14, color: "#fff", fontWeight: "bold" }}>Patient</Text>
        </TouchableOpacity>
        <View style={{ width: 10 }}></View>
        <TouchableOpacity
          onPress={() => { this.props.navigation.navigate('ProviderMain') }}
          style={{ width: "80%", height: 30, backgroundColor: "#089BAB", borderRadius: 60, alignItems: "center", justifyContent: 'center' }}>
          <Text style={{ fontSize: 14, color: "#fff", fontWeight: "bold" }}>Provider</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    flexDirection: 'row'
  },

})