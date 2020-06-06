import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

import axios from 'axios';
export default class SignUp extends Component {


  constructor(props) {
    super(props);
    this.state = {
      showPassword: true,
      UserIs: true, // true is patient false is provider
      username:"",
      address:"",
      city:"",
      country:"",
      weight:"",
      height:"",
      cnic:"",
      dateOfBirth:"",
      email:"",
      password:"",
      prov_address:"",
      prov_type:"",

    }
  }

  changeUser = () => {
    this.setState({ UserIs: !this.state.UserIs })

  }

  SignUp=()=>{
    if (this.state.UserIs) {
      var  link = "http://18.234.214.14:3639/patient/signup?fname="+this.state.username+"&pat_address="+this.state.address+"&city="+this.state.city+"&country="+this.state.country+"&weight="+this.state.weight+"&height="+this.state.height+"&cnic="+this.state.cnic+"&dob="+this.state.dateOfBirth+"&email="+this.state.email+"&password="+this.state.password
      console.log(link)
      axios.get(link).then((result) => {
        console.log(result.data)
        this.props.navigation.navigate('Mainstak') 
    
      })

    } else {

      var  link = "http://18.234.214.14:3639/provider/signup?fname="+this.state.username+"&prov_address="+this.state.prov_address+"&city="+this.state.city+"&country="+this.state.country+"&prov_type="+this.state.prov_type+"&email="+this.state.email+"&password="+this.state.password
      console.log(link)
      axios.get(link).then((result) => {
        console.log(result.data)
        this.props.navigation.navigate('Mainstak')
      })

    }

  }
  render() {
    if(this.state.UserIs){
    return (
      <View style={styles.container}>

        <View style={{ alignSelf: 'flex-start', paddingVertical: 22 }}>
          <Text style={{ fontSize: 21, color: "#089BAB", fontWeight: "bold" }}>SignUp</Text>
          <Text style={{ fontSize: 16, color: "#c3c3c3", fontWeight: "600" }}>Welcome Patient</Text>
        </View>

        <View style={{ width: '60%', paddingVertical: 10, flexDirection: "row", justifyContent: 'space-between' }}>
          <View style={{ width: '40%' }}>
            <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>Full Name</Text>
            <View style={{ height: 5 }}></View>
            <View style={{ width: '100%', height: 30, backgroundColor: '#E7F1F1', borderColor: "#c3c3c3", borderWidth: 1, paddingHorizontal: '2%', justifyContent: 'center', borderRadius: 60 }}>
              <TextInput
                ref="textInputMobile"
                style={{ fontSize: 15, color: '#000', width: '100%', borderRadius: 60 }}
                placeholder='name'
                placeholderTextColor='#777'
                autoCapitalize='none'
                onChangeText={(username) => { this.setState({ username }); }}//email set
              />
            </View>
          </View>
          <View style={{ width: '50%', }}>
            <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>User CNIC</Text>
            <View style={{ height: 5 }}></View>
            <View style={{ width: '100%', height: 30, backgroundColor: '#E7F1F1', borderColor: "#c3c3c3", borderWidth: 1, paddingHorizontal: '2%', justifyContent: 'center', borderRadius: 60 }}>
              <TextInput
                ref="textInputMobile"
                style={{ fontSize: 15, color: '#000', width: '100%', borderRadius: 60 }}
                placeholder='CNIC'
                placeholderTextColor='#777'
                autoCapitalize='none'
                onChangeText={(cnic) => { this.setState({ cnic }); }}//email set
              />
            </View>
          </View>
        </View>
        <View style={{ width: '60%', paddingVertical: 10 }}>
          <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>Address</Text>
          <View style={{ height: 5 }}></View>
          <View style={{ width: '100%', height: 30, backgroundColor: '#E7F1F1', borderColor: "#c3c3c3", borderWidth: 1, paddingHorizontal: '2%', justifyContent: 'center', borderRadius: 60 }}>
            <TextInput
              ref="textInputMobile"
              style={{ fontSize: 15, color: '#000', width: '100%', borderRadius: 60 }}
              placeholder='Address'
              placeholderTextColor='#777'
              autoCapitalize='none'
              onChangeText={(address) => { this.setState({ address }); }}//email set
            />
          </View>
        </View>

        <View style={{ width: '60%', paddingVertical: 10, flexDirection: "row", justifyContent: 'space-between' }}>
          <View style={{ width: '30%' }}>
            <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>City</Text>
            <View style={{ height: 5 }}></View>
            <View style={{ width: '100%', height: 30, backgroundColor: '#E7F1F1', borderColor: "#c3c3c3", borderWidth: 1, paddingHorizontal: '2%', justifyContent: 'center', borderRadius: 60 }}>
              <TextInput
                ref="textInputMobile"
                style={{ fontSize: 15, color: '#000', width: '100%', borderRadius: 60 }}
                placeholder='CITY'
                placeholderTextColor='#777'
                autoCapitalize='none'
                onChangeText={(city) => { this.setState({ city }); }}//email set
              />
            </View>
          </View>
          <View style={{ width: '30%', }}>
            <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>Country</Text>
            <View style={{ height: 5 }}></View>
            <View style={{ width: '100%', height: 30, backgroundColor: '#E7F1F1', borderColor: "#c3c3c3", borderWidth: 1, paddingHorizontal: '2%', justifyContent: 'center', borderRadius: 60 }}>
              <TextInput
                ref="textInputMobile"
                style={{ fontSize: 15, color: '#000', width: '100%', borderRadius: 60 }}
                placeholder='Country'
                placeholderTextColor='#777'
                autoCapitalize='none'
                onChangeText={(country) => { this.setState({ country }); }}//email set
              />
            </View>
          </View>
          <View style={{ width: '30%', }}>
            <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>Date of Birth</Text>
            <View style={{ height: 5 }}></View>
            <View style={{ width: '100%', height: 30, backgroundColor: '#E7F1F1', borderColor: "#c3c3c3", borderWidth: 1, paddingHorizontal: '2%', justifyContent: 'center', borderRadius: 60 }}>
              <TextInput
                ref="textInputMobile"
                style={{ fontSize: 15, color: '#000', width: '100%', borderRadius: 60 }}
                placeholder='DoB'
                placeholderTextColor='#777'
                autoCapitalize='none'
                onChangeText={(dateOfBirth) => { this.setState({ dateOfBirth }); }}//email set
              />
            </View>
          </View>
        </View>
        <View style={{ width: '60%', paddingVertical: 10, flexDirection: "row", justifyContent: 'space-between' }}>
          <View style={{ width: '40%' }}>
            <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>Email</Text>
            <View style={{ height: 5 }}></View>
            <View style={{ width: '100%', height: 30, backgroundColor: '#E7F1F1', borderColor: "#c3c3c3", borderWidth: 1, paddingHorizontal: '2%', justifyContent: 'center', borderRadius: 60 }}>
              <TextInput
                ref="textInputMobile"
                style={{ fontSize: 15, color: '#000', width: '100%', borderRadius: 60 }}
                placeholder='Email'
                placeholderTextColor='#777'
                autoCapitalize='none'
                onChangeText={(email) => { this.setState({ email }); }}//email set
              />
            </View>
          </View>
          <View style={{ width: '50%', }}>
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
        </View>

        <View style={{ paddingVertical: 22 }}>
          <TouchableOpacity
            onPress={() => { this.SignUp()}}
            style={{ width: "60%", height: 30, backgroundColor: "#089BAB", borderRadius: 60, alignItems: "center", justifyContent: 'center' }}>
            <Text style={{ fontSize: 14, color: "#fff", fontWeight: "bold" }}>Sign Up</Text>
          </TouchableOpacity>

        </View>

        <View style={{ paddingVertical: 10, flexDirection: 'row' }}>
          <Text style={{ fontSize: 16, color: "#c3c3c3", fontWeight: "600" }}>Already have a account </Text>
          <TouchableOpacity
            onPress={() => { this.props.navigation.navigate('Mainstak') }}>
            <Text style={{ fontSize: 16, color: "#089BAB", fontWeight: "bold" }}>  Sign In</Text>
          </TouchableOpacity>

        </View>
        <View style={{ paddingVertical: 10, width: "100%", borderBottomColor: '#c3c3c3', borderBottomWidth: 1 }}></View>


        <View style={{ paddingVertical: 10, flexDirection: 'row', alignSelf: 'center' }}>
          <Text style={{ fontSize: 16, color: "#c3c3c3", fontWeight: "600" }}>SignUp as </Text>
          <TouchableOpacity
            onPress={() => this.changeUser()}>
            <Text style={{ fontSize: 16, color: "#089BAB", fontWeight: "bold" }}> Provider</Text>
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
  }else{
    return (
      <View style={styles.container}>

        <View style={{ alignSelf: 'flex-start', paddingVertical: 22 }}>
          <Text style={{ fontSize: 21, color: "#089BAB", fontWeight: "bold" }}>SignUp</Text>
          <Text style={{ fontSize: 16, color: "#c3c3c3", fontWeight: "600" }}>Welcome Provider</Text>
        </View>

        <View style={{ width: '60%', paddingVertical: 10, flexDirection: "row", justifyContent: 'space-between' }}>
          <View style={{ width: '40%' }}>
            <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>Provider Name</Text>
            <View style={{ height: 5 }}></View>
            <View style={{ width: '100%', height: 30, backgroundColor: '#E7F1F1', borderColor: "#c3c3c3", borderWidth: 1, paddingHorizontal: '2%', justifyContent: 'center', borderRadius: 60 }}>
              <TextInput
                ref="textInputMobile"
                style={{ fontSize: 15, color: '#000', width: '100%', borderRadius: 60 }}
                placeholder='name'
                placeholderTextColor='#777'
                autoCapitalize='none'
                onChangeText={(username) => { this.setState({ username }); }}//email set
              />
            </View>
          </View>
         
        </View>
        <View style={{ width: '60%', paddingVertical: 10 }}>
          <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>Address</Text>
          <View style={{ height: 5 }}></View>
          <View style={{ width: '100%', height: 30, backgroundColor: '#E7F1F1', borderColor: "#c3c3c3", borderWidth: 1, paddingHorizontal: '2%', justifyContent: 'center', borderRadius: 60 }}>
            <TextInput
              ref="textInputMobile"
              style={{ fontSize: 15, color: '#000', width: '100%', borderRadius: 60 }}
              placeholder='Address'
              placeholderTextColor='#777'
              autoCapitalize='none'
              onChangeText={(prov_address) => { this.setState({ prov_address }); }}//email set
            />
          </View>
        </View>

        <View style={{ width: '60%', paddingVertical: 10, flexDirection: "row", justifyContent: 'space-between' }}>
          <View style={{ width: '30%' }}>
            <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>City</Text>
            <View style={{ height: 5 }}></View>
            <View style={{ width: '100%', height: 30, backgroundColor: '#E7F1F1', borderColor: "#c3c3c3", borderWidth: 1, paddingHorizontal: '2%', justifyContent: 'center', borderRadius: 60 }}>
              <TextInput
                ref="textInputMobile"
                style={{ fontSize: 15, color: '#000', width: '100%', borderRadius: 60 }}
                placeholder='CITY'
                placeholderTextColor='#777'
                autoCapitalize='none'
                onChangeText={(city) => { this.setState({ city }); }}//email set
              />
            </View>
          </View>
          <View style={{ width: '30%', }}>
            <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>Country</Text>
            <View style={{ height: 5 }}></View>
            <View style={{ width: '100%', height: 30, backgroundColor: '#E7F1F1', borderColor: "#c3c3c3", borderWidth: 1, paddingHorizontal: '2%', justifyContent: 'center', borderRadius: 60 }}>
              <TextInput
                ref="textInputMobile"
                style={{ fontSize: 15, color: '#000', width: '100%', borderRadius: 60 }}
                placeholder='Country'
                placeholderTextColor='#777'
                autoCapitalize='none'
                onChangeText={(country) => { this.setState({ country }); }}//email set
              />
            </View>
          </View>
          <View style={{ width: '30%', }}>
            <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>Provider Type</Text>
            <View style={{ height: 5 }}></View>
            <View style={{ width: '100%', height: 30, backgroundColor: '#E7F1F1', borderColor: "#c3c3c3", borderWidth: 1, paddingHorizontal: '2%', justifyContent: 'center', borderRadius: 60 }}>
              <TextInput
                ref="textInputMobile"
                style={{ fontSize: 15, color: '#000', width: '100%', borderRadius: 60 }}
                placeholder='Provider Type'
                placeholderTextColor='#777'
                autoCapitalize='none'
                onChangeText={(prov_type) => { this.setState({ prov_type }); }}//email set
              />
            </View>
          </View>
        </View>
        <View style={{ width: '60%', paddingVertical: 10, flexDirection: "row", justifyContent: 'space-between' }}>
          <View style={{ width: '40%' }}>
            <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>Email</Text>
            <View style={{ height: 5 }}></View>
            <View style={{ width: '100%', height: 30, backgroundColor: '#E7F1F1', borderColor: "#c3c3c3", borderWidth: 1, paddingHorizontal: '2%', justifyContent: 'center', borderRadius: 60 }}>
              <TextInput
                ref="textInputMobile"
                style={{ fontSize: 15, color: '#000', width: '100%', borderRadius: 60 }}
                placeholder='Email'
                placeholderTextColor='#777'
                autoCapitalize='none'
                onChangeText={(email) => { this.setState({ email }); }}//email set
              />
            </View>
          </View>
          <View style={{ width: '50%', }}>
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
        </View>

        <View style={{ paddingVertical: 22 }}>
          <TouchableOpacity
            onPress={() => {this.SignUp() }}
            style={{ width: "60%", height: 30, backgroundColor: "#089BAB", borderRadius: 60, alignItems: "center", justifyContent: 'center' }}>
            <Text style={{ fontSize: 14, color: "#fff", fontWeight: "bold" }}>Sign Up</Text>
          </TouchableOpacity>

        </View>

        <View style={{ paddingVertical: 10, flexDirection: 'row' }}>
          <Text style={{ fontSize: 16, color: "#c3c3c3", fontWeight: "600" }}>Already have a account </Text>
          <TouchableOpacity
            onPress={() => { this.props.navigation.navigate('Mainstak') }}>
            <Text style={{ fontSize: 16, color: "#089BAB", fontWeight: "bold" }}>  Sign In</Text>
          </TouchableOpacity>

        </View>
        <View style={{ paddingVertical: 10, width: "100%", borderBottomColor: '#c3c3c3', borderBottomWidth: 1 }}></View>


        <View style={{ paddingVertical: 10, flexDirection: 'row', alignSelf: 'center' }}>
          <Text style={{ fontSize: 16, color: "#c3c3c3", fontWeight: "600" }}>SignUp as </Text>
          <TouchableOpacity
            onPress={() => this.changeUser()}>
            <Text style={{ fontSize: 16, color: "#089BAB", fontWeight: "bold" }}> Patient</Text>
          </TouchableOpacity>

        </View>
       
      </View>
    );
  }
}
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: "80%"
    // paddingTop: 22,
    // flexDirection: 'row'
  },

})