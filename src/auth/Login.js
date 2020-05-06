import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
export default class Login extends Component {



  constructor(props) {
    super(props);
    this.state = {
      showPassword: true,
      UserIs: true, // true is patient false is provider
      username: "",
      password: "",
    }
  }

  changeUser = () => {
    this.setState({ UserIs: !this.state.UserIs })

  }

  login = () => {


    if (this.state.UserIs) {
      var link = " http://192.168.32.134:3639/patient/login?username=" + this.state.username + "&password=" + this.state.password
      console.log(link)
      axios.get(link).then((result) => {
        console.log(result.data)
        var data = result.data.server_response

        if (data[0] == undefined) {
          alert("Invalid Login")
        } else {
          this.props.navigation.navigate('PatientMain', {
            UserData: data,
          });
        }

        // var data = { "0": "soman", "1": "42101", "2": "2nd sept 1996", "3": "baqai@baqai.com", "4": "0x064FD681DcE8A3EA2e821e3D2C9e85A04fe0ED71", "5": "0" }


      })

    } else {

      var link = "http://192.168.32.134:3639/provider/login?username=" + this.state.username + "&password=" + this.state.password
      console.log(link)
      axios.get(link).then((result) => {
        console.log(result.data)
        var data = result.data.server_response
        // var data = { "0": "south", "1": "south@south.com", "2": "lab", "3": "south@south.com", "4": "0x064FD681DcE8A3EA2e821e3D2C9e85A04fe0ED71", "5": "0" }
       
        if (data[0] == undefined) {
          alert("Invalid Login")
        } else {
          this.props.navigation.navigate('ProviderMain', {
            UserData: data,
          });
        }

      })

    }

  }


