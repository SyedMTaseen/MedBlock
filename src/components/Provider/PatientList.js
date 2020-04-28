import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Item({ title }) {
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
                <View style={{ width: 40, height: 20, backgroundColor: "#7777", borderRadius: 60, borderColor: "#4444", borderWidth: 1, justifyContent: 'center', }}>

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
        }
    }
    openDatails=()=>{
        this.props.changePageState(1)
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
                            secureTextEntry={this.state.showPassword}
                            autoCapitalize='none'
                            onChangeText={(password) => { this.setState({ password }); }}//email set
                        />


                    </View>
                    {/* <TouchableOpacity style={{ width: "10%", height: 20, backgroundColor: "#089BAB", borderRadius: 60 }}>
                        <Text>Search</Text>
                    </TouchableOpacity> */}

                </View>



                <View style={{ height: 20 }}></View>
                <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>Patient Name</Text>
                    <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>Access</Text>
                </View>

                <FlatList
                    data={this.state.DATA}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={this.openDatails}>
                            <Item title={item.title} />
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