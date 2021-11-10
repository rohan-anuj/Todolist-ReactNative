import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, FlatList, ScrollView,Alert, Button, TouchableOpacity } from "react-native"
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Todolist() {
    const [Data, setData] = useState([])
    const [name, setName] = useState("")
    

    function pressHandled(item) {
        setData(Data.filter(items => items.key != item))
    }
    function submitHandled() {
        if(name.length>3){
        setData(prev => {
            return [...prev, { name: name, key: Math.random().toString() }]
        })
        setName("")
    }
    else{
        Alert.alert("OOps!","Input should be more than 3",[{onPress:()=>console.log("Cancel Pressed")}])

    }
    }


    return (
        <View style={styles.container}>
            <TextInput style={styles.textcontain} value={name} onChangeText={(val) => setName(val)} placeholder="Todoo....." />
            <View style={{ marginTop: 10 }}><Button onPress={submitHandled} title="Add +" color="orange" />

            </View>
            <ScrollView style={{padding:10}}> 
                {Data.map(item =>
                    <TouchableOpacity key={item.key} onPress={() => pressHandled(item.key)} style={{ borderStyle: "dashed", flexDirection:"row", padding: 10, borderWidth: 1, borderRadius: 10, fontSize: 10, borderColor: "orange", fontWeight: "bold", width: 300, marginTop: 10 }}>
                    <MaterialIcons style={{ width:20, color:"#b3b9b1"}} name="delete" size={24} color="black" /> 
                       <Text style={{marginLeft:10 , fontSize:20,fontWeight:"bold", color:"#b3b9b1"}}>{item.name}</Text></TouchableOpacity>)}
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 30
    },
    textcontain: {
        borderBottomWidth: 2,
        borderColor: "orange",
        padding: 5,
        width: 250,
        fontWeight: "bold",
        fontSize: 20,
        color: "black"
    }
})
