import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import ReportDetails from "./ReportDetails"
function DetailsItem({ data }) {

    // var date=new Date()
    return (
        <View style={{ flexDirection: 'column', alignItems: "flex-start", justifyContent: 'center' }}>
            <Text style={{ fontSize: 7, fontWeight: 'bold', color: "#C4C4C4" }}>{data.apt_time}</Text>
            <View style={{ height: 2 }}></View>
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{data.details}</Text>
            <View style={{ height: 2 }}></View>
            {/* <Text style={{ fontSize: 9, fontWeight: 'bold', color: "#C4C4C4" }}>Blood Report</Text> */}


        </View>
    );
}

function Item({ data,OpenDetails }) {
    return (
        <View style={{ paddingVertical: 10 }}>
            <View style={{ borderBottomWidth: 1, width: '100%', borderBottomColor: "#E7F1F1" }}></View>
            <View style={{ height: 20 }}></View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                    <Image source={require("../../../assets/Patient/Rectangle6.png")} style={{ width: 20, height: 50 }} resizeMode="contain"></Image>

                    <DetailsItem data={data}></DetailsItem>
                </View>
                <Text style={{ fontSize: 12, fontWeight: '800', textAlign: 'left' }}>{data.dr_name}</Text>
                <TouchableOpacity
                 onPress={()=>OpenDetails(1,data)}
                 style={{ width: 80, height: 20, backgroundColor: "#089BAB", borderRadius: 60, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 9, fontWeight: '900', color: '#fff' }}>Open</Text>
                </TouchableOpacity>
            </View>


        </View>
    );
}

export default class MyReports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Page: 0,
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
            MyReports: [],
            selected:null,
        }
    }
    componentWillMount() {
        var link = " http://18.234.214.14:3639/encounter/get?cnic="+this.props.UserData[1]
        console.log(link)
        axios.get(link).then((result) => {
          console.log(result.data)
          this.setState({MyReports:result.data.server_response})
        // var myR = [{ "dr_name": "Dr. Zulfiqar", "apt_time": "1588534281106", "details": "lungs failed", "uid": "0", "provider_id": "0" }]
        // this.setState({ MyReports: myR })

         })
    }

    OpenDetails = (no,data) => {
        this.setState({ Page: no ,selected:data})
    }

    render() {
        if (this.state.Page == 0) {

            return (
                <View style={styles.cardView}>

                    <Text style={{ fontSize: 16, color: "#089BAB", fontWeight: "bold" }}>My Reports</Text>
                    <Text style={{ fontSize: 12, color: "#c3c3c3", fontWeight: "600" }}>Your report which doctors has Uploaded</Text>

                    <View style={{ height: 20 }}></View>
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>Details</Text>
                            <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>Uploaded by</Text>
                            <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>Open</Text>
                        </View>

                        <FlatList
                            data={this.state.MyReports}
                            renderItem={({ item }) => <Item data={item} OpenDetails={this.OpenDetails} />}
                            keyExtractor={item => item.id}
                        />
                    </View>
                    {/* <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                            <Image source={require("../../../assets/Patient/Rectangle6.png")} style={{ width: 20, height: 50 }} resizeMode="contain"></Image>

                            <DetailsItem></DetailsItem>
                        </View>
                        <View style={{ flexDirection: 'column', alignItems: "flex-start", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 7, fontWeight: 'bold', }}>Uploaded by</Text>
                            <View style={{ height: 2 }}></View>
                            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Agha Khan Hospital</Text>
                            <View style={{ height: 2 }}></View>
                            <Text style={{ fontSize: 9, fontWeight: 'bold', }}>Dr Soman Baqai</Text>
                        </View>

                    </View>
                    <View style={{ height: 20 }}></View>
                    <View style={{ width: "100%", height: "80%", backgroundColor: "#E7F1F1", borderRadius: 30, borderColor: "#4444", borderWidth: 1, padding: 22 }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', }}>this is report for you </Text>
                    </View>


                </View> */}

                </View>
            );
        } else {
            return (
                <ReportDetails  UserID={this.props.UserData[1]} OpenDetails={this.OpenDetails} Selected={this.state.selected}></ReportDetails>
            )
        }
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