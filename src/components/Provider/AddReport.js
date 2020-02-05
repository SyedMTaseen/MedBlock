import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';




export default class AddReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DATA: [
                {
                    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                    title: 'David',
                },
                {
                    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
                    title: 'Johnson',
                },
                {
                    id: '58694a0f-3da1-471f-bd96-145571e29d72',
                    title: 'Jackson',
                },
            ],
        }
    }

    render() {
        return (
            <View style={styles.cardView}>
                <View style={{ width: "100%", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ fontSize: 16, color: "#089BAB", fontWeight: "bold" }}>Add Report</Text>
                        <Text style={{ fontSize: 12, color: "#c3c3c3", fontWeight: "600" }}>David Jackson</Text>
                    </View>
                    <TouchableOpacity style={{ width: "10%", height: 30, backgroundColor: "#089BAB", borderRadius: 60, alignItems: "center", justifyContent: 'center' }}>
                        <Text style={{ fontSize: 14, color: "#fff", fontWeight: "bold" }}>Save Report</Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={{ height: 20 }}></View>
                <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ width: '70%', height: 20, backgroundColor: '#e3e3e3', borderColor: "#c3c3c3", borderWidth: 1, paddingHorizontal: '2%', justifyContent: 'center', borderRadius: 60 }}>
                        <TextInput
                            ref="textInputMobile"
                            style={{ fontSize: 15, color: '#000', width: '100%', borderRadius: 60 }}
                            placeholder='Search'
                            placeholderTextColor='#777'
                            secureTextEntry={this.state.showPassword}
                            autoCapitalize='none'
                            onChangeText={(password) => { this.setState({ password }); }}//email set
                        />


                    </View>
               

                </View> */}



                <View style={{ height: 20 }}></View>
                <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: "space-between" }}>
                    <View style={{ width: '30%' }}>
                        <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>Report Title</Text>
                        <View style={{ height: 5 }}></View>
                        <View style={{ width: '100%', height: 30, backgroundColor: '#E7F1F1', borderColor: "#c3c3c3", borderWidth: 1, paddingHorizontal: '2%', justifyContent: 'center', borderRadius: 60 }}>
                            <TextInput
                                ref="textInputMobile"
                                style={{ fontSize: 15, color: '#000', width: '100%', borderRadius: 60 }}
                                placeholder='Title'
                                placeholderTextColor='#777'
                                secureTextEntry={this.state.showPassword}
                                autoCapitalize='none'
                                onChangeText={(password) => { this.setState({ password }); }}//email set
                            />
                        </View>
                    </View>


                    <View style={{ width: '30%' }}>
                        <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>Healthcare professional</Text>
                        <View style={{ height: 5 }}></View>
                        <View style={{ width: '100%', height: 30, backgroundColor: '#E7F1F1', borderColor: "#c3c3c3", borderWidth: 1, paddingHorizontal: '2%', justifyContent: 'center', borderRadius: 60 }}>
                            <TextInput
                                ref="textInputMobile"
                                style={{ fontSize: 15, color: '#000', width: '100%', borderRadius: 60 }}
                                placeholder="Full name"
                                placeholderTextColor='#777'
                                secureTextEntry={this.state.showPassword}
                                autoCapitalize='none'
                                onChangeText={(password) => { this.setState({ password }); }}//email set
                            />
                        </View>
                    </View>
                    <View></View>
                </View>
                <View style={{ height: "5%" }}></View>
                <View style={{ width: '30%' }}>
                    <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>Prescription</Text>
                    <View style={{ height: 5 }}></View>
                    <View style={{ width: '100%', height: 30, backgroundColor: '#E7F1F1', borderColor: "#c3c3c3", borderWidth: 1, paddingHorizontal: '2%', justifyContent: 'center', borderRadius: 60 }}>
                        <TextInput
                            ref="textInputMobile"
                            style={{ fontSize: 15, color: '#000', width: '100%', borderRadius: 60 }}
                            placeholder=''
                            placeholderTextColor='#777'
                            secureTextEntry={this.state.showPassword}
                            autoCapitalize='none'
                            onChangeText={(password) => { this.setState({ password }); }}//email set
                        />
                    </View>
                </View>
                <View style={{ height: "5%" }}></View>
                <View style={{ width: '100%', height: "40%" }}>
                    <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>Details</Text>
                    <View style={{ height: 5 }}></View>
                    <View style={{ width: '100%', height: "100%", backgroundColor: '#E7F1F1', borderColor: "#c3c3c3", borderWidth: 1, paddingHorizontal: '2%', borderRadius: 30, paddingVertical: '2%' }}>
                        <TextInput
                            ref="textInputMobile"
                            style={{ fontSize: 15, color: '#000', width: '100%', borderRadius: 60 }}
                            placeholder='Type here'
                            placeholderTextColor='#777'
                            secureTextEntry={this.state.showPassword}
                            autoCapitalize='none'

                            onChangeText={(password) => { this.setState({ password }); }}//email set
                        />
                    </View>
                </View>



            </View>
        );
    }
}

const styles = StyleSheet.create({

    cardView: {
        shadowColor: 'rgba(0,0,0, .2)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS 
        elevation: 3, // Android
        backgroundColor: "#fff",
        height: "80%",
        width: '90%',
        marginTop: '2%',
        // marginVertical: "2%",
        borderRadius: 60,
        paddingVertical: '3%',
        paddingHorizontal: "4%",

    },



})