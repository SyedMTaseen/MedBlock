import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput, } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

import axios from 'axios';




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
            cnic:  this.props.PatData.cnic,
            name: this.props.PatData.fname,
            doctorname: "",
            details: "",
            Screen: 0,
            Pres: [],
            medName: "",
            Dose: "",
            Reports: [],
            ReportTitle: "",
            ReportDetails: "",
            med:"",
            repde:"",
            reptim:"",
            reptitl:"",
        }
    }

    Addencounter = () => {
        var link = "http://18.234.214.14:3639/encounter/add?cnic=" + this.state.cnic + "&dr_name=" + this.state.doctorname + "&details=" + this.state.details
        console.log(link)
        axios.get(link).then((result) => {
            console.log(result.data)
            alert("Successfully added patient record.")
          

        })


    }
    changeScreen = (no) => {
        this.setState({ Screen: no })
    }
    AddPres = () => {

        var pre = { "name": this.state.medName, "dose": this.state.Dose }
        var List = this.state.Pres
        List.push(pre)
        // console.log(List)
        var meds='{"name": "'+this.state.medName+'", "dose": "'+this.state.Dose+'"}'

        if(this.state.med==""){
            console.log("111")
            this.setState({med:meds},()=>{
                console.log(this.state.med)
            })
        }else{
            console.log("22")
            var a=this.state.med+"||"+meds

            this.setState({med:a},()=>{
                console.log(this.state.med)
            })
            
        }
        console.log(meds)
 

        this.setState({ Pres: List })

    }
    AddReports = () => {

        var pre = { "title": this.state.ReportTitle, "details": this.state.ReportDetails }
        var List = this.state.Pres
        List.push(pre)
        console.log(List)
        this.setState({ Reports: List })

        var d=new Date();
        var del='{"description": "'+ this.state.ReportDetails+'"}'
        var tim='{"time": "'+d+'"}'
        var tit='{"title": "'+this.state.ReportTitle+'"} '
        if(this.state.reptitl==""){
            this.setState({repde:del,reptitl:tim,reptitl:tit})
        }else{
            var a=this.state.repde+"||"+del
            var b=this.state.reptim+"||"+tim
            var c=this.state.reptitl+"||"+tit
            this.setState({repde:a,reptitl:c,reptitl:b})
        }
         
    }
    SavePres = () => {
        var dat=new Date()
        var link = " http://18.234.214.14:3639/prescription/add?&cnic" + this.state.cnic + "&dr_name=" + this.state.doctorname + "&details=" + this.state.details+"&medicine="+this.state.med+"&apt_time="+dat
        console.log(link)
        axios.get(link).then((result) => {
            console.log(result.data)
            alert("Successfully saved Prescription.")
        })

    }
    SaveReport=()=>{
        var dat=new Date()
        var link = "http://18.234.214.14:3639/report/add?cnic=" + this.state.cnic+"&apt_time="+dat + "&details=" + this.state.details+ "&dr_name=" + this.state.doctorname +"&report_details="+this.state.repde+"&report_time="+this.state.reptim+"&report_title="+this.state.reptitl
        console.log(link)
        axios.get(link).then((result) => {
            console.log(result.data)
            alert("Successfully saved Lab report.")
            this.props.changePageState(0, this.props.PatData)
        })

    }

    render() {
        if (this.state.Screen == 0) {
            return (
                <View style={styles.cardView}>
                    <View style={{ width: "100%", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontSize: 16, color: "#089BAB", fontWeight: "bold" }}>Add Encounter</Text>
                            <Text style={{ fontSize: 12, color: "#c3c3c3", fontWeight: "600" }}>{this.state.name}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={this.Addencounter}
                            style={{ width: "20%", height: 30, backgroundColor: "#089BAB", borderRadius: 60, alignItems: "center", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 14, color: "#fff", fontWeight: "bold" }}>Save Encounter</Text>
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
                            <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>Encounter Time</Text>
                            <View style={{ height: 5 }}></View>
                            <View style={{ width: '100%', height: 30, backgroundColor: '#E7F1F1', borderColor: "#c3c3c3", borderWidth: 1, paddingHorizontal: '2%', justifyContent: 'center', borderRadius: 60 }}>
                                <TextInput
                                    ref="textInputMobile"
                                    style={{ fontSize: 15, color: '#000', width: '100%', borderRadius: 60 }}
                                    placeholder='Title'
                                    placeholderTextColor='#777'
                                    value={new Date().getDate() + "-" + new Date().getMonth() + "-" + new Date().getFullYear()}
                                    editable={true}
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

                                    autoCapitalize='none'
                                    onChangeText={(doctorname) => { this.setState({ doctorname }); }}//email set
                                />
                            </View>
                        </View>
                        <View></View>
                    </View>
                    <View style={{ height: "5%" }}></View>
                    {/* <View style={{ width: '30%' }}>
                        <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold" }}>Prescription</Text>
                        <View style={{ height: 5 }}></View>
                        <View style={{ width: '100%', height: 30, backgroundColor: '#E7F1F1', borderColor: "#c3c3c3", borderWidth: 1, paddingHorizontal: '2%', justifyContent: 'center', borderRadius: 60 }}>
                            <TextInput
                                ref="textInputMobile"
                                style={{ fontSize: 15, color: '#000', width: '100%', borderRadius: 60 }}
                                placeholder=''
                                placeholderTextColor='#777'

                                autoCapitalize='none'
                                onChangeText={(password) => { this.setState({ password }); }}//email set
                            />
                        </View>
                    </View> */}
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

                                autoCapitalize='none'

                                onChangeText={(details) => { this.setState({ details }); }}//email set
                            />
                        </View>
                    </View>
                    <View style={{ height: "10%" }}></View>
                    <View style={{ flexDirection: 'row', width: "100%" }}>
                        <TouchableOpacity
                            onPress={() => this.changeScreen(1)}
                            style={{ width: "20%", height: 30, backgroundColor: "#089BAB", borderRadius: 60, alignItems: "center", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 14, color: "#fff", fontWeight: "bold" }}>Add Prescription</Text>
                        </TouchableOpacity>
                        <Text>      </Text>
                        <TouchableOpacity
                            onPress={() => this.changeScreen(2)}
                            style={{ width: "20%", height: 30, backgroundColor: "#089BAB", borderRadius: 60, alignItems: "center", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 14, color: "#fff", fontWeight: "bold" }}>Add Report</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            );
        }
        else if (this.state.Screen == 1) {
            return (
                <View style={styles.cardView}>
                    <View style={{ width: "100%", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontSize: 16, color: "#089BAB", fontWeight: "bold" }}>Add Prescription</Text>
                            <Text style={{ fontSize: 12, color: "#c3c3c3", fontWeight: "600" }}>{this.state.name}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity
                                onPress={() => this.SavePres()}
                                style={{ width: 200, height: 30, backgroundColor: "#089BAB", borderRadius: 60, alignItems: "center", justifyContent: 'center' }}>
                                <Text style={{ fontSize: 14, color: "#fff", fontWeight: "bold" }}>Save</Text>
                            </TouchableOpacity>
                            <Text>    </Text>
                            <TouchableOpacity
                                onPress={() => this.changeScreen(0)}
                                style={{ width: 200, height: 30, backgroundColor: "#7777", borderRadius: 60, alignItems: "center", justifyContent: 'center' }}>
                                <Text style={{ fontSize: 14, color: "#fff", fontWeight: "bold" }}>Back</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={{ height: 20 }}></View>
                    <View style={{ flexDirection: "row", alignItems: "center", width: "100%" }}>
                        <View>
                            <Text style={{ fontSize: 12, color: "#777", fontWeight: "bold" }}>Med Name</Text>
                            <View style={{ width: '100%', height: 30, backgroundColor: '#E7F1F1', borderColor: "#c3c3c3", borderWidth: 1, paddingHorizontal: '2%', justifyContent: 'center', borderRadius: 60 }}>
                                <TextInput
                                    ref="textInputMobile"
                                    style={{ fontSize: 15, color: '#000', width: '100%', borderRadius: 60 }}
                                    placeholder=''
                                    placeholderTextColor='#777'

                                    autoCapitalize='none'
                                    onChangeText={(medName) => { this.setState({ medName }); }}//email set
                                />
                            </View>
                        </View>
                        <Text>    </Text>
                        <View>
                            <Text style={{ fontSize: 12, color: "#777", fontWeight: "bold" }}>Dose</Text>
                            <View style={{ width: '100%', height: 30, backgroundColor: '#E7F1F1', borderColor: "#c3c3c3", borderWidth: 1, paddingHorizontal: '2%', justifyContent: 'center', borderRadius: 60 }}>
                                <TextInput
                                    ref="textInputMobile"
                                    style={{ fontSize: 15, color: '#000', width: '100%', borderRadius: 60 }}
                                    placeholder=''
                                    placeholderTextColor='#777'

                                    autoCapitalize='none'
                                    onChangeText={(Dose) => { this.setState({ Dose }); }}//email set
                                />
                            </View>
                        </View>
                        <Text>    </Text>
                        <TouchableOpacity
                            onPress={() => this.AddPres()}
                            style={{ width: "20%", height: 30, backgroundColor: "#089BAB", borderRadius: 60, alignItems: "center", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 14, color: "#fff", fontWeight: "bold" }}>ADD</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ height: 20 }}></View>
                    <FlatList
                        data={this.state.Pres}
                        extraData={this.state}
                        renderItem={({ item }) =>
                            <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold", marginBottom: 2 }}>Med name : {item.name}, Dose : {item.dose}</Text>}
                        keyExtractor={item => item.id}
                    />



                </View>
            );
        }
        else {
            return (
                <View style={styles.cardView}>
                    <View style={{ width: "100%", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontSize: 16, color: "#089BAB", fontWeight: "bold" }}>Add Lap Report</Text>
                            <Text style={{ fontSize: 12, color: "#c3c3c3", fontWeight: "600" }}>{this.state.name}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity
                                onPress={() => this.SaveReport()}
                                style={{ width: 200, height: 30, backgroundColor: "#089BAB", borderRadius: 60, alignItems: "center", justifyContent: 'center' }}>
                                <Text style={{ fontSize: 14, color: "#fff", fontWeight: "bold" }}>Save</Text>
                            </TouchableOpacity>
                            <Text>    </Text>
                            <TouchableOpacity
                                onPress={() => this.changeScreen(0)}
                                style={{ width: 200, height: 30, backgroundColor: "#7777", borderRadius: 60, alignItems: "center", justifyContent: 'center' }}>
                                <Text style={{ fontSize: 14, color: "#fff", fontWeight: "bold" }}>Back</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={{ height: 20 }}></View>
                    <View style={{ width: "100%" }}>
                        <View>
                            <Text style={{ fontSize: 12, color: "#777", fontWeight: "bold" }}>Title</Text>
                            <View style={{ width: '50%', height: 30, backgroundColor: '#E7F1F1', borderColor: "#c3c3c3", borderWidth: 1, paddingHorizontal: '2%', justifyContent: 'center', borderRadius: 60 }}>
                                <TextInput
                                    ref="textInputMobile"
                                    style={{ fontSize: 15, color: '#000', width: '100%', borderRadius: 60 }}
                                    placeholder=''
                                    placeholderTextColor='#777'

                                    autoCapitalize='none'
                                    onChangeText={(ReportTitle) => { this.setState({ ReportTitle }); }}//email set
                                />
                            </View>
                        </View>
                        <Text>    </Text>
                        <View>
                            <Text style={{ fontSize: 12, color: "#777", fontWeight: "bold" }}>Details</Text>
                            <View style={{ width: '100%', height: "100%", backgroundColor: '#E7F1F1', borderColor: "#c3c3c3", borderWidth: 1, paddingHorizontal: '2%', borderRadius: 10, paddingVertical: '2%' }}>
                                <TextInput
                                    ref="textInputMobile"
                                    style={{ fontSize: 15, color: '#000', width: '100%', borderRadius: 60 }}
                                    placeholder='Type here'
                                    placeholderTextColor='#777'

                                    autoCapitalize='none'

                                    onChangeText={(ReportDetails) => { this.setState({ ReportDetails }); }}//email set
                                />
                            </View>
                        </View>
                        <Text>    </Text>
                        <TouchableOpacity
                            onPress={() => this.AddReports()}
                            style={{ width: "20%", height: 30, backgroundColor: "#089BAB", borderRadius: 60, alignItems: "center", justifyContent: 'center' }}>
                            <Text style={{ fontSize: 14, color: "#fff", fontWeight: "bold" }}>ADD</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ height: 20 }}></View>
                    <FlatList
                        data={this.state.Reports}
                        extraData={this.state}
                        renderItem={({ item }) =>
                            <Text style={{ fontSize: 14, color: "#000", fontWeight: "bold", marginBottom: 2 }}>Title : {item.title}, Details : {item.details}</Text>}
                        keyExtractor={item => item.id}
                    />


                </View>

            );
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
        height: "80%",
        width: '90%',
        marginTop: '2%',
        // marginVertical: "2%",
        borderRadius: 60,
        paddingVertical: '3%',
        paddingHorizontal: "4%",

    },



})