  render() {
    if (this.state.UserIs) {
      return (
        <View style={styles.container}>

          <View style={{ alignSelf: 'flex-start', paddingVertical: 22 }}>
            <Text style={{ fontSize: 21, color: "#089BAB", fontWeight: "bold" }}>SignIn</Text>
            <Text style={{ fontSize: 16, color: "#c3c3c3", fontWeight: "600" }}>Welcome Patient</Text>
          </View>

          <View style={{ width: '100%', paddingVertical: 10 }}>
            <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>User CNIC</Text>
            <View style={{ height: 5 }}></View>
            <View style={{ width: '100%', height: 30, backgroundColor: '#E7F1F1', borderColor: "#c3c3c3", borderWidth: 1, paddingHorizontal: '2%', justifyContent: 'center', borderRadius: 60 }}>
              <TextInput
                ref="textInputMobile"
                style={{ fontSize: 15, color: '#000', width: '100%', borderRadius: 60 }}
                placeholder='CNIC'
                placeholderTextColor='#777'
                autoCapitalize='none'
                onChangeText={(username) => { this.setState({ username }); }}//email set
              />
            </View>
          </View>
          <View style={{ width: '100%', paddingVertical: 10 }}>
            <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>Password</Text>
            <View style={{ height: 5 }}></View>
            <View style={{ width: '100%', height: 30, backgroundColor: '#E7F1F1', borderColor: "#c3c3c3", borderWidth: 1, paddingHorizontal: '2%', justifyContent: 'center', borderRadius: 60 }}>
              <TextInput
                ref="textInputMobile"
                style={{ fontSize: 15, color: '#000', width: '100%', borderRadius: 60 }}
                placeholder='Password'
                placeholderTextColor='#777'
                secureTextEntry={this.state.showPassword}
                autoCapitalize='none'
                onChangeText={(password) => { this.setState({ password }); }}//email set
              />
            </View>
          </View>


          <View style={{ paddingVertical: 22 }}>
            <TouchableOpacity
              onPress={() => { this.login() }}
              style={{ width: "100%", height: 30, backgroundColor: "#089BAB", borderRadius: 60, alignItems: "center", justifyContent: 'center' }}>
              <Text style={{ fontSize: 14, color: "#fff", fontWeight: "bold" }}>Sign In</Text>
            </TouchableOpacity>

          </View>

          <View style={{ paddingVertical: 10, flexDirection: 'row' }}>
            <Text style={{ fontSize: 16, color: "#c3c3c3", fontWeight: "600" }}>Dont have a account </Text>
            <TouchableOpacity
              onPress={() => { this.props.navigation.navigate('Signup') }}>
              <Text style={{ fontSize: 16, color: "#089BAB", fontWeight: "bold" }}>Sign Up</Text>
            </TouchableOpacity>

          </View>
          <View style={{ paddingVertical: 10, width: "100%", borderBottomColor: '#c3c3c3', borderBottomWidth: 1 }}></View>


          <View style={{ paddingVertical: 10, flexDirection: 'row', alignSelf: 'center' }}>
            <Text style={{ fontSize: 16, color: "#c3c3c3", fontWeight: "600" }}>Login as </Text>
            <TouchableOpacity
              onPress={() => this.changeUser()}>
              <Text style={{ fontSize: 16, color: "#089BAB", fontWeight: "bold" }}> provider</Text>
            </TouchableOpacity>

          </View>
          {/* <TouchableOpacity
            onPress={() => { this.props.navigation.navigate('PatientMain') }}
            style={{ width: "80%", height: 30, backgroundColor: "#089BAB", borderRadius: 60, alignItems: "center", justifyContent: 'center' }}>
            <Text style={{ fontSize: 14, color: "#fff", fontWeight: "bold" }}>Patient</Text>
          </TouchableOpacity>
          <View style={{ width: 10 }}></View>
          <TouchableOpacity
            onPress={() => { this.props.navigation.navigate('ProviderMain') }}
            style={{ width: "80%", height: 30, backgroundColor: "#089BAB", borderRadius: 60, alignItems: "center", justifyContent: 'center' }}>
            <Text style={{ fontSize: 14, color: "#fff", fontWeight: "bold" }}>Provider</Text>
          </TouchableOpacity> */}
        </View>
      );
    }
    else {

      return (
        <View style={styles.container}>

          <View style={{ alignSelf: 'flex-start', paddingVertical: 22 }}>
            <Text style={{ fontSize: 21, color: "#089BAB", fontWeight: "bold" }}>SignIn</Text>
            <Text style={{ fontSize: 16, color: "#c3c3c3", fontWeight: "600" }}>Welcome Provider</Text>
          </View>

          <View style={{ width: '100%', paddingVertical: 10 }}>
            <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>User CNIC</Text>
            <View style={{ height: 5 }}></View>
            <View style={{ width: '100%', height: 30, backgroundColor: '#E7F1F1', borderColor: "#c3c3c3", borderWidth: 1, paddingHorizontal: '2%', justifyContent: 'center', borderRadius: 60 }}>
              <TextInput
                ref="textInputMobile"
                style={{ fontSize: 15, color: '#000', width: '100%', borderRadius: 60 }}
                placeholder='CNIC'
                placeholderTextColor='#777'
                autoCapitalize='none'
                onChangeText={(password) => { this.setState({ password }); }}//email set
              />
            </View>
          </View>
          <View style={{ width: '100%', paddingVertical: 10 }}>
            <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>Password</Text>
            <View style={{ height: 5 }}></View>
            <View style={{ width: '100%', height: 30, backgroundColor: '#E7F1F1', borderColor: "#c3c3c3", borderWidth: 1, paddingHorizontal: '2%', justifyContent: 'center', borderRadius: 60 }}>
              <TextInput
                ref="textInputMobile"
                style={{ fontSize: 15, color: '#000', width: '100%', borderRadius: 60 }}
                placeholder='Password'
                placeholderTextColor='#777'
                secureTextEntry={this.state.showPassword}
                autoCapitalize='none'
                onChangeText={(password) => { this.setState({ password }); }}//email set
              />
            </View>
          </View>


          <View style={{ paddingVertical: 22 }}>
            <TouchableOpacity
              onPress={() => { this.login() }}
              style={{ width: "100%", height: 30, backgroundColor: "#089BAB", borderRadius: 60, alignItems: "center", justifyContent: 'center' }}>
              <Text style={{ fontSize: 14, color: "#fff", fontWeight: "bold" }}>Sign In</Text>
            </TouchableOpacity>

          </View>

          <View style={{ paddingVertical: 10, flexDirection: 'row' }}>
            <Text style={{ fontSize: 16, color: "#c3c3c3", fontWeight: "600" }}>Dont have a account </Text>
            <TouchableOpacity
              onPress={() => { this.props.navigation.navigate('Signup') }}>
              <Text style={{ fontSize: 16, color: "#089BAB", fontWeight: "bold" }}>Sign Up</Text>
            </TouchableOpacity>

          </View>
          <View style={{ paddingVertical: 10, width: "100%", borderBottomColor: '#c3c3c3', borderBottomWidth: 1 }}></View>


          <View style={{ paddingVertical: 10, flexDirection: 'row', alignSelf: 'center' }}>
            <Text style={{ fontSize: 16, color: "#c3c3c3", fontWeight: "600" }}>Login as </Text>
            <TouchableOpacity
              onPress={() => this.changeUser()}>
              <Text style={{ fontSize: 16, color: "#089BAB", fontWeight: "bold" }}> Patient</Text>
            </TouchableOpacity>

          </View>
          {/* <TouchableOpacity
            onPress={() => { this.props.navigation.navigate('PatientMain') }}
            style={{ width: "80%", height: 30, backgroundColor: "#089BAB", borderRadius: 60, alignItems: "center", justifyContent: 'center' }}>
            <Text style={{ fontSize: 14, color: "#fff", fontWeight: "bold" }}>Patient</Text>
          </TouchableOpacity>
          <View style={{ width: 10 }}></View>
          <TouchableOpacity
            onPress={() => { this.props.navigation.navigate('ProviderMain') }}
            style={{ width: "80%", height: 30, backgroundColor: "#089BAB", borderRadius: 60, alignItems: "center", justifyContent: 'center' }}>
            <Text style={{ fontSize: 14, color: "#fff", fontWeight: "bold" }}>Provider</Text>
          </TouchableOpacity> */}
        </View>
      );
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,

    // flexDirection: 'row'
  },

})