import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Button, Image } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import axios from 'axios';
function DetailsItem() {
    return (
        <View style={{ flexDirection: 'column', alignItems: "flex-start", justifyContent: 'center' }}>
            <Text style={{ fontSize: 7, fontWeight: 'bold', color: "#C4C4C4" }}>09 Nov 2019</Text>
            <View style={{ height: 2 }}></View>
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Malaira</Text>
            <View style={{ height: 2 }}></View>
            <Text style={{ fontSize: 9, fontWeight: 'bold', color: "#C4C4C4" }}>Blood Report</Text>


        </View>
    );
}

function Item({ title }) {
    return (
        <View style={{ paddingVertical: 10 }}>
            <View style={{ borderBottomWidth: 1, width: '100%', borderBottomColor: "#E7F1F1" }}></View>
            <View style={{ height: 20 }}></View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                    <Image source={require("../../../assets/Patient/Rectangle6.png")} style={{ width: 20, height: 50 }} resizeMode="contain"></Image>

                    <DetailsItem></DetailsItem>
                </View>
                <Text style={{ fontSize: 12, fontWeight: '800', textAlign: 'left' }}>{title}</Text>
                <View style={{ width: 80, height: 20, backgroundColor: "#089BAB", borderRadius: 60, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 9, fontWeight: '900', color: '#fff' }}>Open</Text>
                </View>
            </View>


        </View>
    );
}

export default class MyReports extends Component {
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
    componentWillMount(){
        var link = " http://192.168.32.134:3639/encounter/get?cnic=42101"
        console.log(link)
        axios.get(link).then((result) => {
          console.log(result.data)
         
      
        })
    }


    render() {
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
                        data={this.state.DATA}
                        renderItem={({ item }) => <Item title={item.title} />}
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