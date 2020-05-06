import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Button, Image } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

import axios from 'axios';
function Item({ title }) {
    return (
        <View style={{ paddingVertical:10}}>
                <View style={{ borderBottomWidth: 1, width: '100%', borderBottomColor: "#E7F1F1" }}></View>
            <View style={{ height: 20 }}></View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 22,}}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 10, height: 10, backgroundColor: '#45D053', borderRadius: 60 }}></View>
                    <View style={{ width: 10 }}></View>
                    <Text style={{fontSize:9,fontWeight:'bold'}}>Agha Khan Hospital</Text>
                </View>
                <Text style={{fontSize:9,fontWeight:'bold', color:"#C4C4C4"}}>09 Nov 2019</Text>
            </View>
            <View style={{height:5 }}></View>
            <Text style={{fontSize:12,color:"#777777",paddingHorizontal: 22,}}>{title}</Text>
         
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
                },
                {
                    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
                    title: 'Dow Medical College Hospital',
                },
                {
                    id: '58694a0f-3da1-471f-bd96-145571e29d72',
                    title: 'Ziauddin Hospital',
                },
            ],
        }

    }

    componentWillMount=()=>{
        var  link = " http://192.168.32.134:3639/patient_permission_requests_list/get?pat_cnic=42101"
        console.log(link)
        axios.get(link).then((result) => {
          console.log(result.data)
         
      
        })
    }

    render() {
        return (
            <View style={styles.cardView}>

                <Text style={{ fontSize: 16, color: "#089BAB", fontWeight: "bold" }}>Notification</Text>
                <Text style={{ fontSize: 12, color: "#c3c3c3", fontWeight: "600" }}>All requests and addition in your medical records</Text>

                <View style={{ height: 20 }}></View>
                
                <FlatList
                    data={this.state.DATA}
                    renderItem={({ item }) => <Item title={item.title} />}
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