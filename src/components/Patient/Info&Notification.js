import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import PatientInfo from "./PatientInfo";


function Item({ title }) {
    return (
        <View style={{ paddingVertical:10}}>
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
            <View style={{height:5 }}></View>
            <View style={{borderBottomWidth:1,width:'100%',borderBottomColor:"#E7F1F1"}}></View>
        </View>
    );
}


export default class InfoNotification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DATA: [
                {
                    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                    title: 'Has requested access to your data',
                },
                {
                    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
                    title: 'Has added new data',
                },
                {
                    id: '58694a0f-3da1-471f-bd96-145571e29d72',
                    title: 'Has requested access to your data',
                },
            ],
        }
    }



    render() {
        return (

            <View style={{ width: "20%", height: "100%", justifyContent: 'center', alignItems: 'center' }}>

                <PatientInfo UserData={this.props.UserData}></PatientInfo>
                <View style={{ height: '3%' }}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#089BAB', fontSize: 16, fontWeight: '600' }} >Notification</Text>
                    <Text style={{ color: '#7777', fontSize: 14, fontWeight: '400' }} >17 Nov 2019</Text>

                </View>
                <View style={{ height: '2%' }}></View>
                <View style={{
                    width: '90%', height: '45%', shadowColor: 'rgba(0,0,0, .2)', // IOS
                    shadowOffset: { height: 1, width: 1 }, // IOS
                    shadowOpacity: 1, // IOS
                    shadowRadius: 1, //IOS 
                    elevation: 3, // Android
                    backgroundColor: '#fff',
                    borderRadius: 40,
                    paddingVertical: 22
                }}>
                    <FlatList
                        data={this.state.DATA}
                        renderItem={({ item }) => <Item title={item.title} />}
                        keyExtractor={item => item.id}
                    />

                </View>


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
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    cardView: {
        shadowColor: 'rgba(0,0,0, .2)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS 
        elevation: 3, // Android
        backgroundColor: "#fff",
        height: "90%",
        width: "90%",
        flexDirection: 'row',
        alignItems: 'center',

    },
    menuStyle: {
        height: '90%',
        width: '10%',
        backgroundColor: "#089BAB",
        borderTopLeftRadius: 80,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 80,
        borderBottomRightRadius: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: '3%'

    }


})