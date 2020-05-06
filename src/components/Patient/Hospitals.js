import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Button, Image } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';

function Item({ title,changeReadAccess,changerRWAccess }) {
    return (
        <View style={{ paddingVertical: 10 }}>
            <View style={{ borderBottomWidth: 1, width: '100%', borderBottomColor: "#E7F1F1" }}></View>
            <View style={{ height: 20 }}></View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 20, height: 20, backgroundColor: '#45D053', borderRadius: 60 }}></View>
                    <View style={{ width: 10 }}></View>
                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{title}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: 'center', width: "15%", justifyContent: 'space-between' }} >
                    <TouchableOpacity style={{ width: 40, height: 20, backgroundColor: "#7777", borderRadius: 60, borderColor: "#4444", borderWidth: 1, justifyContent: 'center', }} onPress={()=>changeReadAccess(title)}>
                        <View style={{ width: 18, height: 18, backgroundColor: '#fff', borderRadius: 60 }}></View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: 40, height: 20, backgroundColor: "#7777", borderRadius: 60, borderColor: "#4444", borderWidth: 1, justifyContent: 'center', }} onPress={()=>changerRWAccess(title)}>
                        <View style={{ width: 18, height: 18, backgroundColor: '#fff', borderRadius: 60 }}></View>
                    </TouchableOpacity>
                </View>
            </View>


        </View>
    );
}

export default class Hospitals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DATA: [
                {
                    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                    title: 'Agha Khan Hospital',
                    read: true,
                    rw: false
                },
                {
                    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
                    title: 'Dow Medical College Hospital',
                    read: true,
                    rw: false
                },
                {
                    id: '58694a0f-3da1-471f-bd96-145571e29d72',
                    title: 'Ziauddin Hospital',
                    read: true,
                    rw: false
                },
            ],
        }
    }
    changeReadAccess = (val) => {
        var link = "http://192.168.32.134:3639/patient_permissions_list/update?pat_cnic=42101&prov_id=12&access_level=1"
        console.log(link)
        axios.get(link).then((result) => {
          console.log(result.data)
         
      
        })

    }
    changerRWAccess = (val) => {
        var   link = "http://192.168.32.134:3639/patient_permissions_list/update?pat_cnic=42101&prov_id=12&access_level=1"
        console.log(link)
        axios.get(link).then((result) => {
          console.log(result.data)
         
      
        })

    }
    componentWillMount=()=>{
        var link = "http://192.168.32.134:3639/patient_permissions_list/get?pat_cnic=42101"
        console.log(link)
        axios.get(link).then((result) => {
          console.log(result.data)
         
      
        })
    }

    render() {
        return (
            <View style={styles.cardView}>

                <Text style={{ fontSize: 16, color: "#089BAB", fontWeight: "bold" }}>Hospitals</Text>
                <Text style={{ fontSize: 12, color: "#c3c3c3", fontWeight: "600" }}>Here you can see which hospital has access to your data and you can also give access by the tougle button</Text>

                <View style={{ height: 20 }}></View>
                <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>Hospitals Name</Text>

                    <View style={{ flexDirection: "row", alignItems: 'center' }} >
                        <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold", marginRight: '3%' }}>Read Access</Text>
                        <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>R/W Access</Text>
                    </View>
                </View>

                <FlatList
                    data={this.state.DATA}
                    renderItem={({ item }) => <Item title={item.title} changeReadAccess={this.changeReadAccess} changerRWAccess={this.changerRWAccess} />}
                    keyExtractor={item => item.id}
                />


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
        height: "90%",
        width: "80%",

        marginHorizontal: '2%',
        borderRadius: 60,
        paddingVertical: '3%',
        paddingHorizontal: "4%",

    },



})