import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Button, Image,TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import axios from 'axios';

export default class ReportDetails extends Component {
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
            Pres: [],
            LapRep:[],
        }
    }
    componentWillMount() {
        var link = "  http://192.168.32.134:3639/prescription/get?enc_id="+this.props.Selected.uid
        console.log(link)
        axios.get(link).then((result) => {
          console.log(result.data)
          this.setState({MyReports:result.data.server_response[0]})
        // var myR = [ [ { "name": "med_name", "dose": "2 daily" }, { "nam": "med_name", "dose": "3 daily" } ] ]
        // this.setState({ Pres: myR[0] })

          })

        var link = "http://192.168.32.134:3639/report/add?cnic="+this.props.UserID+"&apt_time="+this.props.Selected.apt_time+"&details="+this.props.Selected.details
        console.log(link)
        axios.get(link).then((result) => {
          console.log(result.data)
          this.setState({MyReports:result.data.server_response[0]})
        // var myR = [ [ { "name": "med_name", "dose": "2 daily" }, { "name": "med_name", "dose": "3 daily" } ] ]
        // this.setState({ LapRep: myR[0] })

          })
    }


    render() {
        return (
            <View style={styles.cardView}>
                <View style={{ width: "100%", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ fontSize: 16, color: "#089BAB", fontWeight: "bold" }}>My Report Detail</Text>
 
                    </View>
                    <TouchableOpacity
                        onPress={()=>this.props.OpenDetails(0,this.props.Selected)}
                        style={{ width: "20%", height: 30, backgroundColor: "#089BAB", borderRadius: 60, alignItems: "center", justifyContent: 'center' }}>
                        <Text style={{ fontSize: 14, color: "#fff", fontWeight: "bold" }}>Back</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 20 }}></View>
                <View style={{ flex: 1 }}>
                
                    
                        <Text style={{ fontSize: 12, color: "#777", fontWeight: "bold" }}>Provider Name</Text>
                        <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold",marginBottom:'1%' }}>{this.props.Selected.dr_name}</Text>
                        <Text style={{ fontSize: 12, color: "#777", fontWeight: "bold" }}>Details</Text>
                        <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold", marginBottom:'1%' }}>{this.props.Selected.details}</Text>
                        <Text style={{ fontSize: 12, color: "#777", fontWeight: "bold" }}>Prescriptions</Text>
                        <FlatList
                            data={this.state.Pres}
                            renderItem={({ item }) => 
                            <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold", marginBottom:2 }}>Med name : {item.name}, Dose : {item.dose}</Text>}
                            keyExtractor={item => item.id}
                        />

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
        height: "90%",
        width: "80%",

        marginHorizontal: '2%',
        borderRadius: 60,
        paddingVertical: '3%',
        paddingHorizontal: "4%",

    },



})