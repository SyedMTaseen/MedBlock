import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Button, Image, TextInput, Alert } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import _ from 'lodash';

function Item({ title, alertReadPermission, alertReadWritePermission }) {
    return (
        <View style={{ paddingVertical: 10 }}>
            <View style={{ borderBottomWidth: 1, width: '100%', borderBottomColor: "#E7F1F1" }}></View>
            <View style={{ height: 20 }}></View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 20, height: 20, backgroundColor: '#45D053', borderRadius: 60 }}></View>
                    <View style={{ width: 10 }}></View>
                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{title.fname}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: 'center', width: "15%", justifyContent: 'space-between' }} >
                    <TouchableOpacity
                        onPress={() => alertReadPermission(title.cnic)}
                        style={{ width: 40, height: 20, backgroundColor: title.access_level == "1" ? '#45D053' : "#7777", borderRadius: 60, borderColor: "#4444", borderWidth: 1, justifyContent: 'center', }}>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => alertReadWritePermission(title.cnic)}
                        style={{ width: 40, height: 20, backgroundColor: title.access_level == "2" ? '#45D053' : "#7777", borderRadius: 60, borderColor: "#4444", borderWidth: 1, justifyContent: 'center', }}>

                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

export default class PatientList extends Component {
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
            patientList: [],
            totalData: [],
            StaticData: [],
        }
    }
    openDatails = (data) => {
        if (data.access_level == "0") {
            alert("Request For permission first")
        } else {
            this.props.changePageState(1, data)
        }
    }

    requestPermission = (id, rt) => {
        var link = "http://18.234.214.14:3639/patient_permission_requests_list/update?pat_cnic=" + id + "&prov_id=" + this.props.UserData[5] + "&access_level=" + rt
        console.log(link)
        axios.get(link).then((result) => {
            console.log(result.data)


        })

    }
    alertReadPermission = (val) => {

        this.requestPermission(val, "1")
        alert("Your Read Access request has been send")

    }
    alertReadWritePermission = (val) => {
        this.requestPermission(val, "2")
        alert("Your Read and Write Access request has been send")

    }
    componentWillMount = () => {
        var link = " http://18.234.214.14:3639/provider_permissions_list/get?provider_id=" + this.props.UserData[5]
        console.log(link)
        axios.get(link).then((result) => {
            console.log(result.data)
            this.setState({
                patientList: result.data.server_response.patient_list,

                totalData: result.data.server_response.patient_list,
                StaticData: result.data.server_response.patient_list,

            })

        })


        // var data = [{ "uid": "0", "acc_address": "0x064FD681DcE8A3EA2e821e3D2C9e85A04fe0ED71", "fname": "soman", "password": "123", "email": "baqai@baqai.com", "pat_address": "a-301", "city": "khi", "country": "pak", "signup_time": "", "weight": "40kg", "height": "5ft", "cnic": "42101", "DoB": "2nd sept 1996", "access_level": "2" }]
        // this.setState({
        //     patientList: data,
        //     totalData: data,
        //     StaticData: data,
        // })
    }

    contains = ({ fname, email, uid }, query) => {

        if (fname.includes(query) || email.includes(query) || uid.includes(query)) {
            return true;
        }
        return false;
    }


    searchData = text => {
        const data = _.filter(this.state.totalData, StaticData => { return this.contains(StaticData, text); })
        this.setState({ query: text, patientList: data, });

    }
    render() {
        return (
            <View style={styles.cardView}>

                <Text style={{ fontSize: 16, color: "#089BAB", fontWeight: "bold" }}>Patients</Text>
                <Text style={{ fontSize: 12, color: "#c3c3c3", fontWeight: "600" }}>Here you can search and see patient and view data and ask for permission</Text>

                <View style={{ height: 20 }}></View>
                <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ width: '70%', height: 20, backgroundColor: '#E7F1F1', borderColor: "#c3c3c3", borderWidth: 1, paddingHorizontal: '2%', justifyContent: 'center', borderRadius: 60 }}>
                        <TextInput
                            ref="textInputMobile"
                            style={{ fontSize: 15, color: '#000', width: '100%', borderRadius: 60 }}
                            placeholder='Search'
                            placeholderTextColor='#777'

                            autoCapitalize='none'
                            onChangeText={this.searchData}
                        />


                    </View>
                    {/* <TouchableOpacity style={{ width: "10%", height: 20, backgroundColor: "#089BAB", borderRadius: 60 }}>
                        <Text>Search</Text>
                    </TouchableOpacity> */}

                </View>



                <View style={{ height: 20 }}></View>
                <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>Patient Name</Text>
                    <View style={{ flexDirection: "row", alignItems: 'center', width: "17%", justifyContent: 'space-between' }} >
                        <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold", }}>Read Access</Text>
                        <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>R/W Access</Text>
                    </View>
                </View>

                <FlatList
                    data={this.state.patientList}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => this.openDatails(item)}>
                            <Item title={item} alertReadPermission={this.alertReadPermission} alertReadWritePermission={this.alertReadWritePermission} />
                        </TouchableOpacity>
                    }
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
        height: "80%",
        width: '90%',
        marginTop: '2%',
        // marginVertical: "2%",
        borderRadius: 60,
        paddingVertical: '3%',
        paddingHorizontal: "4%",

    },



})