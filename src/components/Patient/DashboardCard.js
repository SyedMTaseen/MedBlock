import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Button, Image } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

function Item() {
    return (
        <View style={{ flexDirection: 'column', alignItems: "flex-start", justifyContent: 'center' }}>
            <Text style={{ fontSize: 7, fontWeight: 'bold' ,color:"#C4C4C4" }}>09 Nov 2019</Text>
            <View style={{ height: 2 }}></View> 
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Malaira</Text>
            <View style={{ height: 2 }}></View> 
            <Text style={{ fontSize: 9, fontWeight: 'bold',color:"#C4C4C4" }}>Blood Report</Text>


        </View>
    );
}
export default class DashBoardCard extends Component {
    render() {
        return (
            <View style={styles.cardView}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: "#089BAB" }}>Examinations</Text>
                    <Text style={{ fontSize: 16, color: "#089BAB", fontWeight: '700' }}>View All</Text>
                </View>
                <View style={{ height: 20 }}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Image source={require("../../../assets/Patient/Rectangle6.png")} style={{ width: 20, height: 50 }} resizeMode="contain"></Image>

                        <Item></Item>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Image source={require("../../../assets/Patient/Rectangle 7.png")} style={{ width: 20, height: 50 }} resizeMode="contain"></Image>

                        <Item></Item>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Image source={require("../../../assets/Patient/Rectangle 8.png")} style={{ width: 20, height: 50 }} resizeMode="contain"></Image>

                        <Item></Item>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Image source={require("../../../assets/Patient/Rectangle6.png")} style={{ width: 20, height: 50 }} resizeMode="contain"></Image>

                        <Item></Item>
                    </View>
                </View>

                {/* <Image source={require("../../../assets/Patient/Nichayka.png")} style={{ width: 830, height: 400 }} resizeMode="stretch"></Image> */}

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
        width: "70%",


        borderRadius: 60,
        paddingVertical: '3%',
        paddingHorizontal: "4%",

    },



})